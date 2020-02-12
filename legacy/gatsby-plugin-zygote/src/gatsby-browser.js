export function onInitialClientRender(a, options = {}) {
	if('zygote' in window){
		for(let i in options){
			window.zygote[i] = options[i]
		}
	}
}