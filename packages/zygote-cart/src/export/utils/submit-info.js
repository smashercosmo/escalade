import fetch from './fetch'
import getFormValues from './get-form-values'
import settingsState from '../state/settings'
import totalsState from '../state/totals'
import shippingState from '../state/shipping'

export default async function submitInfo() {
	const { infoWebhook } = settingsState.state
	if (infoWebhook) {
		totalsState.setState({ loading: true })
		shippingState.setState({ loading: true })
		const vals = getFormValues()
		vals.event = `info`
		await fetch(infoWebhook, vals)
		totalsState.setState({ loading: false })
		shippingState.setState({ loading: false })
	}
}