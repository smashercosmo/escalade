import React from 'react'

export function onRenderBody({ setPostBodyComponents }, pluginOptions) {
	if (process.env.NODE_ENV === 'production' && pluginOptions.id) {
		return setPostBodyComponents([
			<script src='https://deligation--zygote.netlify.com/zygote-v1.js' />
		])
	}
}