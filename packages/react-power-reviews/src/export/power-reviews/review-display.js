import React, { Component } from "react"
import { css } from "emotion"

import initPowerReviews from "../utils/init-powerreviews"

export default class ReviewDisplay extends Component {
	constructor(props) {
		super(props)

		this.state = { err: null }
	}

	componentDidMount() {
		initPowerReviews(this.props, { ReviewDisplay: `pr-reviewDisplay` })
			.then(() => {
				// success
			})
			.catch(err => this.setState({ err: JSON.stringify(err) }))
	}

	render() {
		if (this.state.err) {
			return <div className={err}>{this.state.err}</div>
		}
		return <div id={`pr-reviewDisplay`} />
	}
}

const err = css({ color: `red` })
