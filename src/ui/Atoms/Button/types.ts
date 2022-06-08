export interface ButtonUIProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  customColor?: {
    background: string;
    text: string;
  }
  padding?: string;
  borderRadius?: string;
  width?: string;
}

export interface ButtonProps extends ButtonUIProps{
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

