import React from 'react'

export function onRenderBody({ setPostBodyComponents }) {
	return setPostBodyComponents([
		<link type='text/css' rel='stylesheet' href='https://deligation--zygote.netlify.com/zygote-v1.css' />,
		<script src='https://deligation--zygote.netlify.com/zygote-v1.js' />,
	])
}