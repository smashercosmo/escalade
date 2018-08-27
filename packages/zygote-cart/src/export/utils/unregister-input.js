import inputs from './inputs'

export default function unregisterInput(input) {
	const index = inputs.indexOf(input)
	if(index > -1){
		inputs.splice(index, 1)
	}
}