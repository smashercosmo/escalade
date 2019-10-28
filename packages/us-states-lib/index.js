
export function getStateList(args){

	if( !args ) {
		return require('./lib/state-list.json').sort()
	} else if ( args === `all-list` ) {
		return require('./lib/all-list')
	} else if ( args === `all-abbrv` ) {
		return require('./lib/all-abbrv')
	} else {
		var outObj = {}

		for ( let arg in args ) {
			outObj = {...outObj, ...( require(`./lib/${args[arg]}.json`))}
		}
		if( !args.includes('abbrv') ) {
			return Object.values(outObj).sort()
		}

		keys = Object.keys(outObj)
		for ( var i=keys; i--; ) {
			if ( Number.isNaN(parseInt(keys[i])) ) {
				console.log(`US-State-Lib input mismatch. args were:`, args)
				break
			}
		}

		return outObj
	}
} 