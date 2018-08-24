import fetch from 'isomorphic-fetch'
import stageState from '../state/stage'
import settingsState from '../state/settings'
import errorCheck from './error-check'
import getFormValues from './get-form-values'
import { triggerValidators } from './validators'
import displayError from '../utils/display-error'
import displayInfo from '../utils/display-info'
import clearMessages from './clear-messages'

export default async function submitOrder() {
	clearMessages()
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

	let data
	try {
		data = await fetch(settingsState.state.orderEndpoint, {
			method: `post`,
			body: JSON.stringify(vals),
		})
		data = await data.json()
		console.log(data)
	}
	catch(err){
		console.error(err)
	}

	if (!data.success) {
		if (data.messages){
			displayError(data.messages.error)
			displayInfo(data.messages.info)
		}
		if(data.returnTo){
			stageState.setState({ stage: data.returnTo })
		}
		else {
			stageState.setState({ stage: `billing` })
		}
		return
	}

	stageState.setState({ stage: `success` })
}

function tick(){
	return new Promise((resolve) => {
		setTimeout(resolve, 1)
	})
}