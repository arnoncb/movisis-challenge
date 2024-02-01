import { Box } from "../../atoms/Box/Box.comp"
import { Input } from "../../atoms/Input/Input.comp"
import { ScreenText as Text } from "../../atoms/Text/Text.comp"

export const Filters: React.FC = () => {
  return (
    <Box
      $shrink="0"
      $position="relative"
      $padding="72px 32px"
      $direction="column"
      $width="360px"
      $gap="24px"
      $justify="start"
      $align="stretch"
      $borderRight="1px solid var(--light-gray)"
    >
      <Box $wrapper $direction="column" $gap="12px" $width="100%">
        <Box $padding="0 0 0 16px">
          <Text $size="1.6rem">Nome</Text>
        </Box>
        <Input $width="100%" />
      </Box>
      <Box $wrapper $direction="column" $gap="12px">
        <Box $padding="0 0 0 16px">
          <Text $size="1.6rem">Preço</Text>
        </Box>
        <Box $wrapper $gap="12px">
          <Input />
          <Input />
        </Box>
      </Box>

      <Box $wrapper $direction="column" $gap="12px">
        <Box $padding="0 0 0 16px">
          <Text $size="1.6rem">Data de adição</Text>
        </Box>
        <Box $wrapper $gap="12px">
          <Input />
          <Input />
        </Box>
      </Box>
    </Box>
  )
}
