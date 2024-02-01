import styled from "styled-components"
import { StyledProps } from "./Image.types"

export const StyledImage = styled.img<StyledProps>`
  object-fit: ${props => props.$fit || "contain"};
  max-width: ${props => props.$maxWidth || "unset"};
`
