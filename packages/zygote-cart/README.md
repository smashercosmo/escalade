

# Zygote

Zygote is a drop-in ecommerce front end built in React. It takes a "bring your own backend" approach so it can work with any payment processor or order fulfillment system. Out of the box it works very well with Stripe.

**Notes:** At the moment Zygote only works with React. However there will be a universal option in the future.

## Installation

With npm:

```bash
npm install --save zygote-cart
```

Or with Yarn:

```bash
yarn add zygote-cart
```

## Usage

```jsx
import { Cart, addToCart } from 'zygote-cart'

<button onClick={() => addToCart({
  id: `TESTID`,
  title: `Billiard Table`,
  image: `https://via.placeholder.com/75x75`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
  price: 299.99,
})}>
  Add to Cart!
</button>

<Cart
	stripeApiKey='pk_test_12345'
	orderEndpoint='/api/place-order'
/>
```

## Styling

There's two options for styling. You can either add in a color, background color, and font color as props. Or you can turn off the auto styling and supply your own by targeting the classes in the cart.

Editable style variables:

```jsx
<Cart
  style={{
    color: `#0f0`,
    backgroundColor: `#fff`,
    fontColor: `#333`,
  }}
/>
```

Removing styles:

```jsx
<Cart style={false} />
```

## Custom Components

Some areas can contain custom components like header and footer areas.

Example:

```jsx
<Cart
  cartHeader={<img src='/your-logo.svg' />}
  infoFooter={<small>Free shipping, except Alaska and Hawaii</small>}
/>
```

Custom component properties:

- `header`: Appears at the top of all stages of the cart
- `footer`: Appears at the bottom of all stages of the cart
- `cartHeader`: Appears at the top of the initial cart stage
- `cartFooter`: Appears at the bottom of the initial cart stage
- `infoHeader`: Appears at the top of the info stage
- `infoFooter`: Appears at the bottom of the info stage
- `paymentHeader`: Appears at the top of the payment stage
- `paymentFooter`: Appears at the bottom of the payment stage
- `successHeader`: Appears at the top of the success stage
- `successFooter`: Appears at the bottom of the success stage

## Endpoints

There are two endpoints that can be passed as props to send the cart information to your server:

- `orderEndpoint`: Required. Product, payment, and shipping information will be sent to this endpoint once the order has been completed.
- `infoEndpoint`: Not required. Product and shipping information will be sent to this endpoing once the first section checkout has been completed. Useful for returning tax and shipping methods with this endpoint.

Example `shippingEndpoint` request:

```json
{
  "infoName": "John Doe",
  "infoEmail": "johndoe@gmail.com",
  "infoPhone": "555-555-1234",
  "shippingAddress1": "123 Some Street",
  "shippingAddress2": "Apt. 5F",
  "city": "Kansas City",
  "state": "Missouri",
  "zip": "64030",
  "products": [
    {
      "id": "TESTID",
      "title": "Billiard Table",
      "image": "https://via.placeholder.com/75x75",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "price": 299.99
    }
  ]
}
```

Example response:

```json
{
  "success": true,
  "modifications": [
    {
      "id": "january-sale",
      "description": "January Sale",
      "value": -20
    },
    {
      "id": "tax",
      "description": "Sales Tax",
      "value": 8.99
    },
  ],
  "shippingMethods": [
    {
      "id": "ship-0",
      "description": "Standard Shipping",
      "value": 0
    },
    {
      "id": "ship-1",
      "description": "Express Shipping",
      "value": 11.5
    },
    {
      "id": "ship-2",
      "description": "Overnight Shipping",
      "value": 49.99
    }
  ],
  "selectedShippingMethod": "ship-0"
}
```