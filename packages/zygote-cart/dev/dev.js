import React from 'react';
import { render } from 'react-dom';
import { ZygoteContainer, ZygoteToggleButton, AddToCart } from '../dist';
import zygote from '../dist';
import Loader from '../src/components/containers/Loading';

const containerEl = document.createElement('div');
document.body.appendChild(containerEl);
zygote.site('stiga');

render(
  <div>
    <AddToCart
      price={12.33}
      desc="Hello there"
      id={`T8591W`}
      image={'https://pingpong.com/img/product/t1265-0-s.jpg?1496431075'}
      name={`table white`}
      url={'https://spin.stigaus.com/'}
      open
    >
      <button className="cartButton">Add to Cart</button>
    </AddToCart>
    <Loader />
    <ZygoteContainer />
  </div>,
  containerEl
);
