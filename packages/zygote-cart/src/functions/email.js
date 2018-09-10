import dotenv from 'dotenv'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
dotenv.config({ silent: true })

class Template extends React.Component{
	render(){
		return (
			<p>Test!</p>
		)
	}
}

export async function handler(_, __, callback) {

	// Response
	callback(null, {
		statusCode: 200,
		body: renderToStaticMarkup(<Template />),
	})
}