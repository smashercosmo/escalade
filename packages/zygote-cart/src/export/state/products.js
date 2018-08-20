import { State } from 'statable'

const productsState = new State({
	products: [],
}, {

	addProduct(newProduct){
		let products = [...this.state.products]
		if(!newProduct.qty){
			newProduct.qty = 1
		}
		let alreadyInCart = false
		for (let i = products.length; i--;){
			const product = products[i]
			if (product.id === newProduct.id) {
				alreadyInCart = true
				products[i] = {
					...newProduct,
					qty: products[i].qty + newProduct.qty,
				}
			}
		}
		if(!alreadyInCart){
			products.push(newProduct)
		}
		this.setState({ products })
	},

	removeProduct(id){
		let products = [...this.state.products]
		for(let i = products.length; i--;){
			if(products[i].id === id){
				products.splice(i, 1)
			}
		}
		this.setState({ products })
	},

})

export default productsState