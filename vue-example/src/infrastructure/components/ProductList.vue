<template>
  <ul>
    <li v-for="product in products " :key="product.id"> {{ product.title }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getProducts } from '@/domain/repositories/product.repository'
import { Product } from '@/domain/models/Product'

export default defineComponent({
  name: 'ProductList',
  data () {
    return {
      products: [] as Product[]
    }
  },
  mounted () {
    getProducts().then(response => (this.products = response))
  }
})
</script>
