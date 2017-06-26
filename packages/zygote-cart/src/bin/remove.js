// Remove item from cart by ID
module.exports = function(id){
	const index = this.findProduct(id)
	if(index !== false){
		this.products.splice(index, 1)
	}
	return this.update()
}
