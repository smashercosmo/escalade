// HTML templates
import usdFormatter from 'usd-formatter'
import states from 'datasets-us-states-abbr-names'

// Build state options
let stateEls = []
for(let i in states){
	if(states[i] === 'Alaska' || states[i] === 'Hawaii') continue
	stateEls.push(`<option value=${i}>${states[i]}</option>`)
}
stateEls = stateEls.join('')

// Build year options
let year = new Date().getFullYear()
let yearEls = []
for(let i = 0; i < 16; i++){
	yearEls.push(`<option value=${year}>${year}</option>`)
	year++
}
yearEls = yearEls.join('')

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
							${stateEls}
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
						<input type="text" id="zygotePaymentNumber" name="paymentNumber" autocomplete="cc-number" required inputmode="numeric" pattern="[0-9 ]*" maxlength="100" />

						<label for="zygotePaymentSecurity">CVC</label>
						<input type="text" id="zygotePaymentSecurity" name="paymentSecurity" autocomplete="cc-csc" required inputmode="numeric" pattern="[0-9]*" maxlength="10" />
					</div>

					<div class="zygoteSection">
						<label for="zygotePaymentMonth">Expiration Month</label>
						<select type="text" id="zygotePaymentMonth" autocomplete="cc-exp-month" name="paymentMonth" required>
							<option disabled selected></option>
							<option value="January">January</option>
							<option value="February">February</option>
							<option value="March">March</option>
							<option value="April">April</option>
							<option value="May">May</option>
							<option value="June">June</option>
							<option value="July">July</option>
							<option value="August">August</option>
							<option value="September">September</option>
							<option value="October">October</option>
							<option value="November">November</option>
							<option value="December">December</option>
						</select>

						<label for="zygotePaymentYear">Expiration Year</label>
						<select type="text" id="zygotePaymentYear" required autocomplete="cc-exp-year" name="paymentYear">
							<option disabled selected></option>
							${yearEls}
						</select>
					</div>

					<div class="zygoteSection">
						<label class="zygoteBoxLabel">
							<input type="checkbox" checked name="sameShipping" />
							<span>Billing Address Same as Shipping</span>
						</label>
					</div>

					<div class="zygoteSection zygoteBillingToggle">
						<label for="zygoteBillingFirst">First Name</label>
						<input type="text" id="zygoteBillingFirst" name="billingFirst" autocomplete="given-name" required maxlength="100" />

						<label for="zygoteBillingLast">Last Name</label>
						<input type="text" id="zygoteBillingLast" name="billingLast" autocomplete="family-name" required maxlength="100" />

						<label for="zygoteBillingStreet">Street Address</label>
						<input type="text" id="zygoteBillingStreet" name="billingAddress1" autocomplete="address-line1" required maxlength="200" />

						<label for="zygoteBillingStreet2">Street Address 2</label>
						<input type="text" id="zygoteBillingStreet2" name="billingAddress2" autocomplete="address-line2" required maxlength="200" />
					</div>

					<div class="zygoteSection zygoteBillingToggle">
						<label for="zygoteBillingCity">City</label>
						<input type="text" id="zygoteBillingCity" name="billingCity" autocomplete="address-level2" required maxlength="100" />

						<label for="zygoteBillingState">State</label>
						<select type="text" id="zygoteBillingState" name="billingState" autocomplete="address-level1" required>
							<option disabled selected></option>
							${stateEls}
						</select>

						<label for="zygoteBillingZip">Zip / Postal Code</label>
						<input type="text" id="zygoteBillingZip" name="billingZip" autocomplete="postal-code" required inputmode="numeric" pattern="[0-9]*" maxlength="20" />
					</div>

					<div class="zygoteSection zygoteBillingToggle">
						<label for="zygoteBillingPhone">Phone</label>
						<input type="text" id="zygoteBillingPhone" name="billingPhone" autocomplete="tel-national" required inputmode="numeric" maxlength="20" />

						<label for="zygoteBillingEmail">Email</label>
						<input type="email" id="zygoteBillingEmail" autocomplete="email" name="billingEmail" required maxlength="200" />
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
			<div class="zygoteFooter">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="486.733px" height="486.733px" viewBox="0 0 486.733 486.733" style="enable-background:new 0 0 486.733 486.733;" xml:space="preserve">
					<g>
						<path d="M403.88,196.563h-9.484v-44.388c0-82.099-65.151-150.681-146.582-152.145c-2.225-0.04-6.671-0.04-8.895,0
						C157.486,1.494,92.336,70.076,92.336,152.175v44.388h-9.485c-14.616,0-26.538,15.082-26.538,33.709v222.632
						c0,18.606,11.922,33.829,26.539,33.829h321.028c14.616,0,26.539-15.223,26.539-33.829V230.272
						C430.419,211.646,418.497,196.563,403.88,196.563z M273.442,341.362v67.271c0,7.703-6.449,14.222-14.158,14.222H227.45
						c-7.71,0-14.159-6.519-14.159-14.222v-67.271c-7.477-7.36-11.83-17.537-11.83-28.795c0-21.334,16.491-39.666,37.459-40.513
						c2.222-0.09,6.673-0.09,8.895,0c20.968,0.847,37.459,19.179,37.459,40.513C285.272,323.825,280.919,334.002,273.442,341.362z
						M331.886,196.563h-84.072h-8.895h-84.072v-44.388c0-48.905,39.744-89.342,88.519-89.342c48.775,0,88.521,40.437,88.521,89.342
						V196.563z"/>
					</g>
				</svg>
				<span>SSL Secure</span>
			</div>
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
