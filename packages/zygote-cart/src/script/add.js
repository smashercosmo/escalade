// Adds products to the cart
module.exports = function(obj){
	if(typeof obj.qty !== 'number') obj.qty = 1
	if(obj.qty < 1) return this
	obj.price = obj.price.replace('$', '')
	obj.price = Number(obj.price)
	const index = this.findProduct(obj.id)
	if(index !== false){
		this.products[index].qty += obj.qty
	}
	else{
		this.products.push(obj)
	}
	this.update()
	if(obj.openCart){
		this.open()
	}
	return this
}
