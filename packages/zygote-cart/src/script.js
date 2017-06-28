
function Cart(){
	this.products = []
	this.qty = []
	this.findQty()
	this.inject()
	this.readCookie()
	this.findButtons()
	this.findIcons()
	this.changeStep(1)
	return this
}
Cart.prototype = {
	step: 1,
	isOpen: false,
	api: 'https://zygote-api.herokuapp.com/v1',
	body: document.getElementsByTagName('body')[0],

	inject: require('./script/inject'),
	findButtons: require('./script/find-buttons'),
	findIcons: require('./script/find-icons'),
	findQty: require('./script/find-qty'),
	add: require('./script/add'),
	remove: require('./script/remove'),
	modifyQty: require('./script/modify-qty'),
	changeQty: require('./script/change-qty'),
	findProduct: require('./script/find-product'),
	changeStep: require('./script/change-step'),

	saveCookie: require('./script/save-cookie'),
	readCookie: require('./script/read-cookie'),
	update: require('./script/update'),
	render: require('./script/render'),
	open: require('./script/open'),
	close: require('./script/close'),
	toggle: require('./script/toggle')
}

window.zygote = new Cart()
