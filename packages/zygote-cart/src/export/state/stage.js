import { State } from 'statable'
import stages from '../utils/stages'

const stageState = new State({
	stage: stages[0],
	processing: false,
})

export default stageState