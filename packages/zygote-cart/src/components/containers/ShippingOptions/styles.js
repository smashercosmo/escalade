import css from 'styled-jsx/css'

export default css`
  .zygoteShippingOptionsContainer {
    margin: 20px -20px;
    background-color: #f6f6f6;
    border-top: 1px solid #e8e9e9;
    border-bottom: 1px solid #e8e9e9;
  }
  .zygoteShippingOptions {
    padding: 0px 20px 0px 20px;
  }
  .zygoteShippingInputs {
    color: #666667;
    margin: 0 -20px 25px -20px;
    padding: 0 20px 10px 20px;
    border-bottom: 2px solid #e8e9e9;
    &:last-child {
      border: none;
      padding-bottom: 0px;
    }
  }
  .zygoteShippingInputs div:last-child {
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
  .zygoteShippingSection {
    font-size: 0.9em;
    margin-bottom: 20px;
    &div:last-child {
      margin-bottom: 0;
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
    margin-top: -8px;
    margin-bottom: 20px;
    margin-left: 20px;
    font-weight: 700;
    color: #000;
    & > div {
      margin-bottom: 5px;
    }
  }
`
