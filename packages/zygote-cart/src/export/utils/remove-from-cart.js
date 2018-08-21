import productState from '../state/products'
import calculateTotals from './calculate-totals'

export default function removeFromCart(id){
	let products = [...productState.state.products]
	for (let i = products.length; i--;) {
		if (products[i].id === id) {
			products.splice(i, 1)
			break
		}
	}
	productState.setState({ products })
	calculateTotals()
}