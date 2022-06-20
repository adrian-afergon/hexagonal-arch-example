<template>
  <ul>
    <li v-for="product in products " :key="product.id">
      <button @click="() => { onSelectProduct(product) }">{{ product.title }}</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { Product } from '@/domain/models/Product'

export default defineComponent({
  name: 'ProductList',
  props: {
    products: { type: Array as PropType<Product[]> },
    onSelectProduct: { type: Function }
  }
})
</script>
