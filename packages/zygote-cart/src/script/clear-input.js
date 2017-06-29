// Empties out all input fields
module.exports = function(){
	const inputs = this.els.container.querySelectorAll('input, select')
	for(let i = inputs.length; i--;){
		if(inputs[i].getAttribute('type') !== 'checkbox'){
			inputs[i].value = ''
		}
		else{
			inputs[i].click()
		}
	}
	this.properties.length = 0
	return this
}
