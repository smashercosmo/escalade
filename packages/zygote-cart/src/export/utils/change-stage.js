import stageState from '../state/stage'
import clearMessages from './clear-messages'

export default function changeStage(stage) {
	stageState.setState({ stage })
	clearMessages()
}