import inputs from './inputs'

export default function validateAllInputs(step){
	for (let i in inputs) {
		if (step && inputs[i].props.step !== step){
			continue
		}
		if (inputs[i].validate) {
			inputs[i].validate()
		}
	}
}