import stageState from '../state/stage'
import stages from './stages'
import changeStage from './change-stage'

export default function nextStage(){
	let index = stages.indexOf(stageState.state.stage) + 1
	let stage = stages[index]
	if (stage) {
		changeStage(stage)
	}
}