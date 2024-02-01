import { StyledInput } from "./Input.styled"
import { InputProps } from "./Input.types"

export const Input: React.FC<InputProps> = props => {
  return <StyledInput {...props} />
}
