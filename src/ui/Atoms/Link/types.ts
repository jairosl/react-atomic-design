export interface ButtonLinkUIProps extends
React.AnchorHTMLAttributes<HTMLAnchorElement> {
  fontSize: string;
  lineHeight: string;
  fontWeight?: number;
  fontFamily: string;
  color?: string;
  textDecoration?: string;
}

interface LinkRouterProps {
  pathname: string;
  search: string;
  hash: string;
  state: object;
}

export interface ButtonLinkProps extends  ButtonLinkUIProps{
  to: string | LinkRouterProps;
  replace?: boolean;
  children: React.ReactNode;
}