// Cart click events
module.exports = function(e){
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
}


function getProductId(el){
	while(!el.dataset.id){
		el = el.parentElement
	}
	return el.dataset.id
}
