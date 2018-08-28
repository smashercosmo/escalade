import { State } from 'statable'

const defaults = {
	products: {},
	totals: [],
	meta: {},
}

const successState = new State({...defaults}, {
	reset(){
		this.setState({...defaults})
	},
})

export default successState