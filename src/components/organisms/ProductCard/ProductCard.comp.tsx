import { useNavigate } from "react-router-dom"
import { Box } from "../../atoms/Box/Box.comp"
import { Image } from "../../atoms/Image/Image.comp"
import { ScreenText as Text } from "../../atoms/Text/Text.comp"
import { ProductCardTypes } from "./ProductCard.types"

export const ProductCard: React.FC<ProductCardTypes> = ({ product }) => {
  const formatPrice = (value: number) => {
    return `R$${value.toFixed(2).toString().replace(".", ",")}`
  }

  const getInstallments = (value: number) => {
    const installment = value / 10
    return `10x de ${formatPrice(installment)}`
  }

  const navigate = useNavigate()

  return (
    <Box
      $clickable
      $width="240px"
      $height="400px"
      $wrapper
      $border="1px solid var(--light-gray)"
      $borderRadius="12px"
      $background="var(--white)"
      $direction="column"
      $justify="space-between"
      $align="center"
      onClick={() => navigate(`/${product.id}`)}
    >
      <Box $wrapper $height="200px" $overflow="hidden" $align="end">
        <Image
          src={product.variant[0].image_front}
          $fit="cover"
          $maxWidth="200px"
          height="170%"
        ></Image>
      </Box>
      <Box $justify="start" $width="100%" $padding="20px">
        <Text $size="1.8rem" $weight={700}>
          {product.name}
        </Text>
      </Box>
      <Box
        $justify="start"
        $gap="0px"
        $direction="column"
        $background="var(--primary-color)"
        $fullWidth
        $padding="16px 16px 32px 16px"
      >
        <Text $size="2.8rem" $weight={700} $color="var(--white)">
          {formatPrice(product.price)}
        </Text>
        <Text $size="1.6rem" $weight={700} $color="var(--pale)">
          {getInstallments(product.price)}
        </Text>
      </Box>
    </Box>
  )
}
