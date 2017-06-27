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
						<label for="zygoteShippingFirst">First Name</label>
						<input type="text" id="zygoteShippingFirst" name="shippingFirst" autocomplete="given-name" required maxlength="100" />

						<label for="zygoteShippingLast">Last Name</label>
						<input type="text" id="zygoteShippingLast" name="shippingLast" autocomplete="family-name" required maxlength="100" />

						<label for="zygoteShippingStreet">Street Address</label>
						<input type="text" id="zygoteShippingStreet" name="shippingAddress1" autocomplete="address-line1" required maxlength="200" />

						<label for="zygoteShippingStreet2">Street Address 2</label>
						<input type="text" id="zygoteShippingStreet2" name="shippingAddress2" autocomplete="address-line2" required maxlength="200" />
					</div>

					<div class="zygoteSection">
						<label for="zygoteShippingCity">City</label>
						<input type="text" id="zygoteShippingCity" name="shippingCity" autocomplete="address-level2" required maxlength="100" />

						<label for="zygoteShippingState">State</label>
						<select type="text" id="zygoteShippingState" name="shippingState" autocomplete="address-level1" required>
							<option disabled selected></option>
						</select>

						<label for="zygoteShippingZip">Zip / Postal Code</label>
						<input type="text" id="zygoteShippingZip" name="shippingZip" autocomplete="postal-code" required inputmode="numeric" pattern="[0-9]*" maxlength="20" />
					</div>

					<div class="zygoteSection">
						<label for="zygoteShippingPhone">Phone</label>
						<input type="text" id="zygoteShippingPhone" name="shippingPhone" autocomplete="tel-national" required inputmode="numeric" maxlength="20" />

						<label for="zygoteShippingEmail">Email</label>
						<input type="email" id="zygoteShippingEmail" autocomplete="email" name="shippingEmail" required maxlength="200" />
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
						<input type="text" id="zygoteBillingFirst" name="" />

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
