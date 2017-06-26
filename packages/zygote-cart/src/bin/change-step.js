import {
	add as addClass,
	removePrefix,
	remove as removeClass
} from './class-list'

// Change step in UI
module.exports = function(n){
	this.step = n || 1
	removePrefix(this.els.container, 'zygoteOn')
	addClass(this.els.container, `zygoteOn${n}`)

	const cursor = this.step - 1
	for(let i = this.els.stepBtns.length; i--;){
		if(cursor === i){
			addClass(this.els.stepBtns[i], 'zygoteActive')
			addClass(this.els.steps[i], 'zygoteActive')
		}
		else{
			removeClass(this.els.stepBtns[i], 'zygoteActive')
			removeClass(this.els.steps[i], 'zygoteActive')
		}
	}
	return this
}
