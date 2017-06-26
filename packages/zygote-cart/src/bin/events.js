import classList from './class-list'

// Cart click events
module.exports = function(e){
	if(e.target){
		const classes = e.target.className.split(' ')
		for(let i = classes.length; i--;){
			switch(classes[i]){

				// Remove item from cart
				case 'zygoteProdX':
					this.remove(getProductId(e.target))
					break

				// Close cart
				case 'zygoteContainer':
				case 'zygoteClose':
					this.close()
					break

				// Increase/increase quantity
				case 'zygoteDecrease':
					this.modifyQty(getProductId(e.target), -1)
					break
				case 'zygoteIncrease':
					this.modifyQty(getProductId(e.target), 1)
					break

			}
			// Next checkout step
			if(classes[i].indexOf('zygoteTo') === 0){
				const target = classes[i].replace('zygoteTo', '')
				classList.removePrefix(this.els.container, 'zygoteOn')
				classList.add(this.els.container, `zygoteOn${target}`)
			}
		}
	}
}


function getProductId(el){
	while(!el.dataset.id){
		el = el.parentElement
	}
	return el.dataset.id
}
