// Change quantity of a product by ID
module.exports = function(id, qty){
	if(qty < 1) return this.remove(id)
	const index = this.findProduct(id)
	if(index !== false){
		this.products[index].qty = qty
	}
	return this.update()
}
