module.exports = function(){
	// Create cart elements
	const el = document.createElement('div')
	el.className = 'zygoteContainer'
	const html = `
		<div class="zygoteModal">
			<form>
				<h1></h1>
				<ul class='zygoteProdList'></ul>
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
				this.close()
				break
		}
	}, false)
}
