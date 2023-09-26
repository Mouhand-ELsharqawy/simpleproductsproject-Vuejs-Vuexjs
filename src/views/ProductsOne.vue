<template>
  <h1>Products One  </h1>
  <h2>.</h2>
  <ul v-for="product in products" :key="product.id">
    <li>
        <span class="name"> {{ product.name }} </span>
        <span class="price"> {{ product.price }} </span>
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
export default {
    computed:{
      products(){
        return this.$store.state.products;
      }
    }
}
</script>

<style>

</style>