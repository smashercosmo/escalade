import stageState from '../state/stage'
import errorCheck from './error-check'
import getFormValues from './get-form-values'

export default function submitOrder() {
	const vals = getFormValues()
	console.log(vals)
	if(errorCheck()) return
	stageState.setState({ processing: true })
}