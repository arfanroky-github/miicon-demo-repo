<template>
  <section class="services">
    
    <div class="min-h-screen  w-full" style="background-color: #f8fafc">
      <h1 class="font-bold pt-10 md:text-5xl text-[30px] text-orange-300 text-center relative">Services <span class="text-stone-900">We Provide</span></h1>
      <img class="absolute md:top-6 top-8 md:left-[1170px] left-[380px] md:w-auto w-2" :src="Vector" alt="">
      <img class="absolute md:top-10 top-10 md:left-[1185px] left-[390px] md:w-auto w-4" :src="Vector1" alt="">
      <img class="absolute md:top-[75px] top-16 md:left-[1190px] left-[395px] md:w-auto w-2" :src="Vector2" alt="">
      <p class="text-gray-700 text-center pt-4">We drive our clients’ growth through innovation and hard work</p>
     
        <div class="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-6 pt-10">
        <ServiceList v-for="service in services" :key="service.title" :service="service"  />

      </div>
  </div>
  </section>
  </template>
  
  <script>
  import ServiceList from './ServiceList.vue';
  import Vector from '../image/vector.png';
  import Vector1 from '../image/vector1.png';
  import Vector2 from '../image/vector2.png'; 
  import Group1 from '../image/group1.png'; 
  import Group2 from '../image/group2.png'; 
  import Group3 from '../image/group3.png'; 
  import Group4 from '../image/group4.png'; 
  import Group5 from '../image/group5.png'; 
  import Group6 from '../image/group6.png'; 

  
  export default {
    name: 'app',
    components: {  ServiceList },
    data() {

      return {
        services: [
          {
            img: [Group1],
            title: 'Web Development',
            text: "Get the customized, modern, browser- friendly, and pixel perfect web design with unique content ",
            
          },
          {
            img: [Group2],
            title: 'Cross Platform Apps',
            text: "We create customized websites for reasonable rates to accommodate multiple devices.",
            
          },
          {
            img: [Group3],
            title: 'Desktop Solutions',
            text: "We provide constant monitoringand repairing services to make your site active 24/7.",
            
          },
          {
            img: [Group4],
            title: 'UX & UI Design',
            text: "With our innovative ui-ux design,we guarantee your project'sup-to-date.",
            readme:""
          },
          {
            img: [Group5],
            title: 'E- commerce',
            text: "Boost your website’s search engine visibility and get the organic targeted audience",
            
          },
          {
            img: [Group6],
            title: 'Affordable SEO',
            text: "Boost your website’s search enginevisibility and get the organictargeted audience",
            
          },
          
  
        ],
        Vector,
        Vector1,
        Vector2
      }
    }
  }
  </script>
  
  <style>
    
  </style>