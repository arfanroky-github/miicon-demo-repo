<template>
  <div class="container">
    <Navbar/>
    <Hero/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';
import Test from './components/Test.vue';
import Hero from './components/Hero.vue';
export default {
  name: 'app',
  components: { Navbar, Test, Hero },
  data() {
    return {

    }
  }
}
</script>

<style>
  
</style>