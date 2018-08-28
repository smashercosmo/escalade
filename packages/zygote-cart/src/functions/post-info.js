import dotenv from 'dotenv'
import Stripe from 'stripe'
dotenv.config({ silent: true })
const stripe = Stripe(process.env.STRIPE_API_SECRET)

export async function handler({ body }, __, callback) {

	body = JSON.parse(body)

	// Validate product prices & stock here
	console.log(`Received from client:`, body)

	// Charge card
	let order = await stripe.orders.create({
		currency: `usd`,
		email: body.shippingEmail,
		items: body.products.map(({ id, quantity }) => {
			return {
				type: `sku`,
				parent: id,
				quantity,
			}
		}),
		shipping: {
			name: body.shippingName,
			address: {
				line1: body.shippingAddress1,
				line2: body.shippingAddress2,
				city: body.shippingCity,
				postal_code: body.shippingZip,
				country: `US`,
			},
		},
	})


	console.log(order)





	// Response
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({
			selectedShippingMethod: order.selected_shipping_method,
			shippingMethods: order.shipping_methods.map(({ id, amount, description }) => {
				return {
					id,
					value: amount / 100,
					description,
				}
			}),
		}),
	})
}