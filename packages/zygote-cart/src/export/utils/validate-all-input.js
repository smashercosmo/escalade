import inputs from './inputs'

export default function validateAllInputs(){
	for (let i in inputs) {
		if (inputs[i].validate) {
			inputs[i].validate()
		}
	}
}