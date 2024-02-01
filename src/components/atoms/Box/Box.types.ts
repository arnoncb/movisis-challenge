import { ReactNode } from "react"

export interface StyleProps {
  $display?: string
  $gridInterval?: string
  $border?: string
  $borderTop?: string
  $borderRight?: string
  $borderBottom?: string
  $borderLeft?: string
  $borderRadius?: string
  $padding?: string
  $margin?: string
  $width?: string
  $height?: string
  $maxWidth?: string
  $fullWidth?: boolean
  $gap?: string
  $wrap?: boolean
  $direction?: "column" | "row"
  $justify?: string
  $align?: string
  $background?: string
  $wrapper?: boolean
  $overflow?: string
  $filter?: string
  $position?: string
  $objectPosition?: string
  $shrink?: string
  $clickable?: boolean
}

export interface BoxProps extends StyleProps {
  children: ReactNode
  onClick?: () => void
}
