# gatsby-plugin-zygote

A Gatsby plugin for using the [Zygote](https://github.com/escaladesports/zygote-client) ecommerce system.

## Install

With npm:

```bash
npm install --save gatsby-plugin-zygote
```

With Yarn:

```bash
yarn add gatsby-plugin-zygote
```

## Usage

```javascript
// In gatsby-config.js
module.exports = {
	plugins: [
		{
			resolve: 'gatsby-plugin-zygote',
			options: {
				api: 'https://yh5fc30fhh.execute-api.us-east-1.amazonaws.com/production/handler'
			},
		}
	]
}
```