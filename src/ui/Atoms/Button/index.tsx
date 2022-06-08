import { ButtonUI } from "./styles"
import { ButtonProps } from "./types"

export function Button({ 
  onClick, 
  type, 
  children, 
  disabled, 
  ...props 
}: ButtonProps) {
  return (
    <ButtonUI 
      type={type || "button"} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {children}
    </ButtonUI>
  )
}