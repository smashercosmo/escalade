// Opens the cart UI
import { add as addClass } from './class-list'
module.exports = function(){
	this.isOpen = true
	addClass(this.body, 'zygoteOpen')
	return this
}
