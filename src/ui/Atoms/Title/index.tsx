import { TitleUI } from "./styles";
import { TitleProps } from "./types";

export function Title({ 
  fontSize, 
  lineHeight, 
  children, 
  fontWeight, 
  asElement,
  fontFamily,
  color,
  ...props
}: TitleProps) {
  return (
    <TitleUI 
      fontFamily={fontFamily}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={fontWeight || 500}
      color={color || 'var(--white-50)'}
      as={ asElement || 'h1'}
      {...props}
    >
      {children}
    </TitleUI>
  );
}