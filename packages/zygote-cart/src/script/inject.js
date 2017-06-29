import { cart as cartTemplate } from './templates'
import events from './events'

module.exports = function(){
	// Create cart elements
	const el = cartTemplate()
	const body = document.getElementsByTagName('body')[0]
	if(body) body.appendChild(el)


	this.getElements(el)

	// Attach events
	el.addEventListener('click', e => {
		events.parent.call(this, e)
	}, false)
	events.other.call(this)
}
