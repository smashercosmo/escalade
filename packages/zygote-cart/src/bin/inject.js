module.exports = function(){
	// Create cart elements
	const el = document.createElement('div')
	el.className = 'zygoteContainer zygoteOpen'
	const html = `
		<div class="zygoteModal">
			<div class="zygoteClose">&#215;</div>
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

	// Attach events
	el.addEventListener('click', e => {
		switch(e.target.className.split(' ')[0]){
			case 'zygoteProdX':
				this.remove(getProductId(e.target))
				break
			case 'zygoteContainer':
			case 'zygoteClose':
				this.close()
				break
			case 'zygoteDecrease':
				this.modifyQty(getProductId(e.target), -1)
				break
			case 'zygoteIncrease':
				this.modifyQty(getProductId(e.target), 1)
				break
		}
	}, false)
}

function getProductId(el){
	while(!el.dataset.id){
		el = el.parentElement
	}
	return el.dataset.id
}
