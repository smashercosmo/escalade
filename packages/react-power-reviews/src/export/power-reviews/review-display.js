import React, { Component } from "react"

import { state } from "../state"

export default class ReviewDisplay extends Component {
	componentDidMount() {
		state.setState({
			components: {
				...state.state.components,
				ReviewDisplay: `pr-reviewDisplay`,
			},
		})
	}

	render() {
		return <div id={`pr-reviewDisplay`} />
	}
}
