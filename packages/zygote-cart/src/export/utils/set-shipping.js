import shippingState from '../state/shipping'
import addTotalModification from './add-total-modification'

export default function setShipping(selected, setId) {
	const method = findShippingMethod(selected)
	if(!method) return
	if (setId){
		const selectedSet = shippingState.state.selected
		selectedSet[setId] = selected
		shippingState.setState({ selected: selectedSet })
	}
	else {
		shippingState.setState({ selected })
	}
	addTotalModification({
		id: setId ? `shipping-${setId}` : `shipping`,
		description: method.description,
		displayValue: method.displayValue,
		value: method.value,
	})
}

function findShippingMethod(id){
	const { methods } = shippingState.state
	for (let i = methods.length; i--;){
		const method = methods[i]
		if (method.shippingMethods){
			for(let i = method.shippingMethods.length; i--;){
				const innerMethod = method.shippingMethods[i]
				if (innerMethod.id === id) {
					return innerMethod
				}
			}
		}
		else {
			if (method.id === id) {
				return method
			}
		}
	}
	return false
}