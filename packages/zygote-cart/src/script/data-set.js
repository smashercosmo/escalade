
const getAll = exports.getAll = el => {
	const dataset = {}
	const attrs = el.attributes
	for(let i = 0; i < attrs.length; i++){
		const attr = attrs.item(i)
		if(attr.nodeName.match(regData)){
			let key = attr.nodeName.replace(regData, '')
			key = camelize(key)
			dataset[key] = attr.nodeValue || true
		}
	}
	if('qty' in dataset){
		dataset.qty = Number(dataset.qty)
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
const regDash = /-/g

function camelize(str) {
	const split = str.split('-')
	for(let i = 1, len = split.length; i < len; i++){
		split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1)
	}
	return split.join('')
}
