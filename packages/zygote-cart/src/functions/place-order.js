import dotenv from 'dotenv'
import Stripe from 'stripe'
import SparkPost from 'sparkpost'
import Handlebars from 'handlebars'
dotenv.config({ silent: true })
const stripe = Stripe(process.env.STRIPE_API_SECRET)
const emailClient = new SparkPost(process.env.SPARKPOST_API_KEY)

export async function handler({ body }, __, callback) {

	body = JSON.parse(body)

	// Validate product prices & stock here
	console.log(`Received from client:`, body)

	// Create empty result object to be sent later
	const res = {
		messages: {
			error: [],
		},
		meta: body.meta,
	}

	// Update shipping method
	if(body.selectedShippingMethod){
		try {
			const req = await stripe.orders.update(res.meta.orderId, {
				selected_shipping_method: body.selectedShippingMethod,
			})
			res.success = true
			console.log(`Received from Stripe after updated shipping:`, req)
		}
		catch (err) {
			console.error(err)
			if (err.code === `out_of_inventory` || err.code === `resource_missing`) {
				res.messages.error.push(`Sorry! One or more items in your cart have gone out of stock. Please remove these products or try again later.`)
			}
			else if(err.message){
				res.messages.error.push(err.message)
			}
			res.success = false
		}
	}

	// Pay for order
	if (res.success) {
		let req
		try {
			req = await stripe.orders.pay(res.meta.orderId, {
				email: body.infoEmail,
				source: body.payment.id,
			})
			res.success = req.status === `paid`
			console.log(`Received from Stripe after order placement:`, req)
		}
		catch (err) {
			console.error(err)
			if (err.code === `out_of_inventory` || err.code === `resource_missing`) {
				res.messages.error.push(`Sorry! One or more items in your cart have gone out of stock. Please remove these products or try again later.`)
			}
			else if (err.message) {
				res.messages.error.push(err.message)
			}
			res.success = false
		}

	}

	// Send email confirmation
	if(res.success){
		const template = Handlebars.compile(`<html><body><p>{{infoName}}, we've received your order and we're excited to send it to you. When your order ships, we'll send you another email with your tracking info.</p></body></html>`)
		const html = template(body)
		console.log(`Sending ${html} to ${body.infoEmail}`)
		try {
			await emailClient.transmissions.send({
				content: {
					from: {
						name: `Escalade Sports`,
						email: `noreply@escaladeinc.com`,
					},
					subject: `Order Confirmation`,
					html,
				},
				recipients: [
					{ address: body.infoEmail },
				],
			})
		}
		catch(err){
			console.error(err)
		}
	}

	console.log(`Sending back to client:`, res)

	// Response
	callback(null, {
		statusCode: 200,
		body: JSON.stringify(res),
	})
}