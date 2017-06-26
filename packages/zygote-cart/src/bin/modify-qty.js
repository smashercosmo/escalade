// Modifies quantity of a product by ID
module.exports = function(id, modifier){
	const index = this.findProduct(id)
	if(index !== false){
		const qty = this.products[index].qty + modifier
		if(qty > 0){
			this.products[index].qty = qty
		}
		else{
			return this.remove(id)
		}
	}
	return this.update()
}
