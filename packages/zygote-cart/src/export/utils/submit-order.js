import fetch from './fetch'
import stageState from '../state/stage'
import settingsState from '../state/settings'
import productsState from '../state/products'
import totalsState from '../state/totals'
import errorCheck from './error-check'
import getFormValues from './get-form-values'
import clearMessages from './clear-messages'
import messagesState from '../state/status-messages'
import validateAllInput from './validate-all-input'
import displayError from './display-error'
import metaState from '../state/meta'
import shippingState from '../state/shipping'
import successState from '../state/success'

export default async function submitOrder() {
	clearMessages()
	validateAllInput()

	// Check for required fields
	if (errorCheck()) return
	stageState.setState({ processing: true })

	const body = getFormValues()
	if (settingsState.state.stripeApiKey){
		let { token } = await window.zygoteStripeInstance
			.createToken({ name: `Name` })
		body.payment = token
	}

	body.products = productsState.state.products
	const {
		subtotal,
		modifications,
		total,
	} = totalsState.state
	body.totals = {
		subtotal,
		modifications,
		total,
	}
	body.event = `submit-order`

	console.log(`Sending to API:`, body)

	let data
	try {
		data = await fetch(settingsState.state.orderEndpoint, body)
		console.log(`Received from API:`, data)
	}
	catch(err){
		data = {}
		console.error(err)
	}

	if (!data.success) {
		if (!messagesState.state.errors.length){
			displayError(`We're sorry! There was an error with the server. Your order was not placed. Please try again later.`)
		}
		if(data.returnTo){
			stageState.setState({ stage: data.returnTo })
		}
		else {
			stageState.setState({ stage: `payment` })
		}
	}
	else {
		successState.setState({
			totals: {...totalsState.state},
			products: [...productsState.state.products],
			meta: {...metaState.state.meta},
		})
		stageState.setState({ stage: `success` })
		totalsState.reset()
		productsState.reset()
		metaState.reset()
		shippingState.reset()
	}

	stageState.setState({ processing: false })
}