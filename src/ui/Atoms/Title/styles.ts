import styled from 'styled-components';
import { TitleUIProps } from './types';

export const TitleUI = styled.h1<TitleUIProps>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;
