import styled from "styled-components"
import { StyleProps } from "./Button.types"

export const StyledBox = styled.button<StyleProps>`
  border-radius: ${props => props.$borderRadius || "8px"};
  background-color: ${props =>
    props.$backgroundColor || "var(--primary-color)"};
  color: ${props => props.$fontColor || "var(--white)"};
`
