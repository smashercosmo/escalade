import dotenv from 'dotenv'
import Stripe from 'stripe'
dotenv.config({ silent: true })
const stripe = Stripe(process.env.STRIPE_API_SECRET)

export async function handler({ body }, __, callback) {

	body = JSON.parse(body)

	// Validate product prices & stock here
	console.log(`Received from client:`, body)

	const { stripeOrderId } = body.meta

	// Update shipping method
	if(body.selectedShippingMethod){
		const res = await stripe.orders.update(stripeOrderId, {
			selected_shipping_method: body.selectedShippingMethod,
		})
		console.log(`Received from Stripe after updated shipping:`, res)
	}

	// Pay for order
	const res = await stripe.orders.pay(stripeOrderId, {
		source: body.payment.id,
	})

	console.log(`Received from Stripe after order placement:`, res)

	// Response
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({
			success: res.status === `paid`,
			meta: {
				orderId: stripeOrderId,
			},
		}),
	})
}