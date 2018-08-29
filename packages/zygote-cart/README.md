# Zygote

Zygote is a drop-in ecommerce system built in React. It takes a "bring your own backend" approach so it can work with any payment processor or order fulfillment system. Out of the box it works very well with Stripe.

**Note:** At the moment Zygote only works with React. However there will be a universal option in the future.

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