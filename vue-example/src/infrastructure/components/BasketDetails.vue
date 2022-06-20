<template>
  <p v-if="basket">Items on basket: {{basket.items.length}}</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Basket } from '@/domain/models/Basket'

export default defineComponent({
  name: 'BasketDetails',
  props: {
    basket: { type: Object as PropType<Basket|null> }
  }
})
</script>
