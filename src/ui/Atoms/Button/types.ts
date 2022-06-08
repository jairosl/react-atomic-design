export interface ButtonUIProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  customColor?: {
    background: string;
    text: string;
  }
  borderRadius?: string;
}

export interface ButtonProps extends ButtonUIProps{
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

