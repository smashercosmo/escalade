import fetch from './fetch'
import getFormValues from './get-form-values'
import settingsState from '../state/settings'
import totalsState from '../state/totals'
import shippingState from '../state/shipping'

export default async function postInfo() {
	const { postInfoEndpoint } = settingsState.state
	if (postInfoEndpoint) {
		totalsState.setState({ loading: true })
		shippingState.setState({ loading: true })
		const vals = getFormValues()
		vals.event = `post-info`
		await fetch(settingsState.state.postInfoEndpoint, vals)
		totalsState.setState({ loading: false })
		shippingState.setState({ loading: false })
	}
}