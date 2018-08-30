import React from 'react'

export default class SectionHeader extends React.Component {
	render() {
		return (
			<h2 className='zygoteSectionHeader'>{this.props.children}</h2>
		)
	}
}