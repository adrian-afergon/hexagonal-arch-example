<template>
  <ul>
    <li v-for="product in products " :key="product.id">
      <button @click="() => { onSelectProduct(product) }">{{ product.title }}</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getProducts } from '@/domain/services/Product.service'
import { Product } from '@/domain/models/Product'

type DataProps = {
  products: Product[];
}

export default defineComponent({
  name: 'ProductList',
  props: {
    onSelectProduct: { type: Function }
  },
  data (): DataProps {
    return {
      products: []
    }
  },
  mounted () {
    getProducts().then(response => (this.products = response))
  }
})
</script>
