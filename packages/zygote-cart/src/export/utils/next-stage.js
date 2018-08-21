import stageState from '../state/stage'
import stages from './stages'
import shouldSkipShipping from './should-skip-shipping'

export default function nextStage(){
	let index = stages.indexOf(stageState.state.stage) + 1
	let stage = stages[index]
	if (stage) {
		if (stage === `shipping` && shouldSkipShipping()) {
			stage = stages[index + 1]
		}
		stageState.setState({ stage })
	}
}