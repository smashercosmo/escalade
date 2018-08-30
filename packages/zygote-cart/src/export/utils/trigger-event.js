import settingsState from '../state/settings'

export default function eventTrigger(type, data){
	settingsState.state[`on${type.charAt(0).toUpperCase()}${type.substr(1)}`](data)
}