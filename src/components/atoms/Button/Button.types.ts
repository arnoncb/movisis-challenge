import { ReactNode } from "react"

export interface StyleProps {
  $borderRadius?: string
  $backgroundColor?: string
  $fontColor?: string
}

export interface ButtonProps extends StyleProps {
  children: ReactNode
}
