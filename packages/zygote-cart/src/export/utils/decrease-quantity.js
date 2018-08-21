import productState from '../state/products'
import calculateTotals from './calculate-totals'

export default function decreaseQuantity(id, n = 1) {
	let products = [...productState.state.products]
	for (let i = products.length; i--;) {
		if (products[i].id === id) {
			products[i].quantity -= n
			if (!products[i].quantity) {
				products[i].quantity = 1
			}
			break
		}
	}
	productState.setState({ products })
	calculateTotals()
}