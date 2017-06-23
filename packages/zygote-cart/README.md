# Zygote Cart/API

Two seperate repositories

## Deploy Script
- Inject cart and checkout process as one single app
- Forms in the checkout process point to API
- Entirely client side until form is submit
- Attach cart events to buttons
- Cart turns into checkout
- Form submits directly to API, then API posts back to website for success or failure messages
- Initial injection in JS, select colors/styles as JS options
- JS is hosted on API server
- CSS base styles hosted on API server
- Prefix all endpoints and scripts with /v1/script.js
- Static hosting via Netlify for these files

## API
- Microservice?
- Takes an entire order and does all the API calls in one go

## Roadmap
1. Create "dummy" API
2. Create client side cart injection
3. Tie buttons to cart
4. Cart post to API
