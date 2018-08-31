import { state } from "../state"

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

export default props => {
	let content = {
		api_key: props.apiKey,
		locale: props.locale || `en_US`,
		merchant_group_id: props.merchantGroupId,
		merchant_id: props.merchantId,
		page_id: props.pageId,
		review_wrapper_url:
			props.wrapperUrl || `/write-review?page_id=${props.pageId}`,
		components: props.components || null,
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
	}
	if (props.product) {
		content.product = props.product
	}
	if (props.config) {
		Object.keys(props.config).forEach(key => {
			content[key] = props.config[key]
		})
	}
	return new Promise(async (resolve, reject) => {
		if (!window.POWERREVIEWS) {
			await loadScript(`//ui.powerreviews.com/stable/4.0/ui.js`).catch(err => {
				reject(`Something went wrong while loading the script: ${err}`)
			})
			content.components = content.components || state.state.components
			window.POWERREVIEWS.display.render(content)
			resolve()
		} else if (window.POWERREVIEWS) {
			content.components = content.components || state.state.components
			window.POWERREVIEWS.display.render(content)
			resolve()
		}
	})
}
