import openState from '../state/open'
import stageState from '../state/stage'
import addedToCartState from '../state/added-to-cart'
import clearMessages from './clear-messages'

export default function openCart(product){
	clearMessages()
	if(!openState.state.init){
		openState.setState({ init: true })
		setTimeout(() => openState.setState({ open: true }), 1)
	}
	else{
		openState.setState({ open: true })
	}
	stageState.setState({ stage: `cart` })
	if(product === true){
		addedToCartState.setState({ addedToCart: true })
	}
	else{
		addedToCartState.setState({ addedToCart: false })
	}
}