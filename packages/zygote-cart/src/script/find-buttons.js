import { getAll as getData } from './data-set'

// Finds and activates "Add to Cart" buttons
module.exports = function(){
	const els = document.querySelectorAll('[data-id][data-price]:not(.zygoteProcessed)')
	for(let i = els.length; i--;){
		els[i].className = `${els[i].className} zygoteProcessed`
		els[i].addEventListener('click', () => {
			this.add(getData(els[i]))
		}, false)
	}
	return this
}
