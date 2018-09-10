import dotenv from 'dotenv'
import { submitStripeInfo } from '../export/server'
dotenv.config({ silent: true })

export async function handler({ body }, __, callback) {

	const res = await submitStripeInfo({
		stripeApiSecret: process.env.STRIPE_API_SECRET,
		body,
		verbose: true,
	})

	// Response
	callback(null, {
		statusCode: 200,
		body: JSON.stringify(res),
	})
}