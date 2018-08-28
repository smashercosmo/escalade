export async function handler({ body }, __, callback) {

	body = JSON.parse(body)

	// Validate product prices & stock here
	console.log(`Received from client:`, body)


	// Response
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({
			success: true,
			meta: {
				orderNumber: `TEST123`,
			},
		}),
	})
}