import stageState from '../state/stage'
import stages from './stages'

export default function previousStage() {
	let index = stages.indexOf(stageState.state.stage) - 1
	let stage = stages[index]
	if (stage) {
		stageState.setState({ stage })
	}
}