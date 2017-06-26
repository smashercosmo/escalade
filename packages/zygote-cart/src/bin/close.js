// Closes the cart UI
import { remove as removeClass } from './class-list'
module.exports = function(){
	this.isOpen = false
	removeClass(this.body, 'zygoteOpen')
	return this
}
