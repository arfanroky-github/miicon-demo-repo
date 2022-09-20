<template>
  <section class="container mx-auto px-4 relative ">
 <div class="grid md:grid-cols-2 grid-cols-1 gap-4 justify-between items-center h-[80vh]">
   <!-- Content -->
   <div>
        <img :src="images.Brand" :alt="images.Brand">

        <h3 class="text-xl font-semibold my-3">Start your <span class=" text-yellow-400">software Business-Startup-Ideas</span> with us!</h3>
        <p>Have a ground breaking startup/business ideas but don't know where to start? We'll give you <br> all the support you need.</p>
        <ul class="grid grid-cols-2 gap-2 mt-3 w-1/2" >
            
            <li> <Font class="text-yellow-400  mr-3" icon="check"/> Website</li>
            <li> <Font class="text-yellow-400  mr-3" icon="check"/> SEO</li>
            <li> <Font class="text-yellow-400  mr-3" icon="check"/> Mobbile Apps</li>
            <li> <Font class="text-yellow-400  mr-3" icon="check"/> Branding</li>
            <li> <Font class="text-yellow-400  mr-3" icon="check"/> Desktop Softwares</li>
            <li> <Font class="text-yellow-400  mr-3" icon="check"/> UI & UX</li>
        </ul>
        <button class=" py-5 px-20 mt-6 bg-black text-white hover:scale-95 transition-all">Let Talk <Font class="ml-3" icon="arrow-right"/></button>
    </div>
    <div class=" ml-auto">
        <img class="w-[80%] mr-8" :src="images.Banner" :alt="images.Banner">
    </div>
 </div>
  </section>
  <!-- Positioning image -->
  <img class=" absolute top-[500px] left-[500px] w-[280px]" :src="images.Vector_1" alt="">
  <img class=" absolute top-1/2 left-1/4 w-[120px]" :src="images.Vector_2" alt="">
  <img class="absolute top-[120px] right-[300px] w-[140px]" :src="images.Vector_3" alt="">
  <img class=" absolute md:top-[115px]  md:left-[800px]" :src="images.Vector_4" alt="">
  <img class=" absolute top-[430px] right-4" :src="images.Vector_5" alt="">
  <img class=" absolute bottom-0 right-80 w-[300px]" :src="images.Vector_6" alt="">
  <img class=" absolute bottom-0 left-0" :src="images.Vector_9" alt="">
</template>

<script>
    import Brand from '../assets/brand.png';
    import Banner from '../assets/banner.png';
    import Vector_1 from '../assets/vector 1.png';
    import Vector_2 from '../assets/vector 2.png'
    import Vector_3 from '../assets/vector 3.png';
    import Vector_4 from '../assets/vector 4.png';
    import Vector_5 from '../assets/vector 5.png';
    import Vector_6 from '../assets/vector 6.png';
    import Vector_9 from '../assets/vector 9.png';
   
export default {
    data(){
        return{
            images:{
                Brand,
                Banner,
                Vector_1,
                Vector_2,
                Vector_3,
                Vector_4,
                Vector_5,
                Vector_6,
                Vector_9
            },
           
        }
    }
}
</script>

<style>

</style>