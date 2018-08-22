import { State } from 'statable'

const settingsState = new State({
	shipping: true,
	tax: true,
	coupons: true,
})

export default settingsState