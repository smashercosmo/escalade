export async function handler(_, __, callback) {
	await tick()
	const body = JSON.stringify({
		success: true,
		modifications: [
			{
				id: `taxes`,
				description: `Taxes`,
				alteration: 10,
			},
		],
	})

	// Response
	callback(null, {
		statusCode: 200,
		body,
	})
}

function tick(){
	return new Promise((resolve) => {
		setTimeout(resolve, 1000)
	})
}