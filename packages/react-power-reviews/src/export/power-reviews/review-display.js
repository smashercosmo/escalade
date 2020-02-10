import React, { Component } from "react"

import { prState } from "../state"

export default class ReviewDisplay extends Component {
	componentDidMount() {
		prState.setState({
			components: {
				...prState.state.components,
				ReviewDisplay: `pr-reviewDisplay`,
			},
		})
	}

	render() {
		return <div id={`pr-reviewDisplay`} />
	}
}
