import inputs from './inputs'

export default function validateAllInputs(stage){
	for (let i in inputs) {
		if(stage && inputs[i].props.stage !== stage){
			continue
		}
		if (inputs[i].validate) {
			inputs[i].validate()
		}
	}
}