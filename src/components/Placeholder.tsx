import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const placeholderAnimate = keyframes`
    0%{ background-position: -650px 0; }
    100%{ background-position: 650px 0; }
`;

const StyledContent = styled.div`
  height: 100%;
  overflow: hidden;
  background: #000;
  position: relative;

  animation-duration: 1.7s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${placeholderAnimate};
  background: #f6f7f8;
  background: linear-gradient(to right, #eee 2%, #ddd 18%, #eee 33%);
  background-size: 1300px;
`;
const Placeholder = () => <StyledContent></StyledContent>;

export default Placeholder;
