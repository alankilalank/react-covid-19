import * as React from 'react';
import styled from 'styled-components';

import { useTheme } from '../contexts/themeProvider';
import { mediaQuery } from '../themes';
import { ReactComponent as DarkIcon } from './assets/moon-stroke.svg';
import { ReactComponent as LightIcon } from './assets/sun-stroke.svg';

const ButtonSwitch = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 25px;
  box-shadow: 0 1px 4px rgba(0, 50, 50, 0.08);
  svg {
    fill: ${props => props.theme.colors.text};
    height: 1.25rem;
    width: 1.25rem;
  }
`;

const FloatingContainer = styled.div`
  position: absolute;
  right: 0;
  top: 10%;
  ${mediaQuery.tablet} {
    right: 20px;
  }
`;

const FloatingButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <FloatingContainer>
      <ButtonSwitch onClick={toggleTheme}>
        {theme === 'light' ? <DarkIcon /> : <LightIcon />}
      </ButtonSwitch>
    </FloatingContainer>
  );
};

export default FloatingButton;
