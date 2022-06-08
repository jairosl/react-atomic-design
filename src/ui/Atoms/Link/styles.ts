import styled from 'styled-components';
import { ButtonLinkUIProps } from './types';

export const ContainerLink = styled.div<ButtonLinkUIProps>`
  a { 
    font-family: ${({ fontFamily }) => fontFamily};
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ lineHeight }) => lineHeight};
    font-weight: ${({ fontWeight }) => fontWeight};
    color: ${({ color }) => color};
    text-decoration: ${({ textDecoration }) => textDecoration};
    transition: filter .2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
