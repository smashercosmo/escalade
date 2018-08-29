import React, { Component } from "react"
import { css } from "emotion"

import initPowerReviews from "../utils/init-powerreviews"

export default class ReviewDisplay extends Component {
	constructor(props) {
		super(props)

		this.state = { err: null, loading: true }
	}

	componentDidMount() {
		if (window.POWERREVIEWS) {
			this.setState({ loading: false })
		}
		initPowerReviews(this.props, { ReviewDisplay: `pr-reviewDisplay` })
			.then(() => {
				// success
				this.setState({ loading: false })
			})
			.catch(err => this.setState({ err: JSON.stringify(err), loading: false }))
	}

	render() {
		if (this.state.loading) {
			return <div className={loading}>Loading...</div>
		}
		if (this.state.err) {
			return <div className={err}>{this.state.err}</div>
		}
		return <div id={`pr-reviewDisplay`} />
	}
}

const err = css({ color: `red` })
const loading = css({ color: `green` })
