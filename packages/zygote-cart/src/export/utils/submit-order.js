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
	console.log(vals)
}

function tick(){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve()
		}, 1)
	})
}