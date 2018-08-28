import shippingState from '../state/shipping'
import addTotalModification from './add-total-modification'

export default function setShipping(selected) {
	const method = findShippingMethod(selected)
	if(!method) return
	shippingState.setState({ selected })
	addTotalModification({
		id: `shipping`,
		description: method.description,
		displayValue: method.displayValue,
		alteration: method.value,
	})
}

function findShippingMethod(id){
	const { methods } = shippingState.state
	for (let i = methods.length; i--;){
		if(methods[i].id === id) {
			return methods[i]
		}
	}
	return false
}