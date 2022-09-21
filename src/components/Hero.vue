<template>
  <section class="container mx-auto px-6  ">
 <div class="grid md:grid-cols-2 grid-cols-1 gap-4 justify-between items-center pt-32">
   <!-- Content -->
   <div >
        <img class="md:w-auto w-[200px]" :src="images.Brand" :alt="images.Brand">

        <h3 class="md:text-2xl text-xl font-semibold my-3">Start your <span class=" text-yellow-400">software Business-Startup<br class="md:hidden block">-Ideas</span> with us!</h3>
        <p class="md:pb-0 pb-4">Have a ground breaking startup/business ideas but don't <br class="md:hidden block"> know where to start? We'll give you <br class="md:block hidden"> all the support you <br class="md:hidden block"> need.</p>
        <ul class="grid grid-cols-2 gap-2 mt-3 md:w-1/2 w-[320px]" >
            
            <li class="md:text-md text-sm"> <Font class="text-yellow-400  md:mr-3 mr-1" icon="check"/> Website</li>
            <li class="md:text-md text-sm"> <Font class="text-yellow-400  md:mr-3 mr-1" icon="check"/> SEO</li>
            <li class="md:text-md text-sm"> <Font class="text-yellow-400  md:mr-3 mr-1" icon="check"/> Mobbile Apps</li>
            <li class="md:text-md text-sm"> <Font class="text-yellow-400  md:mr-3 mr-1" icon="check"/> Branding</li>
            <li class="md:text-md text-sm"> <Font class="text-yellow-400  md:mr-3 mr-1" icon="check"/> Desktop Softwares</li>
            <li class="md:text-md text-sm"> <Font class="text-yellow-400  md:mr-3 mr-1" icon="check"/> UI & UX</li>
        </ul>
        <button class=" py-5  px-16 font-semibold rounded md:mt-6 mt-24 bg-black text-white hover:scale-95 transition-all">Let Talk <Font class="ml-3" icon="arrow-right"/></button>

    </div>
    <div class=" ml-auto md:block hidden">
        <img class="w-[80%] mr-8" :src="images.Banner" :alt="images.Banner">
    </div>
 </div>
 <!-- Positioning image -->
 
 <img class=" absolute md:top-[520px] md:left-[280px] md:w-[280px] top-[440px] right-0 w-[120px] " :src="images.Vector_1" alt="" >
 <img class=" absolute md:top-[45%] md:left-[290px] md:w-[140px] w-[130px] top-[540px] right-0" :src="images.Vector_2" alt="">
 <img class="absolute top-[160px] right-[140px] w-[140px] md:block hidden" :src="images.Vector_3" alt="">
 <img :class="[!isOpen ? 'block' : 'hidden']" class=" absolute md:top-[115px] md:left-[700px] -top-8 left-16" :src="images.Vector_4" alt="">
 <img class=" absolute top-[430px] -right-48 md:inline-block hidden" :src="images.Vector_5" alt="">
 <img class=" absolute bottom-0 right-40 w-[300px] md:inline-block hidden" :src="images.Vector_6" alt="">
 <img class="absolute top-0 -right-48 md:block hidden w-[200px]" :src="images.Vector_7" alt="">
 <img class=" absolute bottom-0 -left-48 md:inline-block hidden" :src="images.Vector_9" alt="">
 <img class=" absolute top-0 left-[170px] md:block hidden" :src="images.Vector_10" alt="">
  </section>
</template>

<script>
    // console.log(isOpen);
    import Brand from '../assets/brand.png';
    import Banner from '../assets/banner.png';
    import Vector_1 from '../assets/vector 1.png';
    import Vector_2 from '../assets/vector 2.png'
    import Vector_3 from '../assets/vector 3.png';
    import Vector_4 from '../assets/vector 4.png';
    import Vector_5 from '../assets/vector 5.png';
    import Vector_6 from '../assets/vector 6.png';
    import Vector_7 from '../assets/vector 7.png';
    import Vector_9 from '../assets/vector 9.png';
    import Vector_10 from '../assets/vector 10.png';
import { log } from 'debug/src/browser';
import { ref } from '@vue/reactivity';
   
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
                Vector_7,
                Vector_9,
                Vector_10
            },
            
        }
    },
    // isOpen,
}


</script>

<style>

</style>