# Zygote

An client side ecommerce cart & checkout system. The cart/checkout forms are injected into the page via JavaScript. No other dependencies are needed other than the JavaScript file, but the CSS file is recommended.

## Usage

Insert the JavaScript file before your closing `</body>` tag:
```html
<script src="https://zygote.netlify.com/zygote-v1.js"></script>
```

Turn any element into a buy button with data attributes:
```html
<button
	data-id="as701r10"
	data-name="React One Pro"
	data-price="259.99"
	data-img="/img/product/thumbnail.jpg"
	data-url="/product/as701r10"
	data-desc="This is the product description."
	data-open-cart
	>
	Add to Cart
</button>
```

## Optional Styles

Insert the CSS file before your closing `</head>` tag:
```html
<link type="text/css" rel="stylesheet" href="https://zygote.netlify.com/zygote-v1.css">
```

## Using with a custom API

Point Zygote to your API endpoint that will handle the order validation/entry after the JS file:

```html
<script src="https://zygote.netlify.com/zygote-v1.js"></script>
<script>
	zygote.api = "https://yoursite.com/api"
</script>
```

The endpoint should be able to differentiate between validation and an order by the billing information. Billing information will **only** be supplied once the user is actually placing an order. Any other post request should be considered validation, shipping cost request, and tax cost request.


## Todo
- Format card numbers
- Show card type icon
- Option to show tooltips whenever items are added to cart

- Remove tabs and new lines from JS on build
- Only inject parts of cart that are about to get used
- Test out Google Maps API for address autofill
