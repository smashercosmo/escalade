// Find a product index by ID
module.exports = function(id){
	for(let i = this.products.length; i--;){
		if(this.products[i].id == id){
			return i
		}
	}
	return false
}
