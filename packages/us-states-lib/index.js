exports.getStateList = getStateList

function getStateList(args) {
	if (!args) {
		return require(`./lib/state-list.json.js`).sort()
	} else {
		var outObj = {}
		var outArray = []

		for (var arg in args) {
			const add = require(`./lib/`.concat(args[arg]))
			if (Array.isArray(add)) {
				outArray = [ ...outArray, ...add ]
			} else {
				outObj = { ...outObj, ...add }
			}
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