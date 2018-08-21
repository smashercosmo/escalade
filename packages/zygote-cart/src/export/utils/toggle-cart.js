import openState from '../state/open'

export default function toggleCart(){
	openState.setState({ open: !openState.state.open })
}