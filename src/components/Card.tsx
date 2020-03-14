import * as React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../themes';
import Placeholder from './Placeholder';

interface CardProps {
  loading?: boolean;
  info: string;
}

const CardWrapper = styled.div<CardProps>`
  margin: 10px 0;
  min-height: 150px;
  min-width: 250px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  ${mediaQuery.tablet} {
    width: 80%;
    margin: 10px;
  }
  &.pad20 {
    padding: 20px;
  }
  h2 {
    margin-bottom: 8px;
    font-size: 2em;
    color: ${props => {
      switch (props.info) {
        case 'warning':
          return props.theme.colors.warning;
        case 'success':
          return props.theme.colors.success;
        case 'danger':
          return props.theme.colors.danger;
        default:
          return '';
      }
    }};
  }
`;

const Card: React.FC<CardProps> = ({ loading = false, info, children }) => (
  <CardWrapper className={loading ? '' : 'pad20'} info={info}>
    {loading ? <Placeholder /> : children}
  </CardWrapper>
);

export default Card;
