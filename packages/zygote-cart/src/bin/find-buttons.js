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


function getData(el){
	const obj = {}
	for(let i in el.dataset){
		obj[i] = (el.dataset[i] !== '') ? el.dataset[i] : true
	}
	return obj
}
