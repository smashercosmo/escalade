import React, { Component } from "react"

import { prState } from "../state"

export default class ReviewSnapshot extends Component {
	componentDidMount() {
		prState.setState({
			components: {
				...prState.state.components,
				ReviewSnapshot: `pr-reviewSnapshot`,
			},
		})
	}

	render() {
		return <div id={`pr-reviewSnapshot`} />
	}
}
