import styled from "styled-components"
import { StyleProps } from "./Box.types"

export const StyledBox = styled.div<StyleProps>`
  display: ${props => props.$display || "flex"};
  grid-template-columns: ${props =>
    props.$gridInterval ? `repeat(auto-fill, ${props.$gridInterval})` : null};
  flex-shrink: ${props => props.$shrink || null};
  flex-wrap: ${props => (props.$wrap ? "wrap" : null)};
  justify-content: ${props => props.$justify || "center"};
  align-items: ${props => props.$align || "start"};
  flex-direction: ${props => props.$direction || "row"};
  padding: ${props => props.$padding || (props.$wrapper ? "0px" : "12px")};
  margin: ${props => props.$margin || null};
  max-width: ${props => props.$maxWidth || "100vw"};
  width: ${props => props.$width || (props.$fullWidth ? "100%" : null)};
  height: ${props => props.$height || null};
  gap: ${props => props.$gap || "16px"};
  border: ${props => props.$border || "none"};
  border-top: ${props => props.$borderTop || null};
  border-right: ${props => props.$borderRight || null};
  border-bottom: ${props => props.$borderBottom || null};
  border-left: ${props => props.$borderLeft || null};
  border-radius: ${props => props.$borderRadius || "0px"};
  background: ${props => props.$background || "transparent"};
  overflow: ${props => props.$overflow || "hidden"};
  object-position: ${props => props.$objectPosition || null};
  position: ${props => props.$position || null};
  filter: ${props => props.$filter || "none"};

  &:hover {
    cursor: ${props => (props.$clickable ? "pointer" : null)};
  }
`
