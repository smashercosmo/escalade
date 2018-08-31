import React, { Component } from "react"

import { state } from "../state"

export default class ReviewSnippet extends Component {
	componentDidMount() {
		state.setState({
			components: {
				...state.state.components,
				ReviewSnippet: `pr-reviewSnippet`,
			},
		})
	}

	render() {
		return <div id={`pr-reviewSnippet`} />
	}
}
