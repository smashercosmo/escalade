// Closes the cart UI
import { remove as removeClass } from './class-list'
module.exports = function(){
	this.isOpen = false
	removeClass(this.body, 'zygoteOpen')
	removeClass(this.els.container, 'zygoteShowTabs')
	this.changeStep(1)
	return this
}
