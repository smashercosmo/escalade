import React, { Component } from "react"

import { prState } from "../state"

export default class ReviewSnippet extends Component {
	componentDidMount() {
		prState.setState({
			components: {
				...prState.state.components,
				ReviewSnippet: `pr-reviewSnippet`,
			},
		})
	}

	render() {
		return <div id={`pr-reviewSnippet`} />
	}
}
