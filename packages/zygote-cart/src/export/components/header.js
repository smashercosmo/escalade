import React from 'react'
import { css } from 'emotion'

export default class CartQuantity extends React.Component {
	render() {
		return (
			<h2 className={headerStyles}>{this.props.children}</h2>
		)
	}
}

const headerStyles = css({
	fontSize: `1em`,
})