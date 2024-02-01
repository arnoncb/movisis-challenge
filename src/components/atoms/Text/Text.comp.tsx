import { StyledText } from "./Text.styled"
import { TextProps } from "./Text.types"

export const ScreenText: React.FC<TextProps> = props => {
  return <StyledText {...props}>{props.children}</StyledText>
}
