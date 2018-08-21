import { State } from 'statable'
import { openCart } from './open'
import { calculateTotals } from './totals'

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
		calculateTotals()
	},

	removeFromCart(id){
		let products = [...this.state.products]
		for(let i = products.length; i--;){
			if(products[i].id === id){
				products.splice(i, 1)
				break
			}
		}
		this.setState({ products })
		calculateTotals()
	},

	decreaseQuantity(id, n = 1) {
		let products = [...this.state.products]
		for (let i = products.length; i--;) {
			if (products[i].id === id) {
				products[i].quantity -= n
				if (!products[i].quantity){
					products[i].quantity = 1
				}
				break
			}
		}
		this.setState({ products })
		calculateTotals()
	},

	increaseQuantity(id, n = 1) {
		let products = [...this.state.products]
		for (let i = products.length; i--;) {
			if (products[i].id === id) {
				products[i].quantity += n
				break
			}
		}
		this.setState({ products })
		calculateTotals()
	},

}, {
	localStorage: `zygoteCart`,
})

export default productsState