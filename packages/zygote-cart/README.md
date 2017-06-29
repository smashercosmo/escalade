# Zygote

An client side ecommerce cart & checkout system. The cart/checkout forms are injected into the page via JavaScript. No other dependencies are needed other than the JavaScript file, but the CSS file is recommended.

## Usage

Insert the CSS file before your closing `</head>` tag:
```html
<link type="text/css" rel="stylesheet" href="https://zygote.netlify.com/zygote-v1.css">
```

Insert the JavaScript file before your closing `</body>` tag:
```html
<script src="https://zygote.netlify.com/zygote-v1.js"></script>
```

WIP

## Using with a custom API

Point Zygote to your API endpoint that will handle the order validation/entry after the JS file:

```html
<script src="https://zygote.netlify.com/zygote-v1.js"></script>
<script>
	zygote.api = https://yoursite.com/api
</script>
```

The API should have 2 endpoints: `validate` and `place`.

`validate` will validate the information, return any errors. If everything validates, it should return tax and a shipping quote along with the new total.

`place` will do just that, place the order.

WIP

## Todo
- Clear inputs on successful order
- If user tries to confirm order tab or hit next to confirm pane, validate all inputs and move to any pane where there are errors
	+ Validate on attempted order review
	+ Patterns in inputs
	+ Client side validation
- Make sure cart is still visible on all browser heights
- Browser test

- Format card numbers
- Show card type icon

- Hashes in URLs
- Remove tabs and new lines from JS on build
- Only inject parts of cart that are about to get used
- Move media query code into CSS modules
- Test out Google Maps API for address autofill
