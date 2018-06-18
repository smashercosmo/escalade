import css from 'styled-jsx/css'

export default css`
  .zygoteCouponLine {
    width: 95%;
    padding: 10px 0;
    font-size: 0.9em;
    font-weight: 300;
    margin: 0 auto;
    color: #666;
  }
  .zygoteCouponHighlight {
    padding: 2px;
    border-radius: 4px;
    display: inline-block;
    color: rgb(0, 207, 255);
  }
  .zygoteAddCoupon {
    margin-right: 8px;
    text-align: center;
    cursor: pointer;
    background: rgb(0, 207, 255);
    color: white;
    width: 20px;
    height: 20px;
    font-weight: 300;
    font-size: 1.4em;
    line-height: 17px;
    border-radius: 100%;
    display: inline-block;
  }
  .zygoteEditCoupon {
    cursor: pointer;
    display: inline-block;
    margin-right: 12px;
    font-size: 1.4em;
    color: rgb(0, 207, 255);
  }
  .zygoteCouponCode > input {
    font-size: 0.7em;
    padding: 7px;
    border-radius: 6px;
    background: #f2f2f2;
    margin-right: 15px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    outline: none;
    border: 1px solid #e5e5e5;
  }
  input[type='text']:focus,
  textarea:focus {
    box-shadow: 0 0 5px rgba(0, 207, 255, 1);
    border: 1px solid rgba(0, 207, 255, 1);
  }
  .zygoteCouponButton {
    cursor: pointer;
    color: #666;
    border: 1px solid #ccc;
    padding: 7px 12px;
    background-color: white;
    border-radius: 15px;
    outline: none;
    &:hover {
      color: white;
      background: #666;
      border-color: white;
    }
  }
  .zygoteRemoveCoupon {
    color: #f00;
    margin-left: 5px;
    cursor: pointer;
    font-size: 1.2em;
    &:hover {
      font-size: 1.4em;
    }
  }
`
