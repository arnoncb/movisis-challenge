import styled from "styled-components"
import { StyledProps } from "./Input.types"

export const StyledInput = styled.input<StyledProps>`
  position: relative;
  width: ${props => props.$width || "100%"};
  height: ${props => props.$height || "48px"};
  padding: 16px;
  border: 1px solid var(--light-gray);
  border-radius: 6px;
  font-size: 1.6rem;
  font-family: Inter, sans-serif;
  font-weight: 600;
  letter-spacing: -0.1rem;
`
