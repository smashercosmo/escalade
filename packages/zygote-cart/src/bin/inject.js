module.exports = function(){
	// Create cart elements
	const el = document.createElement('form')
	el.className = 'zygote'
	const html = `
		<h1></h1>
		<ul class='zygoteProdList'></ul>
	`
	el.innerHTML = html
	const body = document.getElementsByTagName('body')[0]
	if(body) body.appendChild(el)

	// Query useful elements
	this.els = {
		list: el.querySelector('.zygoteProdList')
	}

	// Events
	this.els.list.addEventListener('click', e => {
		if(e.target.className === 'zygoteProdDelete'){
			this.remove(e.target.parentElement.dataset.id)
		}
	}, false)
}
