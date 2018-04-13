import React, { Component } from 'react';
import { Subscribe } from 'statable';

import { cartState, itemState } from '../../state';
import { cartContent } from '../../utils';
import { Nav, Header, Footer, Content, StepButtons } from '../../containers';

export default class Cart extends Component {
  render() {
    // console.log(itemState.state);
    // console.log(cartState.state);
    const { tabs } = cartContent;
    return (
      <Subscribe to={cartState}>
        {state => (
          <div className="zygoteModal" onClick={e => e.stopPropagation()}>
            <Header />
            {state.showNav ? <Nav /> : null}
            <div className="zygoteForm">
              <Content
                active={
                  state.tab === tabs.length
                    ? 'Order Placed'
                    : tabs[state.tab].title
                }
              />
              <StepButtons />
            </div>
            <Footer />
            <style jsx global>{`
              .zygoteModal {
                background-color: #fff;
                max-width: 900px;
                margin: 0 auto;
                position: relative;
              }
              @media (min-width: 900px) {
                .zygoteModal {
                  top: 30px;
                  margin-bottom: 30px;
                }
              }
            `}</style>
          </div>
        )}
      </Subscribe>
    );
  }
}
