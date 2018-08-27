import fetch from 'isomorphic-fetch'
import metaState from '../state/meta'

export default async function fetchWebhook(path, body) {
	let data = await fetch(path, {
		method: `post`,
		body: JSON.stringify({
			...body,
			meta: metaState.state.meta,
		}),
	})
	data = await data.json()
	const { meta } = data
	if (typeof meta === `object`){
		metaState.setState({ meta })
	}
	return data
}