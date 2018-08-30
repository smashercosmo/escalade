import { State } from 'statable'
import noop from '../utils/noop'

const settingsState = new State({
	shipping: true,
	tax: true,
	coupons: true,
	stripeApiKey: ``,
	onOpen: noop,
	onClose: noop,

	onAddProduct: noop,
	onRemoveProduct: noop,
	onInfo: noop,
	onOrder: noop,
	onError: noop,
})

export default settingsState