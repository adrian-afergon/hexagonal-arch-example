import {ProductsPage as Product} from '../src/infrastructure/components/ProductsPage'
import {productService} from "../src/domain/services/Product.service";

// @ts-ignore
export async function getServerSideProps({ _, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const products = await productService.getProducts()

  return { props: { products }}
}

export default Product