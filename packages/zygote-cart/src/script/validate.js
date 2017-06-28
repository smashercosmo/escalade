// Validates an order and returns tax/shipping
module.exports = function(obj, cb){
	const xhr = new XMLHttpRequest()
	xhr.open('POST', `${this.api}/validate`, true)
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8')
	xhr.onload = () => {
		if(xhr.readyState == 4 && xhr.status == '200'){
			cb(JSON.parse(xhr.responseText))
		}
	}
	const input = this.getInput()
	xhr.send(input)
}
