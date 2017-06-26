// Save cart to cookie
module.exports = function(){
	try{
		let expires = ""
		let date = new Date()
		date.setTime(date.getTime() + (5*24*60*60*1000))
		document.cookie = `products=${JSON.stringify(this.products)}; expires=${date.toUTCString()}; path=/`
	}
	catch(e){
		console.log(e)
	}
	return this
}
