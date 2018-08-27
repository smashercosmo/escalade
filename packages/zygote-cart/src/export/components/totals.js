import React, { Fragment } from 'react'
import { Subscribe } from 'statable'
import { css } from 'emotion'
import { ThreeBounce } from 'better-react-spinkit'
import totalsState from '../state/totals'
import { borderColor } from '../styles'
import { primaryColor } from '../styles'

export default class Totals extends React.Component{
	render(){
		return (
			<ul className={listStyles}>
				<Subscribe to={totalsState}>
					{({ subtotal, modifications, total, loading }) => (
						<Fragment>
							<li>
								<div>Subtotal</div>
								<div>${subtotal.toFixed(2)}</div>
							</li>
							{loading && (
								<li>
									<span className={loadingStyles}>
										<ThreeBounce size={10} color={primaryColor} />
									</span>
								</li>
							)}
							{!loading && (
								<Fragment>
									{modifications.map(({
										description,
										displayValue,
										alteration,
									}, index) => (
										<li key={`mod${index}`}>
											<div>{description}</div>
											<div>{displayValue || formatUSD(alteration)}</div>
										</li>
									))}
									<li className={totalStyles}>
										<div>Total</div>
										<div>${total.toFixed(2)}</div>
									</li>
								</Fragment>
							)}
						</Fragment>
					)}
				</Subscribe>
			</ul>
		)
	}
}

function formatUSD(n){
	if(typeof n !== `number`){
		return `$0.00`
	}
	n = n.toFixed(2)
	if(n.charAt(0) === `-`){
		n = n.replace(`-`, `-$`)
	}
	else{
		n = `$${n}`
	}
	return n
}

const listStyles = css({
	listStyleType: `none`,
	margin: 0,
	marginTop: 30,
	marginBottom: 30,
	padding: 0,
	borderTop: `1px solid ${borderColor}`,
	li: {
		margin: `10px 0`,
		':after': {
			content: `""`,
			display: `block`,
			clear: `both`,
		},
	},
	div: {
		width: `50%`,
		float: `left`,
		':last-of-type': {
			textAlign: `right`,
		},
	},
})

const totalStyles = css({
	fontWeight: `bold`,
	paddingTop: 20,
	borderTop: `1px solid ${borderColor}`,
})

const loadingStyles = css({
	display: `block`,
	width: 34,
	margin: `auto`,
})