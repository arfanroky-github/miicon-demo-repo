<template>
  <div class="container mx-auto">
    <Navbar/>
    <Hero/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
export default {
    components: { Navbar, Hero }
}
</script>

<style>

</style>