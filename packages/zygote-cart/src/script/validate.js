import formatUsd from 'usd-formatter'
import classList from './class-list'

const expectedProperties = [
	'products',
	'tax',
	'shipping',
	'total',
	'succes',
	'errors'
]

// Validates an order and returns tax/shipping
module.exports = function(obj){

	// Client side validation
	const errors = this.validateInput()
	if(errors){
		let step
		for(let i in errors){
			if(i.indexOf('shipping') === 0){
				step = 'shipping'
			}
			// Style error
			const input = this.els.container.querySelector(`.zygote${cap(i)}`)
			if(input){
				classList.add(input, 'zygoteInputErr')
				let el = input.querySelector('.zygoteInputMsg')
				if(!el){
					el = document.createElement('div')
					el.className = 'zygoteInputMsg'
					input.appendChild(el)
				}
				el.textContent = errors[i]
			}
		}
		// Go back to step with errors
		if(step === 'shipping'){
			this.changeStep(2)
		}
		else{
			this.changeStep(3)
		}
		return this
	}

	if(!this.api) return this

	this.showLoader()

	const xhr = new XMLHttpRequest()
	xhr.open('POST', `${this.api}/validate`, true)
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8')
	xhr.onload = () => {
		if(xhr.readyState == 4 && xhr.status == '200'){
			const obj = JSON.parse(xhr.responseText)
			console.log('API response:')
			console.log(obj)
			// Set any custom viriables
			for(let i in obj){
				if(expectedProperties.indexOf(i) === -1){
					this.custom[i] = obj[i]
				}
			}
			if(obj.errors && obj.errors.length){
				this.showMessages(obj.errors)
			}
			if(obj.products){
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
			// Add adjustments
			if(obj.adjustments){
				this.els.adjustments.innerHTML = `<li>${obj.adjustments.join(' Applied!</li><li>')} Applied!</li>`
				classList.add(this.els.adjustments, 'zygoteShow')
			}
			else{
				classList.remove(this.els.adjustments, 'zygoteShow')
			}
			this.hideLoader()
		}
	}
	const input = this.getInput('billing')
	input.products = this.products
	const json = JSON.stringify(input)
	xhr.send(json)
}

function cap(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

function getProduct(arr, id){
	for(let i = arr.length; i--;){
		if(arr[i].id === id) return arr[i]
	}
	return false
}
