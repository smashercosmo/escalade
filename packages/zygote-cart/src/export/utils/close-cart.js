import openState from '../state/open'
import triggerEvent from './trigger-event'

export default function closeCart(){
	openState.setState({ open: false })
	triggerEvent(`close`)
}