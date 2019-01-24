import { prState } from "../state"

function loadScript(src) {
	return new Promise((resolve, reject) => {
		let s
		s = document.createElement(`script`)
		s.src = src
		s.onload = resolve
		s.onerror = reject
		document.body.appendChild(s)
	})
}

export default props => {
	let updatedComps = {}
	const userComps = props.components ? Object.keys(props.components) : []
	userComps.forEach(comp => {
		if (comp === `CategorySnippet`) {
			return
		}
		updatedComps[comp] = props.components[comp]
	})
	if (Object.keys(updatedComps).length === 0) {
		console.warn(
			`No components were added to the PowerReviewConfig, please make sure you are spelling your component correctly or that it exists, ignore this warning if you are meaning to only pass in categorySnippets`
		)
	}
	let mainComp = {
		api_key: props.apiKey,
		locale: props.locale || `en_US`,
		merchant_group_id: props.merchantGroupId,
		merchant_id: props.merchantId,
		page_id: props.pageId,
		review_wrapper_url:
			props.wrapperUrl || `/write-review?page_id=${props.pageId}`,
		components: updatedComps,
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
		mainComp.product = props.product
	}
	if (props.config) {
		Object.keys(props.config).forEach(key => {
			mainComp[key] = props.config[key]
		})
	}
	let content = [mainComp]

	if (props.categorySnippets) {
		props.categorySnippets.snippets.forEach(snippet => {
			content.push({
				locale: `en_US`,
				merchant_group_id: props.merchantGroupId,
				merchant_id: props.merchantId,
				page_id: snippet,
				api_key: props.apiKey,
				components: {
					CategorySnippet: `${props.categorySnippets.id}-${snippet}`,
				},
			})
		})
	}
	return new Promise(async (resolve, reject) => {
		if (!window.POWERREVIEWS) {
			await loadScript(`//ui.powerreviews.com/stable/4.0/ui.js`).catch(err => {
				reject(`Something went wrong while loading the script: ${err}`)
			})
			content.components = content.components || prState.state.components
			window.POWERREVIEWS.display.render(
				content.length === 1 ? content[0] : content
			)
			if (Object.keys(content[0].components).length === 0) {
				content[0].on_render(props.config || {}, content.length === 1 ? content[0] : content)
			}
			resolve()
		} else if (window.POWERREVIEWS) {
			content.components = content.components || prState.state.components
			window.POWERREVIEWS.display.render(
				content.length === 1 ? content[0] : content
			)
			if (Object.keys(content[0].components).length === 0) {
				content[0].on_render(props.config || {}, content.length === 1 ? content[0] : content)
			}
			resolve()
		}
	})
}
