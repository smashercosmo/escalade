import inputs from './inputs'

export default function validateAllInputs(){
	for(let i = 0; i < inputs.length; i++){
		if (inputs[i].validate) {
			inputs[i].validate()
		}
	}
}