import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { cost } from '../../state';

export default class Tax extends Component {
  render() {
    return (
      <Subscribe to={cost}>
        {state => (
          <div className="zygoteTaxLine">
            <div className="zygoteTaxHead">Tax</div>
            <div className="zygoteTax">
              ${state.tax.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </div>
            <style jsx global>{`
              .zygoteTaxLine {
                width: 100%;
                border-bottom: 1px solid #ccc;
                padding: 10px 0;
                text-transform: uppercase;
                text-align: center;
                font-size: 0.9em;
                margin: 0;
                color: #aaa;
              }
              @media (min-width: 900px) {
                .zygoteTaxLine div:first-of-type {
                  float: left;
                }
                .zygoteTaxLine div:nth-of-type(2) {
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
