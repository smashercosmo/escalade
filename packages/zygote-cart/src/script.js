
function Cart(){
	this.products = []
	this.readCookie()
	this.findButtons()
	return this
}
Cart.prototype = {

	// Finds and activates "Add to Cart" buttons
	findButtons: function(){
		const els = document.querySelectorAll('[data-id][data-price]')
		for(let i = els.length; i--;){
			els[i].addEventListener('click', () => {
				this.add(getData(els[i]))
			}, false)
		}
		return this
	},

	// Add item to cart with object
	add: function(obj){
		if(typeof obj.qty !== 'number') obj.qty = 1
		if(obj.qty < 1) return this
		obj.price = obj.price.replace('$', '')
		obj.price = Number(obj.price)
		const index = this.findProduct(obj.id)
		if(index !== false){
			this.products[index].qty += qty
		}
		else{
			this.products.push(obj)
		}
		return this.update()
	},

	// Remove item from cart by ID
	remove: function(id){
		const index = this.findProduct(id)
		if(index !== false){
			this.products.splice(index, 1)
		}
		return this.update()
	},

	// Change quantity of a product by ID
	changeQty: function(id, qty){
		if(qty < 1) return this.remove(id)
		const index = this.findProduct(id)
		if(index !== false){
			this.products[index].qty = qty
		}
		return this.update()
	},

	// Save cart to cookie
	saveCookie: function(){
		try{
			let expires = ""
			let date = new Date()
			date.setTime(date.getTime() + (5*24*60*60*1000))
			document.cookie = `products=${JSON.stringify(this.products)}; expires=${date.toUTCString()}; path=/`
		}
		catch(e){
			console.error(e)
		}
		return this
	},

	// Load cart from cookie
	readCookie: function(){
		try{
			let nameEQ = 'products='
			let ca = document.cookie.split(';')
			for(let i=0; i < ca.length; i++) {
				let c = ca[i]
				while (c.charAt(0)==' ') c = c.substring(1,c.length)
				if(c.indexOf(nameEQ) == 0){
					let str = c.substring(nameEQ.length, c.length)
					this.products = JSON.parse(str)
					return this.render()
				}
			}
		}
		catch(e){
			console.error(e)
		}
	},

	// Find a product index by ID
	findProduct: function(id){
		for(let i = this.products.length; i--;){
			if(this.products[i].id == id){
				return i
			}
		}
		return false
	},

	update: function(){
		this.saveCookie()
		return this.render()
	},

	// Render current cart
	render: function(){
		console.log('Render!')
		console.log(this.products)
		return this
	}
}

function getData(el){
	const obj = {}
	for(let i in el.dataset){
		obj[i] = el.dataset[i]
	}
	return obj
}


new Cart()
