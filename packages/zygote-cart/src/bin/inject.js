module.exports = function(){
	// Create cart elements
	const el = document.createElement('div')
	el.className = 'zygoteContainer zygoteOpen'
	const html = `
		<div class="zygoteModal">
			<div class="zygoteClose">X</div>
			<div class="zygoteHeader">
				<h1>Your Cart</h1>
			</div>
			<form class="zygoteForm">
				<ul class="zygoteProdList"></ul>
				<div class="zygoteEmpty">Your cart is empty.</div>
			</form>
		</div>
	`
	el.innerHTML = html
	const body = document.getElementsByTagName('body')[0]
	if(body) body.appendChild(el)

	// Query useful elements
	this.els = {
		container: el,
		list: el.querySelector('.zygoteProdList')
	}

	// Events
	el.addEventListener('click', e => {
		console.log(e.target.className.split(' ')[0])
		switch(e.target.className.split(' ')[0]){
			case 'zygoteProdDelete':
				this.remove(e.target.parentElement.dataset.id)
				break
			case 'zygoteContainer':
			case 'zygoteClose':
				this.close()
				break
		}
	}, false)
}
