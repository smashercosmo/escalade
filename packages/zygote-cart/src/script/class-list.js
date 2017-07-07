// Manipulates classList
exports.add = (el, str) => {
	let className = el.className || ''
	let classes = className.split(' ')
	const index = classes.indexOf(str)
	if(index === -1){
		if(className) className = `${className} `
		el.className = `${className}${str}`
	}
}
exports.remove = (el, str) => {
	const className = el.className || ''
	let classes = className.split(' ')
	const index = classes.indexOf(str)
	if(index > -1){
		classes.splice(index, 1)
		el.className = classes.join(' ')
	}
}
exports.toggle = (el, str) => {
	const className = el.className || ''
	let classes = className.split(' ')
	const index = classes.indexOf(str)
	if(index > -1){
		classes.splice(index, 1)
		el.className = classes.join(' ')
		return false
	}
	else{
		el.className = `${className} ${str}`
		return true
	}
}

exports.removePrefix = (el, str) => {
	const className = el.className || ''
	let classes = className.split(' ')
	for(let i = classes.length; i--;){
		if(classes[i].indexOf(str) === 0){
			classes.splice(i, 1)
		}
	}
	el.className = classes.join(' ')
}
