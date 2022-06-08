export interface ImageUIProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width: string;
  height: string;
  isWithdrawn: boolean;
}
export interface ImageProps extends ImageUIProps{
  urlImage: string;
  alt: string;
}