import React, { Component } from "react"
import { css } from "emotion"

import initPowerReviews from "../utils/init-powerreviews"

export default class WriteReview extends Component {
	constructor(props) {
		super(props)

		this.state = { err: null }
	}

	componentDidMount() {
		initPowerReviews(this.props, { Write: `pr-write` })
			.then(() => {
				// success
			})
			.catch(err => this.setState({ err: JSON.stringify(err) }))
	}

	render() {
		if (this.state.err) {
			return <div className={err}>{this.state.err}</div>
		}
		return <div id={`pr-write`} />
	}
}

const err = css({ color: `red` })
