import styled from 'styled-components';
import { ImageUIProps } from './types';

export const ImageUI = styled.img<ImageUIProps>`
  height: ${({height}) => height};
  width: ${({width}) => width};

  border-radius: ${({ isWithdrawn }) => isWithdrawn ? '50%' : '0'} ;

  border: 2px solid var(--orange-50);
  object-fit: cover;
`;
