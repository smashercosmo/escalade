// Finds and activates all quantity elements
// These will update with the number of items in the cart
module.exports = function(){
	const els = document.querySelectorAll('.zygoteQty:not(.zygoteProcessed)')
	for(let i = els.length; i--;){
		els[i].className = `${els[i].className} zygoteProcessed`
		this.qty.push(els[i])
	}
	return this
}
