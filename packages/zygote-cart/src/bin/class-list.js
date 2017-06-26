// Manipulates classList
exports.add = (el, str) => {
	let classes = el.className.split(' ')
	const index = classes.indexOf(str)
	if(index === -1){
		el.className = `${el.className} ${str}`
	}
}
exports.remove = (el, str) => {
	let classes = el.className.split(' ')
	const index = classes.indexOf(str)
	if(index > -1){
		classes.splice(index, 1)
		el.className = classes.join(' ')
	}
}
exports.toggle = (el, str) => {
	let classes = el.className.split(' ')
	const index = classes.indexOf(str)
	if(index > -1){
		classes.splice(index, 1)
		el.className = classes.join(' ')
		return false
	}
	else{
		el.className = `${el.className} ${str}`
		return true
	}
}
