
export function stateList(args){
	console.log('args', args)
	if( args.length === 0) {
		let stateList = require('./lib/state-list.json')
		return stateList.sort()
	} else {
		let outArray = []
		let outObj = {}
		if (args.includes(`state-list`)) { 
			outArray = outArray.concat( require('./lib/state-list.json'))
		}
		if (args.includes(`dc`)) { 
			outArray = outArray.concat( require('./lib/dc.json'))
		}
		if (args.includes(`insular-list`)) { 
			outArray = outArray.concat( require('./lib/insular-list.json'))
		}
		if (args.includes(`state-abbrv`)) { 
			outObj = {...outObj, ...( require('./lib/state-abbrv.json'))}
		}
		if (args.includes(`dc-abbrv`)) { 
			outObj = {...outObj, ...( require('./lib/dc-abbrv.json'))}
		}
		if (args.includes(`insular-abbrv`)) { 
			outObj = {...outObj, ...( require('./lib/insular-abbrv.json'))}
		}

		if ( outArray.length && !Object.keys(outObj).length ) {
			return outArray.sort()
		} else if ( !outArray.length && Object.keys(outObj).length ) {
			return outObj
		} else {
			console.log(`US-State-Lib input mismatch. args were:`, args)
			return {...outObj, ...outArray}
		}
	}
} 