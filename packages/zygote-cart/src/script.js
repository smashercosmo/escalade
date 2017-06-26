
function Cart(){
	this.products = []
	this.qty = []
	this.findQty()
	this.inject()
	this.readCookie()
	this.findButtons()
	this.findIcons()
	return this
}
Cart.prototype = {
	step: 1,
	isOpen: false,
	body: document.getElementsByTagName('body')[0],

	inject: require('./bin/inject'),
	findButtons: require('./bin/find-buttons'),
	findIcons: require('./bin/find-icons'),
	findQty: require('./bin/find-qty'),
	add: require('./bin/add'),
	remove: require('./bin/remove'),
	modifyQty: require('./bin/modify-qty'),
	changeQty: require('./bin/change-qty'),
	findProduct: require('./bin/find-product'),
	changeStep: require('./bin/change-step'),

	saveCookie: require('./bin/save-cookie'),
	readCookie: require('./bin/read-cookie'),
	update: require('./bin/update'),
	render: require('./bin/render'),
	open: require('./bin/open'),
	close: require('./bin/close'),
	toggle: require('./bin/toggle')
}

window.zygote = new Cart()
