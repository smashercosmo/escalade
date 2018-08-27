import fetch from 'isomorphic-fetch'
import metaState from '../state/meta'
import displayError from './display-error'
import displayInfo from './display-info'

export default async function fetchWebhook(path, body) {
	let data
	try {
		const jsonBody = JSON.stringify({
			...body,
			meta: metaState.state.meta,
		})
		console.log(`Sending to API:`, jsonBody)
		data = await fetch(path, {
			method: `post`,
			body: jsonBody,
		})
		data = await data.json()

		console.log(`Received from API:`, data)
	}
	catch(err){
		console.error(err)
		data = {}
	}
	const { meta, messages } = data
	if (typeof meta === `object`){
		metaState.setState({ meta })
	}
	if (messages) {
		displayError(messages.error)
		displayInfo(messages.info)
	}
	return data
}