<template>
  <div class="container">
    <Navbar/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';
import Test from './components/Test.vue';
export default {
  name: 'app',
  components: { Navbar, Test },
  data() {
    return {

    }
  }
}
</script>

<style>
  
</style>