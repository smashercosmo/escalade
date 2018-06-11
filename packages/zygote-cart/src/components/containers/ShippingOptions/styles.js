import css from 'styled-jsx/css'

export default css`
  .zygoteShippingOptionsContainer {
    margin: 20px -20px;
    background-color: #f6f6f6;
    border-top: 1px solid #e8e9e9;
    border-bottom: 1px solid #e8e9e9;
  }
  .zygoteShippingOptions {
    padding: 0px 20px 30px 20px;
  }
  .zygoteShippingInputs {
    color: #666667;
    margin-bottom: 25px;
  }
  .zygoteShippingInputs:last-child {
    margin-bottom: 0;
  }
  .zygoteShipOptionLine > div {
    &:after,
    :before {
      content: '';
      clear: both;
      display: block;
    }
  }
  .zygoteCheckboxContainer {
    &:after,
    :before {
      content: '';
      clear: both;
      display: block;
    }
  }
  .zygoteCheckbox {
    float: left;
  }
  .zygoteShippingName {
    float: left;
  }
  .zygoteShippingPrice {
    float: right;
  }
  .zygoteSectionTitle {
    margin-bottom: 10px;
  }
  .zygoteUpsIcon {
    height: 35px;
    width: 35px;
    float: right;
  }
  .zygoteShippingLocation {
    margin-bottom: 10px;
    font-size: 1em;
    font-weight: 500;
  }
  .zygoteShippingProducts {
    font-size: 0.7em;
    margin-bottom: 10px;
    margin-left: 20px;
    font-weight: 700;
    color: #000;
    & > div {
      margin-bottom: 5px;
    }
  }
`
