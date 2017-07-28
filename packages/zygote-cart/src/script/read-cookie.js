// Load cart from cookie
module.exports = function(){
	try{
		let nameEQ = 'products='
		let ca = document.cookie.split(';')
		ca.forEach(c => {
			while (c.charAt(0)==' ') c = c.substring(1,c.length)
			if(c.indexOf(nameEQ) == 0){
				let str = c.substring(nameEQ.length, c.length)
				str = decodeURIComponent(str)
				this.products = JSON.parse(str)
				return this.render()
			}
		})
	}
	catch(e){
		console.log(e)
	}
}
