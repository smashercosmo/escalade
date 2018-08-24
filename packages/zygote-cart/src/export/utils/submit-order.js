import stageState from '../state/stage'
import errorCheck from './error-check'
import getFormValues from './get-form-values'
import { triggerValidators } from './validators'

export default function submitOrder() {
	triggerValidators()
	setTimeout(() => {
		const vals = getFormValues()
		console.log(vals)
		if (errorCheck()) return
		stageState.setState({ processing: true })
	}, 1)
}