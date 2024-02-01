import styled from "styled-components"
import { StyleProps, TextProps } from "./Text.types"

const StyledDisplay = styled.span<StyleProps>`
  font-size: ${props => props.$size || "2.4rem"};
  color: ${props => props.$color || "var(--black)"};
  font-weight: ${props => props.$weight || 600};
  letter-spacing: -0.1rem;
`
const StyledParagraph = styled.p<StyleProps>`
  font-size: ${props => props.$size || "1.6rem"};
  color: ${props => props.$color || "var(--black)"};
  font-weight: ${props => props.$weight || 600};
`
const StyledTitle = styled.h1<StyleProps>`
  font-size: ${props => props.$size || "3.6rem"};
  color: ${props => props.$color || "var(--black)"};
  font-weight: ${props => props.$weight || 700};
  letter-spacing: -0.15rem;
`
const StyledSubtitle = styled.h2<StyleProps>`
  font-size: ${props => props.$size || "3.6rem"};
  color: ${props => props.$color || "var(--black)"};
  font-weight: ${props => props.$weight || 700};
  letter-spacing: -0.1rem;
`
export const StyledText = (props: TextProps) => {
  switch (props.$variant) {
    case "paragraph":
      return <StyledParagraph {...props} />
    case "title":
      return <StyledTitle {...props} />
    case "subtitle":
      return <StyledSubtitle {...props} />
    default:
      return <StyledDisplay {...props} />
  }
}
