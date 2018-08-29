## Installation

```bash
npm i -S react-power-reviews
yarn add react-power-reviews
```

## Usage

There are five different Review components: `ReviewSnippet`, `ReviewDisplay`, `ReviewSnapshot`,`ReviewList`, `WriteReview`.

```jsx
import React, { Component } from 'react'
import PowerReviews from 'react-power-reviews' // You can also destructure each component out if you would like (e.g. import { ReviewSnippet } from 'react-power-reviews')

export default class Index extends Component {
  render() {
    // all will need this same config just change the component
    return (
      <PowerReviews.ReviewSnippet
        apiKey={`Your Api Key`}
        merchantGroupId={`Your Merchant Group Id`}
        merchantId={`Your Merchant`}
        pageId={`Your Page Id (usually product sku)`}
        wrapperUrl={`Page which you write reviews on`}
      />
    )
  }
}
```
