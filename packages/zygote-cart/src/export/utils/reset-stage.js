import stageState from '../state/stage'

export default function resetStage() {
	stageState.setState({
		stage: `cart`,
	})
}