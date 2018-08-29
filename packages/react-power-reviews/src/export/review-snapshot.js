import React, { Component } from "react"
import { css } from "emotion"

import initPowerReviews from "../utils/init-powerreviews"

export default class ReviewSnapshot extends Component {
	constructor(props) {
		super(props)

		this.state = { err: null, loading: true }
	}

	componentDidMount() {
		initPowerReviews(this.props, { ReviewSnapshot: `pr-reviewSnapshot` })
			.then(() => {
				// success
				this.setState({ loading: false })
			})
			.catch(err => this.setState({ err: err }))
	}

	render() {
		if (this.state.loading) {
			return <div className={loading}>Loading...</div>
		}
		if (this.state.err) {
			return <div className={err}>{this.state.err}</div>
		}
		return <div id={`pr-reviewSnapshot`} />
	}
}

const err = css({ color: `red` })
const loading = css({ color: `green` })
