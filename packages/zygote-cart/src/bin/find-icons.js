// Finds and activates all cart icon buttons
// These will open the cart when clicked
module.exports = function(){
	const els = document.querySelectorAll('.zygoteIco:not(.zygoteProcessed)')
	for(let i = els.length; i--;){
		els[i].className = `${els[i].className} zygoteProcessed`
		els[i].addEventListener('click', () => this.open(), false)
	}
}
