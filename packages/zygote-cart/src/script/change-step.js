import {
	add as addClass,
	removePrefix,
	remove as removeClass
} from './class-list'

// Change step in UI
module.exports = function(n){
	this.hideMessages()
	this.step = n || 1

	if(this.step === 4){
		this.validate()
		this.els.nextBtn.textContent = 'Confirm Order'
	}
	else{
		this.els.nextBtn.textContent = 'Next Step'
	}

	removePrefix(this.els.container, 'zygoteOn')
	addClass(this.els.container, `zygoteOn${n}`)
	if(this.step > 1){
		console.log('zygoteShowTabs')
		addClass(this.els.container, 'zygoteShowTabs')
	}


	const cursor = this.step - 1
	for(let i = this.els.tabs.length; i--;){
		if(cursor === i){
			addClass(this.els.tabs[i], 'zygoteActive')
			addClass(this.els.steps[i], 'zygoteActive')
			const input = this.els.steps[i].querySelector('input')
			if(input) input.focus()
		}
		else{
			removeClass(this.els.tabs[i], 'zygoteActive')
			removeClass(this.els.steps[i], 'zygoteActive')
		}
	}
	return this
}
