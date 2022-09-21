<template>
  <section class="container mx-auto px-6 relative ">
 <div class="grid md:grid-cols-2 grid-cols-1 gap-4 justify-between items-center md:h-[80vh] pt-32">
   <!-- Content -->
   <div>
        <img class="md:wfull w-[200px]" :src="images.Brand" :alt="images.Brand">

        <h3 class="text-xl font-semibold my-3">Start your <span class=" text-yellow-400">software Business-Startup<br class="md:hidden block">-Ideas</span> with us!</h3>
        <p class="md:pb-0 pb-4">Have a ground breaking startup/business ideas but don't <br class="md:hidden block"> know where to start? We'll give you <br class="md:block hidden"> all the support you <br class="md:hidden block"> need.</p>
        <ul class="grid grid-cols-2 gap-2 mt-3 md:w-1/2 w-[380px]" >
            
            <li> <Font class="text-yellow-400  mr-3" icon="check"/> Website</li>
            <li> <Font class="text-yellow-400  mr-3" icon="check"/> SEO</li>
            <li> <Font class="text-yellow-400  mr-3" icon="check"/> Mobbile Apps</li>
            <li> <Font class="text-yellow-400  mr-3" icon="check"/> Branding</li>
            <li> <Font class="text-yellow-400  mr-3" icon="check"/> Desktop Softwares</li>
            <li> <Font class="text-yellow-400  mr-3" icon="check"/> UI & UX</li>
        </ul>
        <button class=" py-5 px-20 md:mt-6 mt-24 bg-black text-white hover:scale-95 transition-all">Let Talk <Font class="ml-3" icon="arrow-right"/></button>
    </div>
    <div class=" ml-auto md:block hidden">
        <img class="w-[80%] mr-8" :src="images.Banner" :alt="images.Banner">
    </div>
 </div>
  </section>
  <!-- Positioning image -->
  <img class=" absolute md:top-[520px] md:left-[500px] md:w-[280px] top-[390px] right-4 w-[150px]" :src="images.Vector_1" alt="">
  <img class=" absolute md:top-1/2 md:left-[530px] md:w-[120px] w-[130px] top-[490px] right-6" :src="images.Vector_2" alt="">
  <img class="absolute top-[120px] right-[300px] w-[140px] md:block hidden" :src="images.Vector_3" alt="">
  <img class=" absolute md:top-[115px]  md:left-[800px] -top-8 left-16" :src="images.Vector_4" alt="">
  <img class=" absolute top-[430px] right-4 md:inline-block hidden" :src="images.Vector_5" alt="">
  <img class=" absolute bottom-0 right-80 w-[300px] md:inline-block hidden" :src="images.Vector_6" alt="">
  <img class=" absolute top-0 left-24 md:hidden inline-block" :src="images.Vector_8" alt="">
  <img class=" absolute bottom-0 left-0 md:inline-block hidden" :src="images.Vector_9" alt="">
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
    import Vector_8 from '../assets/vector 8.png';
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
                Vector_8,
                Vector_9
            },
           
        }
    }
}
</script>

<style>

</style>