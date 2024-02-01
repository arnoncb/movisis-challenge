import { Link } from "react-router-dom"
import { ScreenText as Text } from "../../atoms/Text/Text.comp"
import { Box } from "../../atoms/Box/Box.comp"

export const Navbar: React.FC = () => {
  return (
    <Box $wrapper $gap="24px">
      <Link to="/">
        <Text $size="1.6rem" $weight={700}>
          INÍCIO
        </Text>
      </Link>
      <Link to="/instrumentos">
        <Text $size="1.6rem" $weight={700}>
          INSTRUMENTOS
        </Text>
      </Link>
    </Box>
  )
}
