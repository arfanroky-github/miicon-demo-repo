<template>
  <main id="app">
    <section class="services">
      
      <div class="container">
        <div class="text-center">
          <span>Services We Provide</span>
          <p>We drive our clients’ growth through innovation and hard work</p>
        </div>
       
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <Services v-for="service in services" :key="service.title" :service="service" />

        </div>
    </div>
    </section>
  </main>
</template>

<script>
import Services from './components/Services.vue'
export default {
  name: 'app',
  components: { Services },
  data() {
    return {
      services: [
        {
          icon: "",
          title: 'Web Development',
          text: "Get the customized, modern, browser- friendly, and pixel perfect web design with unique content ",
          readme: ""
        },
        {
          icon:"",
          title: 'Cross Platform Apps',
          text: "We create customized websites for reasonable rates to accommodate multiple devices.",
          readme:""
        },
        {
          icon:"",
          title: 'Desktop Solutions',
          text: "We provide constant monitoringand repairing services to make your site active 24/7.",
          readme:""
        },
        {
          icon:"",
          title: 'UX & UI Design',
          text: "With our innovative ui-ux design,we guarantee your project'sup-to-date.",
          readme:""
        },
        {
          icon:"",
          title: 'Affordable SEO',
          text: "Boost your website’s search enginevisibility and get the organictargeted audience",
          readme:""
        },
        {
          icon:"",
          title: 'E- commerce',
          text: "Boost your website’s search engine visibility and get the organic targeted audience",
          readme:""
        },

      ]
    }
  }
}
</script>

<style>
  
</style>