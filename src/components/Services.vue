<template>
    <main id="app">
      <section class="services">
        
        <div class="min-h-screen  w-full" style="background-color: #ECECEC">
          <h1 class="pt-10 text-5xl text-orange-400 text-center">Services <span class="text-stone-900">We Provide</span></h1>
          <p class="text-gray-700 text-center pt-4">We drive our clients’ growth through innovation and hard work</p>
         
            <div class="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-6 pt-8">
            <ServiceList v-for="service in services" :key="service.title" :service="service"  />
  
          </div>
      </div>
      </section>
    </main>
  </template>
  
  <script>
import ServiceList from './ServiceList.vue';
  
  export default {
    name: 'app',
    components: {  ServiceList },
    data() {
      return {
        services: [
          {
            icon: 'code',
            title: 'Web Development',
            text: "Get the customized, modern, browser- friendly, and pixel perfect web design with unique content ",
            
          },
          {
            icon:"arrow-up-right-from-square",
            title: 'Cross Platform Apps',
            text: "We create customized websites for reasonable rates to accommodate multiple devices.",
            
          },
          {
            icon:"desktop",
            title: 'Desktop Solutions',
            text: "We provide constant monitoringand repairing services to make your site active 24/7.",
            
          },
          {
            icon:"users-rectangle",
            title: 'UX & UI Design',
            text: "With our innovative ui-ux design,we guarantee your project'sup-to-date.",
            readme:""
          },
          {
            icon:"cart-flatbed",
            title: 'E- commerce',
            text: "Boost your website’s search engine visibility and get the organic targeted audience",
            
          },
          {
            icon:"industry",
            title: 'Affordable SEO',
            text: "Boost your website’s search enginevisibility and get the organictargeted audience",
            
          },
          
  
        ]
      }
    }
  }
  </script>
  
  <style>
    
  </style>