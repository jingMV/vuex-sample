import Vue from 'vue'
import Vuex from 'vuex'
import { isContext } from 'vm';

Vue.use(Vuex)

export const store = new Vuex.Store ({
    state: {
        products: [
            {name: 'apple',  price: 50},
            {name: 'orange',  price: 40},
            {name: 'banana',  price: 30},
            {name: 'mango',  price: 20},
            {name: 'pineapple',  price: 70},
          ]
    },
    getters: {
        salesProducts: state => {
            const salesProducts =  state.products.map(function(product) {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            });
            return salesProducts;
        }
    },
    mutations: {
        reducePrice: (state, amount) => {
            state.products.forEach(function(product) {
                return product.price -= amount
              })
        }
    },
    actions: {
        reducePrice: (context, amount) => {
            setTimeout(function() {
                context.commit('reducePrice', amount)
            }, 2000)
        }
    }
})