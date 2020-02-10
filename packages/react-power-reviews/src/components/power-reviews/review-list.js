import React, { Component } from "react"
import { css } from "emotion"

import initPowerReviews from "../utils/init-powerreviews"

export default class ReviewList extends Component {
	constructor(props) {
		super(props)

		this.state = { err: null }
	}

	componentDidMount() {
		initPowerReviews(this.props, { ReviewList: `pr-reviewList` })
			.then(() => {
				// success
			})
			.catch(err => this.setState({ err: JSON.stringify(err) }))
	}

	render() {
		if (this.state.err) {
			return <div className={err}>{this.state.err}</div>
		}
		return <div id={`pr-reviewList`} />
	}
}

const err = css({ color: `red` })
