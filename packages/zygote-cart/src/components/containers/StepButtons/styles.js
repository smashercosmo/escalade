import css from 'styled-jsx/css';

export default css`
  .zygoteBtn {
    background-color: rgba(0, 207, 255, 1);
    outline: 0;
    border: 0;
    color: #fff;
    height: 44px;
    min-width: 130px;
    width: 80%;
    border-radius: 22px;
    text-align: center;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 0.05em;
    cursor: pointer;
    display: block;
    margin: 0px auto 10px auto;
    &:hover {
      background: #66e2ff;
    }
    &:active {
      background: rgba(0, 207, 255, 1);
    }
  }
  .zygoteStepBtns {
    display: block;
  }
  .zygoteShoppingBtn {
    background: #fff;
    color: #000;
    border: 1px solid #000;
    &:hover {
      background: #f2f2f2;
    }
    &:active {
      background: #fff;
    }
  }
  .zygoteButtonLoad {
    width: 20px;
    margin: 0 auto;
  }
  .zygoteBtnDisabled {
    background-color: #ccc;
    outline: 0;
    border: 0;
    color: #fff;
    height: 54px;
    min-width: 130px;
    width: 80%;
    border-radius: 22px;
    text-align: center;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 0.05em;
    display: block;
    margin: 0px auto 10px auto;
  }
`;
