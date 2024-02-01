import { useQuery } from "react-query"
import { getProducts } from "../service"
import { ProductCard } from "../components/organisms/ProductCard/ProductCard.comp"
import { Box } from "../components/atoms/Box/Box.comp"
import { ScreenText as Text } from "../components/atoms/Text/Text.comp"
import { Filters } from "../components/organisms/Filters/Filters.comp"

export const Catalogue: React.FC = () => {
  const { data, isLoading, error } = useQuery("catalogue", getProducts)

  if (isLoading) {
    return (
      <div>
        <h1>Carregando</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <h1>Algo deu errado</h1>
      </div>
    )
  }

  return (
    <Box $wrapper $height="100%" $width="100%">
      <Filters />
      <Box $padding="60px 0px" $fullWidth>
        <Box $wrapper $direction="column">
          <Box>
            <Text $variant="title">Instrumentos</Text>
          </Box>
          <Box
            $display="grid"
            $gridInterval="240px"
            $wrap
            $gap="32px 24px"
            $maxWidth="1280px"
          >
            {data?.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
