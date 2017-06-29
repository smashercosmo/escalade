// Empties out all input fields
module.exports = function(){
	for(let i = this.els.input.length; i--;){
		if(this.els.input[i].getAttribute('type') !== 'checkbox'){
			this.els.input[i].value = ''
		}
		else{
			this.els.input[i].click()
		}
	}
	this.properties.length = 0
	return this
}
