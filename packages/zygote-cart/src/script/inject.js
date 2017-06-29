import { cart as cartTemplate } from './templates'
import events from './events'

module.exports = function(){
	// Create cart elements
	const el = cartTemplate()
	const body = document.getElementsByTagName('body')[0]
	if(body) body.appendChild(el)

	// Query useful elements
	this.els = {
		container: el,
		list: el.querySelector('.zygoteProdList'),
		steps: el.querySelectorAll('.zygoteStep'),
		tabs: el.querySelectorAll('.zygoteTabs li'),
		subtotals: el.querySelectorAll('.zygoteSubTotal'),
		msgs: el.querySelector('.zygoteMsgs'),
		nextBtn: el.querySelector('.zygoteNext'),
		tax: el.querySelector('.zygoteTax'),
		ship: el.querySelector('.zygoteShip'),
		total: el.querySelector('.zygoteTotal'),
		input: el.querySelectorAll('input, select')
	}

	// Attach events
	el.addEventListener('click', e => {
		events.parent.call(this, e)
	}, false)
	events.other.call(this)
}
