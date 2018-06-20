import css from 'styled-jsx/css'

export default css`
  .zygoteBtn {
    outline: 0;
    color: #fff;
    background: rgb(0, 207, 255);
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
    margin: 0px auto 20px auto;
    border: 2px solid #fff;
    transition: all 0.2s ease;
    position: relative;
    z-index: 1;
    &:before {
      transition: 0.2s all ease;
      position: absolute;
      top: 0;
      left: 50%;
      right: 50%;
      bottom: 0;
      opacity: 0;
      content: '';
      background-color: #fff;
      border-radius: 22px;
      z-index: -1;
    }
    &:hover {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.2);
      color: rgb(0, 207, 255);
      border-color: rgb(0, 207, 255);
      &:before {
        transition: 0.2s all ease;
        left: 0px;
        right: 0px;
        opacity: 1;
      }
    }
  }
  .zygoteStepBtns {
    display: block;
  }
  .zygoteAltBtn {
    color: #000;
    background: #fff;
    border: 2px solid #000;
    &:before {
      transition: 0.2s all ease;
      position: absolute;
      top: 0;
      left: 50%;
      right: 50%;
      bottom: 0;
      opacity: 0;
      content: '';
      background-color: #000;
      z-index: -1;
    }
    &:hover {
      color: #fff;
      border-color: #000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4), 0 3px 6px rgba(0, 0, 0, 0.4);
      &:before {
        transition: 0.2s all ease;
        left: -2px;
        right: -2px;
        opacity: 1;
      }
    }
  }
  .zygoteButtonLoad {
    width: 20px;
    margin: 0 auto;
  }
  .zygoteBtnDisabled {
    outline: 0;
    color: #fff;
    background: #ccc;
    height: 44px;
    min-width: 130px;
    width: 80%;
    border-radius: 22px;
    text-align: center;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 0.05em;
    display: block;
    margin: 0px auto 20px auto;
    border: 2px solid #fff;
  }
  .zygoteCheckErrors {
    color: #f00;
    font-size: 0.8em;
    text-align: center;
    margin: 5px;
  }
`
