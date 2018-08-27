import fetch from './fetch'
import getFormValues from './get-form-values'
import settingsState from '../state/settings'
import addTotalModification from './add-total-modification'
import totalsState from '../state/totals'

export default async function postInfo() {
	const { postInfoEndpoint } = settingsState.state
	if (postInfoEndpoint) {
		totalsState.setState({ loading: true })
		const vals = getFormValues()
		vals.event = `post-info`
		const data = await fetch(settingsState.state.postInfoEndpoint, vals)
		addTotalModification(data.modifications)
		totalsState.setState({ loading: false })
	}
}