// Shows messages/errors
import { add as addClass } from './class-list'
module.exports = function(err, msg){
	const els = []
	if(err){
		for(let i = 0; i < err.length; i++){
			els.push(`<li class="zygoteErr">${err[i]}</li>`)
		}
	}
	if(msg){
		for(let i = 0; i < msg.length; i++){
			els.push(`<li class="zygoteMsg">${msg[i]}</li>`)
		}
	}
	if(els.length){
		addClass(this.els.msgs, 'zygoteShow')
		this.els.msgs.innerHTML = els.join('')
	}
}
