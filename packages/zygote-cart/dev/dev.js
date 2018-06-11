import React from 'react'
import { render } from 'react-dom'
import {
  ZygoteContainer,
  ZygoteToggleButton,
  AddToCart,
  removeAllItems
} from '../src'
import zygote from '../src'
const brandLogo =
  'https://cdn.pixabay.com/photo/2018/05/21/22/44/logo-3419889_1280.png'

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)
zygote.site('goalrilla')
render(
  <div>
    <AddToCart
      price={12.33}
      desc="Hello there"
      id={`av88a30107r`}
      image={'https://pingpong.com/img/product/t1265-0-s.jpg?1496431075'}
      name={`table white`}
      url={'https://spin.stigaus.com/'}
      open
    >
      <button className="cartButton">Add to Cart</button>
    </AddToCart>
    <ZygoteContainer
      googleApiKey={'AIzaSyD2pAEWs2VMApgeuoNhy3dJoPWDvMOm49Y'}
      //  brandLogo={brandLogo}
      // addToCartMessage={'Custom Add To Cart MeSsAgE'}
      // cartHeader={'Here is your cart header'}
      // footerMessage={'Here is from me'}
      // cartButtonOneMessage={'Do da checkout'}
      // cartButtonTwoMessage={'Quit this checkout'}
      // contactInfoButtonMessage={'the next step'}
      // paymentButtonMessage={'give us money'}
      // orderCompleteMessage={'just bought from the best store ever'}
    />
  </div>,
  containerEl
)
