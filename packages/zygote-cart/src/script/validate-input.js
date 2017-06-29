// Validates client side inputs
module.exports = function(){
	const input = this.getInput()
	const errors = {}

	// Shipping
	if(!input.shippingFirst){
		errors.shippingFirst = template('first name')
	}
	if(!input.shippingLast){
		errors.shippingLast = template('last name')
	}
	if(!input.shippingAddress1){
		errors.shippingAddress1 = template('address')
	}
	if(!input.shippingCity){
		errors.shippingCity = template('city')
	}
	if(!input.shippingState){
		errors.shippingState = template('state')
	}
	if(!input.shippingZip || !regZip.test(input.shippingZip)){
		errors.shippingZip = template('zip')
	}
	if(!input.shippingPhone || !regPhone.test(input.shippingPhone)){
		errors.shippingPhone = template('phone number')
	}
	if(!input.shippingEmail || regEmail.test(input.shippingEmail)){
		errors.shippingEmail = template('email')
	}

	return Object.keys(errors).length ? errors : false
}

const regZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/
const regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
const regEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

function template(str){
	return `Please enter a valid ${str}.`
}
