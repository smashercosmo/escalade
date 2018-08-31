import React, { Component } from "react"

import { state } from "../state"

export default class ReviewList extends Component {
	componentDidMount() {
		state.setState({
			components: { ...state.state.components, ReviewList: `pr-reviewList` },
		})
	}

	render() {
		return <div id={`pr-reviewList`} />
	}
}
