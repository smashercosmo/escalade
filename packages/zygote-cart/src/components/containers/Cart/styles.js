import css from 'styled-jsx/css'

export default css`
  .zygoteModal {
    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.4);
    border-radius: 2px;
    background-color: #fff;
    width: 500px;
    right: 5px;
    bottom: 5px;
    position: absolute;
    top: 5px;
    overflow-x: auto;
    transform: translateX(100%);
    transition: transform 0.5s linear;
  }
  .zygoteModalAction {
    transform: translateX(0%);
  }
`
