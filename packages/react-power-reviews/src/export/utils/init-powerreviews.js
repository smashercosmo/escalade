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
	let content = {
		api_key: props.apiKey,
		locale: props.locale || `en_US`,
		merchant_group_id: props.merchantGroupId,
		merchant_id: props.merchantId,
		page_id: props.pageId,
		review_wrapper_url: props.wrapperUrl,
		on_render: (config, data) => {
			if (props.init) {
				props.init(config, data)
			}
		},
		on_submit: (config, data) => {
			if (props.submitted) {
				props.submitted(config, data)
			}
		},
		components: components,
	}
	if (props.product) {
		content.product = props.product
	}
	if (props.config) {
		Object.keys(props.config).forEach(key => {
			content[key] = props.config[key]
		})
	}
	return new Promise((resolve, reject) => {
		if (!window.POWERREVIEWS) {
			loadScript(`//ui.powerreviews.com/stable/4.0/ui.js`)
				.then(() => {
					window.POWERREVIEWS.display.render(content)
					resolve()
				})
				.catch(err => {
					reject(`Something went wrong while loading the script: ${err}`)
				})
		} else {
			window.POWERREVIEWS.display.render(content)
			resolve()
		}
	})
}
