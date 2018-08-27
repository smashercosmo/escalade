import inputs from './inputs'

export default function getFormValues(){
	let obj = {}
	inputs.forEach(input => {
		if (!input.props.name) return
		obj[input.props.name] = input.state.value
	})
	console.log(`getFormValues`, obj)
	return obj
}