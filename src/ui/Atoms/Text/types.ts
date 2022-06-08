
export interface TextUIProps extends React.HTMLAttributes<HTMLParagraphElement> {
  fontSize: string;
  lineHeight: string;
  fontWeight?: number;
  fontFamily: string;
  color?: string;
}

export interface TextProps extends TextUIProps {
  children: React.ReactNode;
}