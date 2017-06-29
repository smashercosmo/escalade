// Validates an order and returns tax/shipping
module.exports = function(excludePrefix){
	const obj = {}
	for(let i = this.els.input.length; i--;){
		const name = this.els.input[i].getAttribute('name')
		if(name.indexOf(excludePrefix) === 0) continue
		if(this.els.input[i].getAttribute('type') === 'checkbox'){
			obj[name] = this.els.input[i].checked
		}
		else{
			obj[name] = this.els.input[i].value
		}
	}
	for(let i in this.properties){
		obj[i] = this.properties[i]
	}
	return obj
}
