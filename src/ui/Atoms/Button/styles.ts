import styled from 'styled-components';
import { ButtonUIProps } from './types';

export const ButtonUI = styled.button<ButtonUIProps>`
  border: 0;
  cursor: pointer;
  background: ${({ customColor }) =>  !!customColor ? customColor.background: 'var(--gray-100)'};;
  color: ${({ customColor }) =>  !!customColor ? customColor.text: 'var(--white-50)'};
  border-radius: ${({ borderRadius }) => !!borderRadius ? borderRadius: '0px'};
  width: ${({ width }) => !!width ? width: 'auto'};
  padding: ${({ padding }) => !!padding ? padding : '0'};
  font-family: var(--font-IBM);
  text-align: center;
  transition: filter .2s;

  &:hover {
    filter: brightness(0.9);
  }

`;
