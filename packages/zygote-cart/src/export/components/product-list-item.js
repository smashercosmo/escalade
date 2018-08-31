import React from 'react'
import SmallButton from './small-button'
import removeFromCart from '../utils/remove-from-cart'
import increaseQuantity from '../utils/increase-quantity'
import decreaseQuantity from '../utils/decrease-quantity'

export default class ProductList extends React.Component{
	render() {
		const {
			image,
			title,
			description,
			editable,
			price,
			id,
			quantity,
		} = this.props
		return (
			<li className={`zygoteProdItem${editable ? ` zygoteProdItemEditable` : ``}`}>
				<div className='zygoteProdImage'>
					<img src={image} />
				</div>
				<div className='zygoteProdTitle'>
					{title}
				</div>
				<div className='zygoteProdDesc'>
					{description}
				</div>
				<div className='zygoteProdQty'>
					{editable && (
						<SmallButton
							onClick={() => decreaseQuantity(id)}
							secondary
						>-</SmallButton>
					)}
					<div className='zygoteProdQtyNum'>{quantity}</div>
					{editable && (
						<SmallButton
							onClick={() => increaseQuantity(id)}
							secondary
						>+</SmallButton>
					)}
				</div>
				<div className='zygoteProdPrice'>
					${price.toFixed(2)}
				</div>
				{editable && (
					<div
						role='button'
						className='zygoteProdX'
						onClick={() => removeFromCart(id)}
					>×</div>
				)}
			</li>
		)
	}
	static styles = () => ({
		'.zygoteProdItem': {
			position: `relative`,
			':after': {
				content: `""`,
				display: `block`,
				clear: `both`,
			},
			'> div': {
				float: `left`,
			},
		},
		'.zygoteProdImage': {
			width: `100%`,
			maxWidth: 65,
			textAlign: `center`,
		},
		'.zygoteProdTitle': {
			marginTop: 5,
			fontWeight: `bold`,
			width: `100%`,
		},
		'.zygoteProdDesc': {
			width: `100%`,
			marginBottom: 10,
			marginTop: 5,
			fontSize: `.75em`,
		},
		'.zygoteProdQty': {
			userSelect: `none`,
			position: `absolute`,
			left: 85,
			top: 23,
			zIndex: 2,
		},
		'.zygoteProdQtyNum': {
			padding: `0 5px`,
			textAlign: `center`,
			minWidth: 30,
			display: `inline-block`,
			top: -3,
			position: `relative`,
		},
		'.zygoteProdPrice': {
			width: `50%`,
			textAlign: `right`,
			position: `absolute`,
			top: 23,
			right: 0,
		},
		'.zygoteProdX': {
			position: `absolute`,
			top: 21,
			right: 0,
			fontSize: `2em`,
			lineHeight: `16px`,
			fontWeight: 200,
			cursor: `pointer`,
		},
		'.zygoteProdItemEditable': {
			'.zygoteProdPrice': {
				right: 35,
			},
		},
	})
}