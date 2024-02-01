enum ProductCategory {
  acoustic,
  electric,
  bass,
}

interface ProductVariant {
  id: string
  name: string
  item_id: string
  image_back: string
  image_front: string
  accent_color: string
  complementary_color: string
}

interface ProductSpecification {
  id: string
  item_id: string
  body_wood: string
  neck_wood: string
  fingerboard_material: string
}

export interface Product {
  id: string
  created_at: Date
  price: number
  name: string
  description: string
  category: ProductCategory
  variant: ProductVariant[]
  specification: ProductSpecification[]
}
