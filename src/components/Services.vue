<template>
  <section class="min-h-screen  py-12 mt-12 w-full relative" style="background-color: #F8FAFC">
   <div class="container mx-auto px-8">
    <h1 class=" font-bold md:text-5xl text-3xl md:text-center text-orange-300">Services <span class="text-stone-900">We Provide</span></h1>
    <p class="text-gray-700 md:text-center text-xl pt-6">We drive our clients’ growth through innovation and hard work</p>
    <img class=" absolute md:right-[690px] top-6 right-[170px]  md:block hidden" :src="Vector" alt="">
    <img class=" absolute md:right-[660px] top-[44px] right-[140px]  md:block hidden" :src="Vector1" alt="">
    <img class=" absolute md:right-[670px] top-20 right-[150px]  md:block hidden" :src="Vector2" alt="">
   
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[18px] gap-y-[28px] py-10">
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