import { State } from 'statable'
import { productsState } from './products'

const stages = [
	`cart`,
	`billing`,
	`shipping`,
	`verification`,
	`confirmation`,
]

const stageState = new State({
	stage: stages[0],
}, {

	nextStage(){
		let index = stages.indexOf(this.state.stage) + 1
		let stage = stages[index]
		if (stage){
			if (stage === `shipping` && shouldSkipShipping()){
				stage = stages[index + 1]
			}
			this.setState({ stage })
		}
	},

	previousStage() {
		let index = stages.indexOf(this.state.stage) - 1
		let stage = stages[index]
		if (stage) {
			if (stage === `shipping` && shouldSkipShipping()) {
				stage = stages[index - 1]
			}
			this.setState({ stage })
		}
	},

})

function shouldSkipShipping(){
	let skip = true
	const { products } = productsState.state
	for (let i = products.length; i--;) {
		if (!products[i].skipShipping) {
			skip = false
			break
		}
	}
	return skip
}

export default stageState