import React, { Component } from "react"

import { prState } from "../state"

export default class ReviewList extends Component {
	componentDidMount() {
		prState.setState({
			components: { ...prState.state.components, ReviewList: `pr-reviewList` },
		})
	}

	render() {
		return <div id={`pr-reviewList`} />
	}
}
