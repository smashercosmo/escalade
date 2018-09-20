import stepState from '../state/step'
import steps from './steps'
import changeStep from './change-step'

export default function nextStep(){
	let index = steps.indexOf(stepState.state.step) + 1
	let step = steps[index]
	if (step) {
		console.log(`Moving to step ${step}`)
		changeStep(step)
	}
}