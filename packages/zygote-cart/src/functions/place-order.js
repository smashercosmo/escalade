import dotenv from 'dotenv'
import Stripe from 'stripe'
dotenv.config({ silent: true })
const stripe = Stripe(process.env.STRIPE_API_SECRET)

export async function handler({ body }, __, callback){
	body = JSON.parse(body)

	let { status } = await stripe.charges.create({
		amount: 100,
		currency: `usd`,
		description: `An example charge`,
		source: body.payment.id,
	})

	callback(null, {
		statusCode: 200,
		body: JSON.stringify({
			success: status === `succeeded` ? true : false,
		}),
	})
}