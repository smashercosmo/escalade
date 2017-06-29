module.exports = function(el){
	// Query reused elements
	this.els = {
		container: el,
		list: el.querySelector('.zygoteProdList'),
		steps: el.querySelectorAll('.zygoteStep'),
		tabs: el.querySelectorAll('.zygoteTabs li'),
		subtotals: el.querySelectorAll('.zygoteSubTotal'),
		msgs: el.querySelector('.zygoteMsgs'),
		nextBtn: el.querySelector('.zygoteNext'),
		tax: el.querySelector('.zygoteTax'),
		ship: el.querySelector('.zygoteShip'),
		total: el.querySelector('.zygoteTotal'),
		input: el.querySelectorAll('input, select')
	}
}
