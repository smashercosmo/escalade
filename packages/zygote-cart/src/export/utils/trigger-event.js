import settingsState from '../state/settings'
import capitalize from './capitalize'

export default function eventTrigger(type, data){
	settingsState.state[`on${capitalize(type)}`](data)
}