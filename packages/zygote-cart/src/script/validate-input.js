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
	if(!input.shippingZip){
		errors.shippingZip = template('zip')
	}
	if(!input.shippingPhone){
		errors.shippingPhone = template('phone number')
	}
	if(!input.shippingEmail){
		errors.shippingEmail = template('email')
	}

	return Object.keys(errors).length ? errors : false
}

function template(str){
	return `Please enter a valid ${str}.`
}
