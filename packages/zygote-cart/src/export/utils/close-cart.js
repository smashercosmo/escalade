import openState from '../state/open'
import onClose from '../events/on-close'

export default function closeCart(){
	openState.setState({ open: false })
	onClose()
}