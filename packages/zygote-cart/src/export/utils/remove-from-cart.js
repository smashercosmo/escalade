import productState from '../state/products'
import calculateTotals from './calculate-totals'
import onRemoveProduct from '../events/on-remove-product'

export default function removeFromCart(id){
	let products = [...productState.state.products]
	let removedProduct
	for (let i = products.length; i--;) {
		if (products[i].id === id) {
			removedProduct = products[i]
			products.splice(i, 1)
			break
		}
	}
	productState.setState({ products })
	calculateTotals()
	if (removedProduct){
		onRemoveProduct(removedProduct)
	}
}