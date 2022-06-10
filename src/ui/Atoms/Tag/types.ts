export interface TagUIProps extends React.HTMLAttributes<HTMLSpanElement> {
  customColors?: {
    text: string;
    background: string;
  }
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: string;
  borderRadius?: string;
  padding?: string;
  height?: string;
}

export interface TagProps extends TagUIProps {
  text: string;
}