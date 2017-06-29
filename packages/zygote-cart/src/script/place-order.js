import formatUsd from 'usd-formatter'

// Validates an order and returns tax/shipping
module.exports = function(obj){

	if(!this.api) return this.clearCart()

	this.showLoader()

	const xhr = new XMLHttpRequest()
	xhr.open('POST', `${this.api}/place`, true)
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8')
	xhr.onload = () => {
		if(xhr.readyState == 4 && xhr.status == '200'){
			const obj = JSON.parse(xhr.responseText)
			console.log(obj)
			if(obj.products && obj.success){
				// Change price/qty but not any other info
				for(let i = this.products.length; i--;){
					const prod = getProduct(obj.products, this.products[i].id)
					if(prod){
						// Change price/qty just in case
						this.products[i].price = prod.price
						this.products[i].qty = prod.qty
					}
					else{
						this.products.splice(i, 1)
					}
				}
				this.update()
			}
			// Change totals
			if(obj.tax){
				this.els.tax.textContent = formatUsd(obj.tax)
			}
			if(obj.shipping){
				this.els.ship.textContent = formatUsd(obj.shipping)
			}
			if(obj.total){
				this.els.total.textContent = formatUsd(obj.total)
			}

			// If failed
			if(!obj.success){
				this.changeStep(4, true)
			}
			else{
				this.clearCart()
				this.clearInput()
			}
			if(obj.errors && obj.errors.length){
				this.showMessages(obj.errors)
			}
			this.hideLoader()
		}
	}
	const input = this.getInput()
	input.products = this.products
	// Include custom variables
	for(let i in this.custom){
		input[i] = this.custom[i]
	}
	const json = JSON.stringify(input)
	xhr.send(json)
}

function getProduct(arr, id){
	for(let i = arr.length; i--;){
		if(arr[i].id === id) return arr[i]
	}
	return false
}
