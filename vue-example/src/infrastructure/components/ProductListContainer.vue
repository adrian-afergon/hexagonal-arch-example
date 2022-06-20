<template>
  <product-list :on-select-product="handleAddToCart" :products="products"/>
  <basket-details :basket="basket"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { productService } from '@/domain/services/Product.service'
import { Product } from '@/domain/models/Product'
import ProductList from '@/infrastructure/components/ProductList.vue'
import BasketDetails from '@/infrastructure/components/BasketDetails.vue'
import { Basket } from '@/domain/models/Basket'
import { basketService } from '@/domain/services/Basket.service'

type DataProps = {
  products: Product[];
  basket: Basket | null;
}

export default defineComponent({
  name: 'ProductListContainer',
  components: {
    ProductList,
    BasketDetails
  },
  data (): DataProps {
    return {
      products: [],
      basket: null
    }
  },
  methods: {
    handleAddToCart (product: Product) {
      this.basket = basketService.addProductToBasket(product, this.basket)
    }
  },
  mounted () {
    productService.getProducts().then(response => (this.products = response))
  }
})
</script>
