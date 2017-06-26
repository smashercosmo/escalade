import { cart as cartTemplate } from './templates'
module.exports = function(){
	// Create cart elements
	const el = cartTemplate()
	const body = document.getElementsByTagName('body')[0]
	if(body) body.appendChild(el)

	// Query useful elements
	this.els = {
		container: el,
		list: el.querySelector('.zygoteProdList')
	}

	// Attach events
	el.addEventListener('click', e => {
		switch(e.target.className.split(' ')[0]){
			case 'zygoteProdX':
				this.remove(getProductId(e.target))
				break
			case 'zygoteContainer':
			case 'zygoteClose':
				this.close()
				break
			case 'zygoteDecrease':
				this.modifyQty(getProductId(e.target), -1)
				break
			case 'zygoteIncrease':
				this.modifyQty(getProductId(e.target), 1)
				break
		}
	}, false)
}

function getProductId(el){
	while(!el.dataset.id){
		el = el.parentElement
	}
	return el.dataset.id
}
