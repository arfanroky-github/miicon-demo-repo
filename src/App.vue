<template>
    <Navbar/>
    <Hero/>
    <Services/>
    <Contact/>
    <Footer/>
</template>

<script>

import Services from './components/Services.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
export default {
  name: 'app',
  components: {  Contact, Footer, Services, Navbar, Hero },
  }

  </script>


