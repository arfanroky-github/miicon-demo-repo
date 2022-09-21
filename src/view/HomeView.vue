<template>
  <div class="container mx-auto w-full relative md:h-[90vh]">
    <Navbar/>
    <Hero/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
export default {
    components: { Navbar, Hero,  },
   
}
</script>

<style>

</style>