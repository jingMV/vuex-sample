<template>
  <div id="app">
    <productA  />
    <productB  />
  </div>
</template>

<script>
import productA from './components/productA.vue'
import productB from './components/productB.vue'

export default {
  name: 'app',
  components: {
    productA,
    productB,
  },
  data() {
    return {

    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'open sans';
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
</style>
