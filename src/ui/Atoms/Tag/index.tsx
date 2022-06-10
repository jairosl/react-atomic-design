import { TagUI } from "./styles";
import { TagProps } from "./types";

export function Tag({ text , ...props }: TagProps) {
  return (
    <TagUI
      {...props}
    >
      {text}
    </TagUI>
  )
}