import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { cost } from '../../state';

export default class Total extends Component {
  render() {
    return (
      <Subscribe to={cost}>
        {state => (
          <div className="zygoteTotalLine">
            <div className="zygoteTotalHead">total</div>
            <div className="zygoteTotal">
              ${state.total.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </div>
            <style jsx global>{`
              .zygoteTotalLine {
                width: 100%;
                border-bottom: 1px solid #ccc;
                padding: 10px 0;
                text-transform: uppercase;
                text-align: center;
                font-size: 1.2em;
                font-weight: 700;
                margin-top: 0;
              }
              @media (min-width: 900px) {
                .zygoteTotalLine div:first-of-type {
                  float: left;
                }
                .zygoteTotalLine div:nth-of-type(2) {
                  float: right;
                }
              }
            `}</style>
          </div>
        )}
      </Subscribe>
    );
  }
}
