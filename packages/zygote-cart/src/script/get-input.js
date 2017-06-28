// Validates an order and returns tax/shipping
module.exports = function(){
	const obj = {}
	const inputs = this.els.container.querySelectorAll('input')
	for(let i = inputs.length; i--;){
		obj[inputs[i].getAttribute('name')] = inputs[i].value
	}
	for(let i in this.properties){
		obj[i] = this.properties[i]
	}
	return obj
}
