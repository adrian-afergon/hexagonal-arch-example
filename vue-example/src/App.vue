<template>
  <Main msg="Welcome to Your Vue.js + TypeScript App"/>
  <ProductList />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Main from './infrastructure/components/Main.vue'
import ProductList from '@/infrastructure/components/ProductList.vue'

export default defineComponent({
  name: 'App',
  components: {
    Main,
    ProductList
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
