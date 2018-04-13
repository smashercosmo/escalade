import React, { Component } from 'react';

export default class ItemHeader extends Component {
  render() {
    return (
      <div className="zygoteProdHeader">
        <div>Item</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Remove</div>
        <style jsx global>{`
          .zygoteProdHeader {
            width: 100%;
            border-bottom: 1px solid #ccc;
            margin: 0 0 10px;
            padding: 0 0 10px;
            font-size: 0.8em;
            display: none;
          }
          .zygoteProdHeader > div {
            float: left;
          }
          .zygoteProdHeader div:first-of-type {
            width: 576px;
          }
          .zygoteProdHeader div:nth-child(2) {
            width: 131px;
          }
          .zygoteProdHeader div:last-of-type {
            float: right;
          }
          @media (min-width: 900px) {
            .zygoteProdHeader {
              display: block;
            }
            .zygoteStep4 .zygoteProdHeader div:nth-child(2),
            .zygoteStep4 .zygoteProdHeader div:nth-child(2) {
              text-align: center;
              width: 112px;
            }
            .zygoteStep4 .zygoteProdHeader div:first-of-type,
            .zygoteStep5 .zygoteProdHeader div:first-of-type {
              width: 524px;
            }
          }
        `}</style>
      </div>
    );
  }
}
