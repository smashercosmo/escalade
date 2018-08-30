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
}