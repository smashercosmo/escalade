import React from 'react'

export function onRenderBody({ setPostBodyComponents }) {
	return setPostBodyComponents([
		<script src='https://deligation--zygote.netlify.com/zygote-v1.js' />
	])
}