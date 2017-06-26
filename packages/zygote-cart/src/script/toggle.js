// Toggles the cart UI
import { toggle as toggleClass } from './class-list'
module.exports = function(){
	this.isOpen = toggleClass(this.body, 'zygoteOpen')
	return this
}
