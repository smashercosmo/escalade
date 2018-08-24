export function handler({ body }, __, callback){
	console.log(body)
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({
			success: true,
		}),
	})
}