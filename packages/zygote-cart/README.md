# Zygote Cart/API

An client side ecommerce cart & checkout system. The cart/checkout forms are injected into the page via JavaScript. No other dependencies are needed other than the JavaScript file, but the CSS file is recommended.

## Usage

Insert the CSS file before your closing `</head>` tag:
```html
<link type="text/css" rel="stylesheet" href="https://zygote.escaladesports.com/zygote-v1.css">
```

Insert the JavaScript file before your closing `</body>` tag:
```html
<script src="https://zygote.escaladesports.com/zygote-v1.js"></script>
```

WIP

## Using with a custom API

WIP

## Todo
- Escalade sports subdomain
- Subtotal in cart
- Make sure cart is still visible on all browser heights
- Format card numbers
- Show card type icon
- Remove tabs and new lines from JS on build
- Confirm order screen checks with API
- Ability to override which API gets called
	+ window.zygoteApi = 'https://yourapi.escaladesports.com/'
	+ Default to https://zygoteapi.escaladesports.com/

- CSS hot reloading
- HTML hot reloading
- Split out stylesheet
- Test out Google Maps API for address autofill
- Client side validation
- Format phone numbers
