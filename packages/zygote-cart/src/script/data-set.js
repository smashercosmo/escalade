
const getAll = exports.getAll = el => {
	const dataset = {}
	const attrs = el.attributes
	for(let i = 0; i < attrs.length; i++){
		const attr = attrs.item(i)
		if(attr.nodeName.match(regData)){
			dataset[attr.nodeName.replace(regData, '')] = attr.nodeValue
		}
	}
	return dataset
}

exports.setData = function(el, key, val){
	el.setAttribute(`data-${key}`, val)
}

exports.getData = (el, key) => {
	const all = getAll(el)
	return all[key]
}

const regData = /^data-/
