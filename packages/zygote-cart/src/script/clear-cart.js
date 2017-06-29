import { remove as removeClass } from './class-list'
// Clears the cart without rendering
module.exports = function(){
	// Mark cart as dirty so it can rerender on next open
	this.dirty = true

	// Clear cart
	this.products.length = 0
	this.saveCookie()
	// Update qty buttons
	for(let i = this.qty.length; i--;){
		this.qty[i].textContent = 0
		removeClass(this.qty[i], 'zygoteHasQty')
	}
	return this
}
