import React, { Component } from "react"

import { prState } from "../state"

export default class WriteReview extends Component {
	componentDidMount() {
		prState.setState({
			components: {
				...prState.state.components,
				Write: `pr-write`,
			},
		})
	}

	render() {
		return <div id={`pr-write`} />
	}
}
