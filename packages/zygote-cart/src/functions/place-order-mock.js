export async function handler(_, __, callback) {
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