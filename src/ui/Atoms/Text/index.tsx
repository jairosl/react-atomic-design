import { TextUI } from "./styles";
import { TextProps } from "./types";

export function Text({ 
  children,
  fontFamily,
  fontSize,
  lineHeight,
  color,
  ...props
}:TextProps) {
  return (
    <TextUI
      fontFamily={fontFamily}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color || 'var(--white-50)'}
      {...props}
    >
      {children}
    </TextUI>
  );
}