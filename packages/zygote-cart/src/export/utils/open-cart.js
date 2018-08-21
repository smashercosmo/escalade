import openState from '../state/open'
import stageState from '../state/stage'
import addedToCartState from '../state/added-to-cart'

export default function openCart(product){
	openState.setState({ open: true })
	stageState.setState({ stage: `cart` })
	if(product === true){
		console.log(product)
		addedToCartState.setState({ addedToCart: true })
	}
	else{
		console.log(`off`)
		addedToCartState.setState({ addedToCart: false })
	}
}