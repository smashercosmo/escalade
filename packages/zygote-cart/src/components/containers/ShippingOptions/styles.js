import css from 'styled-jsx/css';

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
  }
  .zygoteShippingName {
    float: left;
  }
  zygoteShippingPrice {
    float: right;
  }
  .zygoteCheckboxContainer {
    width: 100%;
    & > div:after {
      content: '';
      clear: both;
      display: block;
    }
  }
`;
