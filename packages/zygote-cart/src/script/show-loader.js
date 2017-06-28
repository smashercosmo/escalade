import { add as addClass } from './class-list'
// Show loading animation
module.exports = function(){
	addClass(this.els.container, 'zygoteLoading')
}
