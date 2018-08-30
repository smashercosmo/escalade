import settingsState from '../state/settings'

export default function onClose(product){
	settingsState.state.onAddProduct(product)
}