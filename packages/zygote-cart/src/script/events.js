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

				// Next/previous steps
				case 'zygoteNext':
					e.preventDefault()
					if(this.step < 5){
						this.changeStep(this.step + 1)
					}
					break
				case 'zygotePrev':
					e.preventDefault()
					if(this.step > 1){
						this.changeStep(this.step - 1)
					}
					break

				// Tab clicks
				case 'zygoteCartTab':
					this.changeStep(1)
					break
				case 'zygoteShipTab':
					this.changeStep(2)
					break
				case 'zygotePayTab':
					this.changeStep(3)
					break
				case 'zygoteConfirmTab':
					this.changeStep(4)
					break
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
