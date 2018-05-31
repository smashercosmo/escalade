import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { itemState } from '../../state';
import { ItemHeader } from '../../views';
import styles from './styles';

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
                  <img src={item.image} alt="" />
                </div>
                <div className="zygoteProdName">
                  <div className="zygoteProdNameTitle">{item.name}</div>
                  <div className="zygoteProdDesc">{item.desc}</div>
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
            <style jsx global>
              {styles}
            </style>
          </div>
        )}
      </Subscribe>
    );
  }
}
