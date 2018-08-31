import React, { Component } from "react"

import { state } from "../state"

export default class WriteReview extends Component {
	componentDidMount() {
		state.setState({
			components: {
				...state.state.components,
				Write: `pr-write`,
			},
		})
	}

	render() {
		return <div id={`pr-write`} />
	}
}
