import stepState from '../state/step'
import clearMessages from './clear-messages'
import submitInfo from './submit-info'

export default function changeStep(step) {
	stepState.setState({ step })
	clearMessages()
	if (step === `shipping`) {
		submitInfo()
	}
}