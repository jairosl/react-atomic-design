import { Link } from "react-router-dom";
import { ContainerLink } from "./styles";
import { ButtonLinkProps } from "./types";

export function CustomLink({ 
  to, 
  replace,
  children,
  fontSize,
  lineHeight,
  fontWeight,
  fontFamily,
  color,
  textDecoration,
  ...props
}: ButtonLinkProps) {
  return (
    <ContainerLink 
      fontFamily={fontFamily}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={fontWeight || 500}
      color={color || 'var(--purple-250)'}
      textDecoration={textDecoration || 'none'}
    >
      <Link 
        to={to} 
        replace={replace || false} 
        {...props}
      >
        {children}
      </Link>
    </ContainerLink>
  )
}