
function Cart(){
	this.products = []
	this.qty = []
	this.custom = []
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
	getInput: require('./script/get-input'),
	validate: require('./script/validate'),
	placeOrder: require('./script/place-order'),
	showLoader: require('./script/show-loader'),
	hideLoader: require('./script/hide-loader'),
	showMessages: require('./script/show-messages'),
	hideMessages: require('./script/hide-messages'),
	clearCart: require('./script/clear-cart'),
	clearInput: require('./script/clear-input'),

	saveCookie: require('./script/save-cookie'),
	readCookie: require('./script/read-cookie'),
	update: require('./script/update'),
	render: require('./script/render'),
	open: require('./script/open'),
	close: require('./script/close'),
	toggle: require('./script/toggle')
}

window.zygote = new Cart()
