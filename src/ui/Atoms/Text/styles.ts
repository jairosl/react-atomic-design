import styled from 'styled-components';
import { TextUIProps } from './types';

export const TextUI = styled.p<TextUIProps>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;
