import totalsState from '../state/totals'

export default function calculateTotal() {
	const { subtotal, modifications } = totalsState.state
	let total = subtotal
	modifications.forEach(mod => {
		mod.calculatedValue = typeof mod.value === `function`
			? mod.value()
			: mod.value || 0
		total += mod.calculatedValue
	})
	totalsState.setState({ total })
}