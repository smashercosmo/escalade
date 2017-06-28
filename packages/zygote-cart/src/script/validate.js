// Validates an order and returns tax/shipping
module.exports = function(obj){

	this.showLoader()

	const xhr = new XMLHttpRequest()
	xhr.open('POST', `${this.api}/validate`, true)
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8')
	xhr.onload = () => {
		if(xhr.readyState == 4 && xhr.status == '200'){
			const obj = JSON.parse(xhr.responseText)
			if(obj.errors && obj.errors.length){
				this.showMessages(obj.errors)
			}
			this.hideLoader()
		}
	}
	const input = this.getInput('billing')
	input.products = this.products
	console.log('Sending:')
	console.log(input)
	xhr.send(JSON.stringify(input))
}
