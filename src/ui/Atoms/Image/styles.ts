import styled from 'styled-components';
import { ImageUIProps } from './types';

export const ImageUI = styled.img<ImageUIProps>`
  height: ${({height}) => height};
  width: ${({width}) => width};

  border-radius: ${({ isWithdrawn }) => !!isWithdrawn ? '50%' : '0'} ;

  border: ${({ isWithdrawn }) => !!isWithdrawn ? '2px solid var(--orange-50)' : 'none'};
  object-fit: cover;
`;
