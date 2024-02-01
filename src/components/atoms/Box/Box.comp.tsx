import { StyledBox } from "./Box.styled"
import { BoxProps } from "./Box.types"

export const Box: React.FC<BoxProps> = props => {
  return <StyledBox {...props}>{props.children}</StyledBox>
}
