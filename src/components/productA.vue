<template>
<div id="product-list-A">
    <h3>Product A</h3>
    <ul>
     <li v-for="product in salesProducts" :key="product.Id">
         <span class="name">{{product.name}}</span>
         <span class="price">${{product.price}}</span>
     </li>
    </ul>
    <button @click="reducePrice(2)">Reduce</button>
</div>
</template>
<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
export default {


    name: 'productA',
    computed: {
        products() {
            return this.$store.state.products
        },
      //  salesProducts() {
       //     return this.$store.getters.salesProducts
       // }
       ...mapGetters ([
           'salesProducts'
       ])
    },
    methods: {
        ...mapActions ([
            'reducePrice'
        ])
    },
}
</script>
<style scoped>
#product-list-A {
    background: #f1f1f1;
    padding: 10px;
    width: 100%;
}
#product-list-A h3 {
    font-size: 20px;
}
ul li {
    background: white;
    width: 150px;
    height: 30px;
    margin: 3px 5px;
    padding: 5px 10px;
    cursor: pointer;
}
ul li:hover {
    background: #00ff40;
}
ul {
    display: flex;
}
</style>
