<template>
    <HomeView/>
    <Contact/>
    <Footer/>
</template>

<script>


import HomeView from './view/HomeView.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'app',
  components: { HomeView, Contact, Footer },
  data() {
    return {

    }
  }
}
</script>

<style>
  
</style>