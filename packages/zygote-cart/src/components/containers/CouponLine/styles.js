import css from 'styled-jsx/css'

export default css`
  .zygoteCouponLine {
    color: rgb(0, 207, 255);
    width: 100%;
    padding: 5px 0 5px 0;
    font-size: 0.8em;
  }
  .zygoteAnimate {
    transform: translateX(-150%);
    transition: transform 0.25s linear;
  }
  .zygoteAnimMount {
    transform: translateX(0%);
  }
  .zygoteCouponTotal {
    float: right;
  }
  .zygoteCouponHead {
    float: left;
  }
`
