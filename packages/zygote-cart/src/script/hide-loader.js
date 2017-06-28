import { remove as removeClass } from './class-list'
// Show loading animation
module.exports = function(){
	removeClass(this.els.container, 'zygoteLoading')
}
