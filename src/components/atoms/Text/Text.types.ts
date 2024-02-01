import { ReactNode } from "react"

export interface StyleProps {
  $weight?: number
  $color?: string
  $size?: string
}

export interface TextProps extends StyleProps {
  $variant?: string
  children: ReactNode
}
