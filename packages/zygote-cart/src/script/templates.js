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
				<li class="zygoteCartTab">Your Cart</li>
				<li class="zygoteShipTab">Shipping Address</li>
				<li class="zygotePayTab">Payment Method</li>
				<li class="zygoteConfirmTab">Confirm Order</li>
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

					<div class="zygoteSection">
						<label for="zygoteBillingFirst">First Name</label>
						<input type="text" id="zygoteBillingFirst" />

						<label for="zygoteBillingLast">Last Name</label>
						<input type="text" id="zygoteBillingLast" />

						<label for="zygoteBillingStreet">Street Address</label>
						<input type="text" id="zygoteBillingStreet" />

						<label for="zygoteBillingStreet2">Street Address 2</label>
						<input type="text" id="zygoteBillingStreet2" />
					</div>

					<div class="zygoteSection">
						<label for="zygoteBillingCity">City</label>
						<input type="text" id="zygoteBillingCity" />

						<label for="zygoteBillingState">State</label>
						<input type="text" id="zygoteBillingState" />

						<label for="zygoteBillingZip">Zip / Postal Code</label>
						<input type="text" id="zygoteBillingZip" />
					</div>

					<div class="zygoteSection">
						<label for="zygoteBillingPhone">Phone</label>
						<input type="text" id="zygoteBillingPhone" />

						<label for="zygoteBillingEmail">Email</label>
						<input type="text" id="zygoteBillingEmail" />
					</div>

				</div>

				<div class="zygoteStep3 zygoteStep">

					<div class="zygoteSection">
						<label for="zygotePaymentNumber">Card Number</label>
						<input type="text" id="zygotePaymentNumber" />

						<label for="zygotePaymentSecurity">CVC</label>
						<input type="text" id="zygotePaymentSecurity" />
					</div>

					<div class="zygoteSection">
						<label for="zygotePaymentMonth">Expiration Month</label>
						<input type="text" id="zygotePaymentMonth" />

						<label for="zygotePaymentYear">Expiration Year</label>
						<input type="text" id="zygotePaymentYear" />
					</div>

					<div class="zygoteSection">
						<label class="zygoteBoxLabel">
							<input type="checkbox" checked name="sameShipping" />
							<span>Billing Address Same as Shipping</span>
						</label>
					</div>

					<div class="zygoteSection zygoteBillingToggle">
						<label for="zygoteBillingFirst">First Name</label>
						<input type="text" id="zygoteBillingFirst" />

						<label for="zygoteBillingLast">Last Name</label>
						<input type="text" id="zygoteBillingLast" />

						<label for="zygoteBillingStreet">Street Address</label>
						<input type="text" id="zygoteBillingStreet" />

						<label for="zygoteBillingStreet2">Street Address 2</label>
						<input type="text" id="zygoteBillingStreet2" />
					</div>

					<div class="zygoteSection zygoteBillingToggle">
						<label for="zygoteBillingCity">City</label>
						<input type="text" id="zygoteBillingCity" />

						<label for="zygoteBillingState">State</label>
						<input type="text" id="zygoteBillingState" />

						<label for="zygoteBillingZip">Zip / Postal Code</label>
						<input type="text" id="zygoteBillingZip" />
					</div>

					<div class="zygoteSection zygoteBillingToggle">
						<label for="zygoteBillingPhone">Phone</label>
						<input type="text" id="zygoteBillingPhone" />

						<label for="zygoteBillingEmail">Email</label>
						<input type="text" id="zygoteBillingEmail" />
					</div>

				</div>

				<div class="zygoteStep4 zygoteStep">
				</div>

				<div class="zygoteStepBtns">
					<button class="zygoteBtn zygotePrev" role="button">Previous Step</button>
					<button class="zygoteBtn zygoteNext" role="button">Next Step</button>
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
