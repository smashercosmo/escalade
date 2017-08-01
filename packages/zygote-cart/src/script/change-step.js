import {
	add as addClass,
	removePrefix,
	remove as removeClass
} from './class-list'

// Change step in UI
module.exports = function(n, noProcess){
	if(!noProcess){
		this.hideMessages()
	}
	this.step = n || 1

	removePrefix(this.els.container, 'zygoteOn')
	addClass(this.els.container, `zygoteOn${n}`)
	if(this.step > 1){
		addClass(this.els.container, 'zygoteShowTabs')
	}


	// Change tab and step container
	const cursor = this.step - 1
	for(let i = 5; i--;){
		if(cursor === i){
			if(this.els.tabs[i]){
				addClass(this.els.tabs[i], 'zygoteActive')
			}
			addClass(this.els.steps[i], 'zygoteActive')
			const input = this.els.steps[i].querySelector('input')
			if(input) input.focus()
		}
		else{
			if(this.els.tabs[i]){
				removeClass(this.els.tabs[i], 'zygoteActive')
			}
			removeClass(this.els.steps[i], 'zygoteActive')
		}
	}

	// If on shipping
	if(this.step === 2){
		if(this.googleAnalytics && 'ga' in window){
			ga('send', 'event', {
				eventCategory: 'Zygote Cart',
				eventAction: 'shipping'
			})
		}
	}
	else if(this.step === 3){
		if(this.googleAnalytics && 'ga' in window){
			ga('send', 'event', {
				eventCategory: 'Zygote Cart',
				eventAction: 'billing'
			})
		}
	}
	// If on validation
	else if(this.step === 4){
		if(this.googleAnalytics && 'ga' in window){
			ga('send', 'event', {
				eventCategory: 'Zygote Cart',
				eventAction: 'validation'
			})
		}
		if(!noProcess){
			this.validate()
		}
		this.els.nextBtn.textContent = 'Place Order'
	}
	// If placing order
	else if(this.step === 5){
		if(this.googleAnalytics && 'ga' in window){
			ga('send', 'event', {
				eventCategory: 'Zygote Cart',
				eventAction: 'confirmation'
			})
		}
		if(!noProcess){
			this.placeOrder()
		}
	}
	else{
		this.els.nextBtn.textContent = 'Next Step'
	}


	return this
}
