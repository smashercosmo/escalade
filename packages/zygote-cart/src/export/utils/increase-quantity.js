import productState from '../state/products'
import calculateTotals from './calculate-totals'

export default function increaseQuantity(id, n = 1) {
	let products = [...productState.state.products]
	for (let i = products.length; i--;) {
		if (products[i].id === id) {
			products[i].quantity += n
			break
		}
	}
	productState.setState({ products })
	calculateTotals()
}