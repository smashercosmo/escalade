exports.getStateList = getStateList


import stateList from './data/state-list.json'

import dcAbbrv from './data/dc-abbrv.json'
import dcList from './data/dc-list.json'
import insularAbbrv from './data/insular-abbrv.json'
import insularList from './data/insular-list.json'
import stateAbbrv from './data/state-abbrv.json'

import allAbbrv from './lib/all-abbrv.js'
import allList from './lib/all-list.js'

export function getStateList(args) {
	if(!args){
		return stateList.sort()
	} else {

		let outArray = []
		let outObj = {}

		if(args.includes(`all-list`)) {
			return allList
		}
		if(args.includes(`all-abbrv`)) {
			return allAbbrv
		}

		if (args.includes(`state-list`)) {
			outArray = outArray.concat(stateList)
		}
		if (args.includes(`dc`)) { 
			outArray = outArray.concat(dcList)
		}
		if (args.includes(`insular-list`)) { 
			outArray = outArray.concat(insularList)
		}
		if (args.includes(`state-abbrv`)) { 
			outObj = {...outObj, ...(stateAbbrv)}
		}
		if (args.includes(`dc-abbrv`)) { 
			outObj = {...outObj, ...(dcAbbrv)}
		}
		if (args.includes(`insular-abbrv`)) { 
			outObj = {...outObj, ...(insularAbbrv)}
		}


		if ( outArray.length && !Object.keys(outObj).length ) {
			return outArray.sort()
		} else if ( !outArray.length && Object.keys(outObj).length ) {
			return outObj
		} else {
			console.warn(`US-State-Lib input mismatch. args were:`, args)
			return {...outObj, ...outArray}
		}

	}

}