import { Box } from "../components/atoms/Box/Box.comp"
import { ScreenText as Text } from "../components/atoms/Text/Text.comp"

export const Home: React.FC = () => {
  return (
    <Box
      $background="linear-gradient(141deg, #970024 0%, #e34623 100%);"
      $padding="80px"
    >
      <Text>E aí, qual vai ser?</Text>
    </Box>
  )
}
