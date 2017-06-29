// Validates client side inputs
module.exports = function(){

	if(!this.inputValidation) return false

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
		errors.shippingZip = template('zip code')
	}
	if(input.shippingPhone && !regPhone.test(input.shippingPhone)){
		errors.shippingPhone = template('phone number')
	}
	if(!input.shippingEmail){
		errors.shippingEmail = template('email address')
	}

	// Billing
	if(!input.billingNumber){
		errors.billingNumber = template('card number')
	}
	if(!input.billingSecurity){
		errors.billingSecurity = template('card security number')
	}
	if(!input.billingMonth){
		errors.billingMonth = template('card expiration month')
	}
	if(!input.billingYear){
		errors.billingYear = template('card expiration year')
	}
	if(!input.billingSame){
		if(!input.billingFirst){
			errors.billingFirst = template('first name')
		}
		if(!input.billingLast){
			errors.billingLast = template('last name')
		}
		if(!input.billingAddress1){
			errors.billingAddress1 = template('address')
		}
		if(!input.billingCity){
			errors.billingCity = template('city')
		}
		if(!input.billingState){
			errors.billingState = template('state')
		}
		if(!input.billingZip || !regZip.test(input.shippingZip)){
			errors.billingZip = template('zip code')
		}
		if(!input.billingPhone || !regPhone.test(input.shippingPhone)){
			errors.billingPhone = template('phone number')
		}
	}

	return Object.keys(errors).length ? errors : false
}

const regZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/
const regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

function template(str){
	return `Please enter a valid ${str}.`
}
