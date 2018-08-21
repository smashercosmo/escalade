import productsState from '../state/products'

export default function shouldSkipShipping() {
	let skip = true
	const { products } = productsState.state
	for (let i = products.length; i--;) {
		if (!products[i].skipShipping) {
			skip = false
			break
		}
	}
	return skip
}