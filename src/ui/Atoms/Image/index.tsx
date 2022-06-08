import { ImageUI } from "./styles";
import { ImageProps } from "./types";


export function Image({ urlImage, alt, height, width, isWithdrawn, ...props }: ImageProps) {
  return (
    <ImageUI 
      src={urlImage} 
      alt={alt} 
      height={height} 
      width={width}
      isWithdrawn={isWithdrawn || false}
      {...props}
    />
  )
}