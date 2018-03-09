import React, { Component } from 'react'
import { Subscribe } from '../src'

import counter from './state'

function incrementProgress(){
	counter.setState({
		progress: counter.state.progress + 1
	})
}

export default class Counter extends Component {
	render() {
		return (
			<Subscribe to={counter}>
				{state => (
					<button onClick={incrementProgress}>
						Progress: {state.progress}
					</button>
				)}
			</Subscribe>
		)
	}
}