import { createStore } from 'vuex'

export default createStore({
  strict:true,
  state: {
    products:[
      { name:'Banana Skin', price: 20,id: 1 },
      { name:'Shiny Star', price: 40, id: 2 },
      { name:'Green Shells', price: 60, id: 3 },
      { name:'Red Shells', price: 80, id:4 }
    ]
  },
  getters: {
    saleProducts: state =>{
  
        const saleProducts =  state.products.map(product=>{
          return{
            name: "** " + product.name + " **",
            price: "$"+product.price / 2
          }
        })
        return saleProducts
    }
  },
  mutations: {
    reducePrice: (state,payload) =>{
        state.products.forEach(product => {
          product.price -= payload
        });
    }
  },
  actions: {
    reducePrice: (context,payload) =>{
      setTimeout(function(){
        context.commit('reducePrice',payload)
      },2000)
    }
  },
  modules: {
  }
})

