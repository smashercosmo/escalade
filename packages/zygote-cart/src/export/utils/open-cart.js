import openState from '../state/open'
import stageState from '../state/stage'

export default function openCart(){
	openState.setState({ open: true })
	stageState.setState({ stage: `cart` })
}