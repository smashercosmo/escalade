import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

export default class Loading extends Component {
  render() {
    const zygoteKeyFrame = keyframes`
            0%,
            80%,
            100% {
              transform: scale(0);
            }
            40% {
              transform: scale(1);
            }
    `;
    const ZygoteLoadAnim = styled.div`
      margin: 75px auto;
      width: 90px;
      text-align: center;
    `;
    const ZygoteAnimDiv1 = styled.div`
      width: 18px;
      height: 18px;
      background-color: #000;
      border-radius: 100%;
      display: inline-block;
      margin-right: 7px;
      animation: ${zygoteKeyFrame} 1.4s infinite ease-in-out both;
      animation-delay: -0.32s;
    `;
    const ZygoteAnimDiv2 = styled.div`
      width: 18px;
      height: 18px;
      background-color: #000;
      border-radius: 100%;
      display: inline-block;
      margin-right: 7px;
      animation: ${zygoteKeyFrame} 1.4s infinite ease-in-out both;
      animation-delay: -0.16s;
    `;
    const ZygoteAnimDiv3 = styled.div`
      width: 18px;
      height: 18px;
      background-color: #000;
      border-radius: 100%;
      display: inline-block;
      margin-right: 7px;
      animation: ${zygoteKeyFrame} 1.4s infinite ease-in-out both;
    `;

    return (
      <div className="zygoteLoader">
        <ZygoteLoadAnim className="zygoteLoadAnim">
          <ZygoteAnimDiv1 />
          <ZygoteAnimDiv2 />
          <ZygoteAnimDiv3 />
        </ZygoteLoadAnim>
      </div>
    );
  }
}
