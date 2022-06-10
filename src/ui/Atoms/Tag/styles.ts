import styled from 'styled-components';
import { TagUIProps } from './types';

export const TagUI = styled.span<TagUIProps>`
  display:inline-block;
  height: ${({ height }) => height || 'unset'};
  font-family: ${({ fontFamily }) => fontFamily || 'var(--font-Inter)'};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  font-size: ${({ fontSize }) => fontSize || '0.875rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.625rem'};
  border-radius: ${({ borderRadius }) => borderRadius || '2.5rem'};

  color: ${({ customColors }) => customColors?.text || 'var(--white-50)'};
  background: ${({ customColors }) => customColors?.background || 'var(--purple-700)'};
  padding: ${({ padding }) => padding || 'auto'};
  text-align: center;
`;
