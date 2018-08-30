import stageState from '../state/stage'
import clearMessages from './clear-messages'
import submitInfo from './submit-info'

export default function changeStage(stage) {
	stageState.setState({ stage })
	clearMessages()
	if (stage === `payment`) {
		submitInfo()
	}
}