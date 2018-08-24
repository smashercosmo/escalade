import fetch from 'isomorphic-fetch'
import stageState from '../state/stage'
import settingsState from '../state/settings'
import errorCheck from './error-check'
import getFormValues from './get-form-values'
import { triggerValidators } from './validators'

export default async function submitOrder() {
	triggerValidators()
	await tick()

	// Check for required fields
	if (errorCheck()) return
	stageState.setState({ processing: true })

	const vals = getFormValues()
	if (settingsState.state.stripeApiKey){
		let { token } = await window.zygoteStripeInstance
			.createToken({ name: `Name` })
		vals.payment = token
	}

	try {
		let data = await fetch(settingsState.state.orderEndpoint, {
			method: `post`,
			body: JSON.stringify(vals),
		})
		data = await data.json()
		console.log(data)
	}
	catch(err){
		console.error(err)
	}
}

function tick(){
	return new Promise((resolve) => {
		setTimeout(resolve, 1)
	})
}