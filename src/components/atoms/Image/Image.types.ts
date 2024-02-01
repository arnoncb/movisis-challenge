import { ReactNode } from "react"

export interface StyledProps {
  $fit?: string
  $maxWidth?: string
  height?: string
}

export interface ImageProps extends StyledProps {
  children?: ReactNode
  src: string
}
