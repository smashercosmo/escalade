export function onInitialClientRender(a, options) {
	if('zygote' in window){
		options = {
			api: process.env.ZYGOTE_API || process.env.GATSBY_ZYGOTE_API || `https://yh5fc30fhh.execute-api.us-east-1.amazonaws.com/production/handler`,
			...options
		}
		for(let i in options){
			window.zygote[i] = options[i]
		}
	}
}