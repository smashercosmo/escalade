import {
	add as addClass,
	removePrefix
} from './class-list'

// Change step in UI
module.exports = function(n){
	console.log('changing step...')
	this.step = n || 1
	removePrefix(this.els.container, 'zygoteOn')
	addClass(this.els.container, `zygoteOn${n}`)
	return this
}
