import { remove as removeClass } from './class-list'
// Clears input errors
module.exports = function(){
	for(let i = this.els.input.length; i--;){
		removeClass(this.els.input[i], 'zygoteInputErr')
	}
	return this
}
