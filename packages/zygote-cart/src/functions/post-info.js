import dotenv from 'dotenv'
import Stripe from 'stripe'
dotenv.config({ silent: true })
const stripe = Stripe(process.env.STRIPE_API_SECRET)

export async function handler({ body }, __, callback) {

	body = JSON.parse(body)

	// Validate product prices & stock here
	console.log(`Received from client:`, body)

	// Create stripe order
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


	// Get tax
	let tax
	for(let i = order.items.length; i--;){
		const item = order.items[i]
		if(item.type === `tax`){
			tax = {
				id: `tax`,
				alteration: item.amount / 100,
				description: item.description,
			}
		}
	}


	// Get shipping
	const shippingMethods = order.shipping_methods.map(({ id, amount, description }) => {
		return {
			id,
			value: amount / 100,
			description,
		}
	})


	// Response
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({
			modifications: [tax],
			selectedShippingMethod: order.selected_shipping_method,
			shippingMethods,
		}),
	})
}