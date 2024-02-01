import { Box } from "../../atoms/Box/Box.comp"
import { Image } from "../../atoms/Image/Image.comp"
import Logo from "../../../assets/logo.svg"
import { Navbar } from "../../molecules/Navbar/Navbar.comp"

export const Header: React.FC = () => {
  return (
    <Box
      $padding="16px"
      $fullWidth
      $filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.1))"
      $background="var(--white)"
    >
      <Box $wrapper $maxWidth="1280px" $justify="space-between" $fullWidth>
        <Box $wrapper $gap="32px" $align="center">
          <Image src={Logo} />
          <Navbar />
        </Box>
        <Box $wrapper>Cart</Box>
      </Box>
    </Box>
  )
}
