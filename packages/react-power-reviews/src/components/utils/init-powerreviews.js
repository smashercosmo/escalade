function loadScript(src) {
	return new Promise((resolve, reject) => {
		let s
		s = document.createElement(`script`)
		s.src = src
		s.onload = resolve
		s.onerror = reject
		document.head.appendChild(s)
	})
}

export default (props, components) => {
	return new Promise((resolve, reject) => {
		if (!window.POWERREVIEWS) {
			loadScript(`//ui.powerreviews.com/stable/4.0/ui.js`)
				.then(() => {
					window.POWERREVIEWS.display.render({
						api_key: props.apiKey,
						locale: props.locale || `en_US`,
						merchant_group_id: props.merchantGroupId,
						merchant_id: props.merchantId,
						page_id: props.pageId,
						review_wrapper_url: props.wrapperUrl,
						components: components,
					})
					resolve()
				})
				.catch(err => {
					reject(`Something went wrong while loading the script: ${err}`)
				})
		} else {
			window.POWERREVIEWS.display.render({
				api_key: props.apiKey,
				locale: props.locale || `en_US`,
				merchant_group_id: props.merchantGroupId,
				merchant_id: props.merchantId,
				page_id: props.pageId,
				review_wrapper_url: props.wrapperUrl,
				components: components,
			})
			resolve()
		}
	})
}
