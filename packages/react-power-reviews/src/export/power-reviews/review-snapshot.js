import React, { Component } from "react"

import { state } from "../state"

export default class ReviewSnapshot extends Component {
	componentDidMount() {
		state.setState({
			components: {
				...state.state.components,
				ReviewSnapshot: `pr-reviewSnapshot`,
			},
		})
	}

	render() {
		return <div id={`pr-reviewSnapshot`} />
	}
}
