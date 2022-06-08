import React from "react";

export interface TitleUIProps extends React.HTMLAttributes<HTMLHeadingElement> {
  fontSize: string;
  lineHeight: string;
  fontWeight?: number;
  fontFamily: string;
  color?: string;
}

export interface TitleProps extends TitleUIProps {
  asElement?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' ;
  children: React.ReactNode;
}