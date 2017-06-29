// Opens the cart UI
import { add as addClass } from './class-list'
module.exports = function(){
	if(this.dirty){
		this.render()
		this.dirty = false
	}
	this.isOpen = true
	addClass(this.body, 'zygoteOpen')
	return this
}
