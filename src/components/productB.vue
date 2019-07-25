<template>
<div id="product-list-B">
    <h3>Product B</h3>
    <ul>
     <li v-for="product in salesProducts" :key="product.Id">
         <span class="name">{{product.name}}</span>
         <span class="price">${{product.price}}</span>
     </li>
    </ul>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
    name: 'productB',

    computed: {
    products() {
        return this.$store.state.products
    },
    ...mapGetters ([
        'salesProducts'
    ])
    },
}
</script>
<style scoped>
#product-list-B {
    background: #b7b7ff;
    padding: 10px;
    width: 100%;
}
#product-list-B h3 {
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
