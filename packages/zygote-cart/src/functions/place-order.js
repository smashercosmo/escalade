import dotenv from 'dotenv'
import Stripe from 'stripe'
dotenv.config({ silent: true })
const stripe = Stripe(process.env.STRIPE_API_SECRET)

export async function handler({ body }, __, callback){
	body = JSON.parse(body)

	// Validate product prices & stock here
	console.log(body)

	// Charge card
	let { status } = await stripe.charges.create({
		amount: body.totals.total * 100,
		currency: `usd`,
		description: `An example charge`,
		source: body.payment.id,
	})

	// Response
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({
			success: status === `succeeded` ? true : false,
		}),
	})
}