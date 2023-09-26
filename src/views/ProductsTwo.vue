<template>
  <h1> Products Two </h1>
  <h2> . </h2>
  <ul v-for="product in saleProducts" :key="product.id">
    <li>
        <span class="name"> {{ product.name }} </span> &nbsp;
        <span class="price"> {{ product.price }} </span>
    </li>
  </ul>
  <button @click="reducePrice(4)" > reduce price </button>
</template>

<script>
import { mapActions,mapGetters } from "vuex"
export default {
  computed:{
    products(){
      return this.$store.state.products;
    },
    // saleProducts(){
    //   return this.$store.getters.saleProducts;
    // }
    ...mapGetters(['saleProducts'])
  },
  methods:{
    // reducePrice: function(amount){
      
    //   return this.$store.dispatch('reducePrice',amount)
    // },
    ...mapActions(['reducePrice'])
  }
}
</script>

<style>

</style>