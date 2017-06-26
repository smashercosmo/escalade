// HTML templates
import usdFormatter from 'usd-formatter'

exports.cart = () => {
	const el = document.createElement('div')
	el.className = 'zygoteContainer zygoteOpen zygoteOn1'
	const html = `
		<div class="zygoteModal">
			<div class="zygoteClose">&#215;</div>
			<div class="zygoteHeader">
				<h1>Your Cart</h1>
			</div>
			<ul class="zygoteTabs">
				<li>Your Cart</li>
				<li>Billing Address</li>
				<li>Payment Method</li>
				<li>Confirm Order</li>
			</ul>
			<form class="zygoteForm">

				<div class="zygoteStep1 zygoteStep">
					<ul class="zygoteProdHeader">
						<li>Item</li>
						<li>Quantity</li>
						<li>Price</li>
						<li>Remove</li>
					</ul>
					<ul class="zygoteProdList"></ul>
				</div>

				<div class="zygoteStep2 zygoteStep">
				</div>

				<div class="zygoteStep3 zygoteStep">
				</div>

				<div class="zygoteStep4 zygoteStep">
				</div>

				<div class="zygoteStepBtns">
					<div class="zygoteBtn zygotePrev">Previous Step</div>
					<div class="zygoteBtn zygoteNext">Next Step</div>
				</div>

				<div class="zygoteEmpty">Your cart is empty.</div>
			</form>
		</div>
	`
	el.innerHTML = html
	return el
}

exports.product = obj => {
	const el = document.createElement('li')
	el.classList = 'zygoteProd'
	el.dataset.id = obj.id
	el.innerHTML = `
		<div class="zygoteProdImg">
			<a href="${obj.url}"><img src="${obj.img}" /></a>
		</div>
		<div class="zygoteProdName">
			<div>
				<a href="${obj.url}">${obj.name}</a>
				<div>${obj.desc || ''}</div>
			</div>
		</div>
		<div class="zygoteProdQty">
			<div>
				<div class="zygoteDecrease">-</div>
				<div data-qty>${obj.qty}</div>
				<div class="zygoteIncrease">+</div>
			</div>
		</div>
		<div class="zygoteProdPrice">
			<div>${usdFormatter(obj.price)}</div>
		</div>
		<div class="zygoteProdDelete">
			<div class="zygoteProdX">&#215;</div>
		</div>
	`
	return el
}
