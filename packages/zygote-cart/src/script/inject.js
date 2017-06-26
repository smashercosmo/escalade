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
		tabs: el.querySelectorAll('.zygoteTabs li')
	}

	// Attach events
	el.addEventListener('click', e => {
		events.call(this, e)
	}, false)
}
