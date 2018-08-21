import openState from '../state/open'

export default function closeCart(){
	openState.setState({ open: false })
}