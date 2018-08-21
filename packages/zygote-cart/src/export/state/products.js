import { State } from 'statable'

const productsState = new State({
	products: [],
}, null, {
	localStorage: `zygoteCart`,
})

export default productsState