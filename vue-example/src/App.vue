<template>
  <Main msg="Welcome to Your Vue.js + TypeScript App"/>
  <ProductListContainer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Main from './infrastructure/components/Main.vue'
import ProductListContainer from '@/infrastructure/components/ProductListContainer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Main,
    ProductListContainer
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
