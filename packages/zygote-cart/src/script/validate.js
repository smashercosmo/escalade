// Validates an order and returns tax/shipping
module.exports = function(obj){

	this.showLoader()

	const xhr = new XMLHttpRequest()
	xhr.open('POST', `${this.api}/validate`, true)
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8')
	xhr.onload = () => {
		if(xhr.readyState == 4 && xhr.status == '200'){
			console.log(JSON.parse(xhr.responseText))
			this.hideLoader()
		}
	}
	const input = this.getInput()
	console.log('Sending:')
	console.log(input)
	xhr.send(JSON.stringify(input))
}
