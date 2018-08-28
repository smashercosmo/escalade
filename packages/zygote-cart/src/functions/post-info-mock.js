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
		selectedShippingMethod: `rate_d3a94b44b02b48668a1d228a8c4982e6`,
		shippingMethods: [
			{
				id: `rate_d3a94b44b02b48668a1d228a8c4982e6`,
				value: 5.60,
				description: `USPS: Priority (1 day delivery)`,
			},
			{
				id: `rate_fc289c1131a94af58e19aa3e724d40c5`,
				value: 5.95,
				description: `USPS: ParcelSelect (2 day delivery)`,
			},
			{
				id: `rate_c8401086a10049fc9b3a9a37bcbcd5d4`,
				value: 20.66,
				description: `USPS: Express (1 day delivery)`,
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