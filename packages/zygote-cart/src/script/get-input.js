// Validates an order and returns tax/shipping
module.exports = function(){
	const obj = {}
	const inputs = this.el.container.querySelectorAll('input')
	for(let i = inputs.length; i--;){
		obj[inputs[i].getAttribute('name')] = inputs[i].value
	}
	return obj
}
