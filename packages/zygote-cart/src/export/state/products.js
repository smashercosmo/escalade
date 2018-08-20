import { State } from 'statable'
import { openCart } from './open'

const productsState = new State({
	products: [],
}, {

	addToCart(newProduct){
		let products = [...this.state.products]
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
		this.setState({ products })
	},

	removeFromCart(id){
		let products = [...this.state.products]
		for(let i = products.length; i--;){
			if(products[i].id === id){
				products.splice(i, 1)
			}
		}
		this.setState({ products })
	},

}, {
	localStorage: `zygoteCart`,
})

export default productsState