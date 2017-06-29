// Validates an order and returns tax/shipping
module.exports = function(excludePrefix){
	const obj = {}
	const inputs = this.els.container.querySelectorAll('input, select')
	for(let i = inputs.length; i--;){
		const name = inputs[i].getAttribute('name')
		if(name.indexOf(excludePrefix) === 0) continue
		if(inputs[i].getAttribute('type') === 'checkbox'){
			obj[name] = inputs[i].checked
		}
		else{
			obj[name] = inputs[i].value
		}
	}
	for(let i in this.properties){
		obj[i] = this.properties[i]
	}
	return obj
}
