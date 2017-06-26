// Renders the cart
import {
	add as addClass,
	remove as removeClass
} from './class-list'
module.exports = function(){
	const ids = []
	let totalQty = 0
	// Create/alter new products
	for(let i = 0; i < this.products.length; i++){
		ids.push(this.products[i].id)
		let el = this.els.list.querySelector(`[data-id="${this.products[i].id}"]`)
		// Create new element if it doesn't exist
		if(!el){
			this.els.list.appendChild(listItem(this.products[i]))
		}
		else{
			el.querySelector('[data-qty]').textContent = this.products[i].qty
		}
		totalQty += this.products[i].qty
	}
	// Delete old products
	const els = this.els.list.children
	for(let i = els.length; i--;){
		if(ids.indexOf(els[i].dataset.id) === -1){
			this.els.list.removeChild(els[i])
		}
	}
	if(this.products.length){
		addClass(this.els.container, 'zygoteNotEmpty')
	}
	else{
		removeClass(this.els.container, 'zygoteNotEmpty')
		this.close()
	}
	// Update quantity buttons
	for(let i = this.qty.length; i--;){
		this.qty[i].textContent = totalQty
		if(totalQty) addClass(this.qty[i], 'zygoteHasQty')
		else removeClass(this.qty[i], 'zygoteHasQty')
	}
	return this
}

function listItem(obj){
	const el = document.createElement('li')
	el.dataset.id = obj.id
	el.innerHTML = `
		<div class="zygoteProdImg">
			<a href="${obj.url}"><img src="${obj.img}" /></a>
		</div>
		<div class="zygoteProdName">
			<a href="${obj.url}">${obj.name}</a>
			<span>${obj.desc || ''}</span>
		</div>
		<div class="zygoteProdQty"><span data-qty>${obj.qty}</span></div>
		<div class="zygoteProdPrice">$${obj.price}</div>
		<button class="zygoteProdDelete">Delete</button>
	`
	return el
}
