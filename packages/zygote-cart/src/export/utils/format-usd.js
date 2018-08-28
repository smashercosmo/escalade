export default function formatUSD(n) {
	if (typeof n !== `number`) {
		return `$0.00`
	}
	n = n.toFixed(2)
	if (n.charAt(0) === `-`) {
		n = n.replace(`-`, `-$`)
	}
	else {
		n = `$${n}`
	}
	return n
}