import stageState from '../state/stage'
import clearMessages from './clear-messages'
import postInfoEvent from './post-info-event'

export default function changeStage(stage) {
	stageState.setState({ stage })
	clearMessages()
	if (stage === `payment`) {
		postInfoEvent()
	}
}