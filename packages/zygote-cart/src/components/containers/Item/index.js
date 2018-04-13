import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { itemState } from '../../state';
import { ItemHeader } from '../../views';

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  plus(itemName) {
    const updatedItem = itemState.state.items.find(
      ({ name }) => name === itemName
    );

    if (updatedItem) {
      updatedItem.qty += 1;
    }

    itemState.setState({
      items: itemState.state.items.map(
        item => (item.name === itemName ? updatedItem : item)
      )
    });
  }

  minus(itemName) {
    const updatedItem = itemState.state.items.find(
      ({ name }) => name === itemName
    );

    if (updatedItem && updatedItem.qty > 1) {
      updatedItem.qty -= 1;
    }

    itemState.setState({
      items: itemState.state.items.map(
        item => (item.name === itemName ? updatedItem : item)
      )
    });
  }

  removeItem(itemName) {
    const removedItem = itemState.state.items.find(
      ({ name }) => name === itemName
    );

    const index = itemState.state.items.indexOf(removedItem);
    const updated = [...itemState.state.items];
    updated.splice(index, 1);

    itemState.setState({
      items: updated
    });
  }

  render() {
    return (
      <Subscribe to={itemState}>
        {state => (
          <div className="zygoteProdList">
            <ItemHeader />
            {state.items.map((item, i) => (
              <div key={i} className="zygoteProd">
                <div className="zygoteProdImg">
                  <a href={item.url}>
                    <img src={item.image} alt="" />
                  </a>
                </div>
                <div className="zygoteProdName">
                  <div>
                    <a href={item.url}>{item.name}</a>
                    <div>{item.desc}</div>
                  </div>
                </div>
                <div className="zygoteProdQty">
                  <div>
                    <div
                      className="zygoteDecrease"
                      onClick={() => this.minus(item.name)}
                    >
                      -
                    </div>{' '}
                    {item.qty}{' '}
                    <div
                      className="zygoteIncrease"
                      onClick={() => this.plus(item.name)}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="zygoteProdPrice">
                  <div>
                    ${Number(item.price).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </div>
                </div>
                <div
                  className="zygoteProdDelete"
                  onClick={() => this.removeItem(item.name)}
                >
                  <div className="zygoteProdX">×</div>
                </div>
              </div>
            ))}
            <style jsx global>{`
              .zygoteProdDelete {
                float: right;
                cursor: pointer;
                line-height: 14px;
                font-size: 1.5em;
                text-align: right;
                position: absolute;
                top: 0;
                right: 0;
              }
              .zygoteDecrease,
              .zygoteIncrease {
                text-align: center;
                cursor: pointer;
                background: black;
                color: white;
                width: 19px;
                height: 19px;
                font-weight: 500;
                font-size: 0.9em;
                line-height: 17px;
                border-radius: 100%;
                display: inline-block;
              }
              .zygoteProdList {
                width: 100%;
                margin-top: 50px;
              }
              .zygoteProd {
                margin: 15px auto;
                width: 100%;
                position: relative;
                margin-bottom: 30px;
                border-bottom: 1px solid #ccc;
                padding-bottom: 30px;
              }
              .zygoteProd:last-of-type {
                margin-bottom: 0;
                border-bottom: 0;
              }
              .zygoteStep4 .zygoteProdPrice,
              .zygoteStep5 .zygoteProdPrice {
                float: right;
                text-align: right;
              }
              .zygoteProd:after,
              .zygoteProd:before {
                content: '';
                display: block;
                clear: both;
              }
              .zygoteProdImg {
                display: none;
              }
              .zygoteProdImg img {
                width: 150px;
                border: 0;
                padding: 0 5px;
              }
              .zygoteProdQty {
                float: left;
              }
              .zygoteProdName {
                margin-bottom: 15px;
                text-decoration: none;
              }
              .zygoteProdPrice {
                text-align: right;
                font-weight: 700;
              }
              .zygoteProdImg a {
                display: block;
                width: 150px;
                height: 150px;
                overflow: hidden;
              }
              @media (min-width: 900px) {
                .zygoteStep4 .zygoteProdPrice,
                .zygoteStep5 .zygoteProdPrice {
                  width: 237px;
                  float: none;
                }
                .zygoteProd {
                  margin-bottom: 15px;
                  padding-bottom: 15px;
                  display: table-row;
                }
                .zygoteProdDelete {
                  float: none;
                  position: static;
                  top: auto;
                  right: auto;
                }
                .zygoteProdQty {
                  float: none;
                }
                .zygoteProdImg a {
                  position: relative;
                }
                .zygoteProdImg img {
                  position: absolute;
                  margin: auto;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                }
                .zygoteProdName,
                .zygoteProdImg,
                .zygoteProdDelete,
                .zygoteProdPrice,
                .zygoteProdQty {
                  display: table-cell;
                  vertical-align: middle;
                  padding: 0;
                  margin: 0;
                }
                .zygoteProdName {
                  width: 393px;
                  margin-bottom: 0;
                }
                .zygoteProdName a {
                  font-weight: 700;
                  text-transform: uppercase;
                }
                .zygoteProdName > div {
                  padding: 0 20px;
                }
                .zygoteProdName > div > div {
                  margin-top: 5px;
                  font-size: 0.9em;
                  overflow: hidden;
                }
                .zygoteProdPrice,
                .zygoteProdQty {
                  width: 120px;
                  text-align: center;
                }
                .zygoteProdPrice > div,
                .zygoteProdQty > div {
                  width: 100%;
                }
                .zygoteProdDelete {
                  width: 8%;
                }
                .zygoteProdDelete > div {
                  text-align: right;
                  width: 100%;
                }
              }
            `}</style>
          </div>
        )}
      </Subscribe>
    );
  }
}
