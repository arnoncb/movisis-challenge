import { StyledImage } from "./Image.styled"
import { ImageProps } from "./Image.types"

export const Image: React.FC<ImageProps> = props => {
  return <StyledImage {...props}></StyledImage>
}
