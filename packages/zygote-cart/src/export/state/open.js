import { State } from 'statable'

const openState = new State({
	open: false,
}, {
	openCart(){
		this.setState({ open: true })
	},
	closeCart(){
		this.setState({ open: false })
	},
	toggleCart(){
		this.setState({ open: !this.state.open })
	},
})

export default openState