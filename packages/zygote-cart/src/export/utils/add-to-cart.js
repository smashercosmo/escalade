import productState from '../state/products'
import openCart from './open-cart'
import calculateTotals from './calculate-totals'

export default function addToCart(newProduct){
	let products = [...productState.state.products]
	if (!newProduct.quantity){
		newProduct.quantity = 1
	}
	let alreadyInCart = false
	for (let i = products.length; i--;){
		const product = products[i]
		if (product.id === newProduct.id) {
			alreadyInCart = true
			products[i] = {
				...newProduct,
				quantity: products[i].quantity + newProduct.quantity,
			}
		}
	}
	if(!alreadyInCart){
		products.push(newProduct)
	}
	if(!newProduct.noOpen){
		openCart()
	}
	productState.setState({ products })
	calculateTotals()
}