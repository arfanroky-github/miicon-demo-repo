<template>
  <footer class="w-full md:h-[500px] md:py-4 py-12 " style="background:#252525;">
   <div class="container mx-auto grid md:grid-cols-2 grid-cols-1 gap-4 items-center px-8 h-full relative">

    <div class="col-span-1 mr-auto">
        <img class="" :src="Brand_2" alt="">
        <p class="text-white py-5">Book your trip in minute, get full <br> control for much longer</p>



<ul class="flex -ml-4">
        <li v-for="social of socialData" :key="social.id" class="">
            <RouterLink :to="social.route">
                <img :src="social.icon_img" alt="">
            </RouterLink>
        </li>
    </ul>

    <p class=" absolute bottom-0 md:left-6 left-16 text-white ">Copyright, miicon 2022. All rights reserved.</p>
    </div>

   <div class="mb-16">
    <div class="grid grid-cols-3 md:gap-20 mx-auto py-12">
       <div>
        <h2 class="text-xl font-bold text-yellow-400 mb-4">Company</h2>
        <ul class="flex flex-col gap-y-3 text-white">
            <li>
                <RouterLink to="/about">About</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">Careers</RouterLink>
            </li>

            <li>
                <RouterLink to="/about">Logistic</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">Privacy & Policy</RouterLink>
            </li>

        </ul>
       </div>
       <div>
        <h2 class="text-xl font-bold text-yellow-400 mb-4">Contact</h2>
        <ul class="flex flex-col gap-y-3 text-white">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affilates</li>
        </ul>
       </div>
       <div>
        <h2 class="text-xl font-bold text-yellow-400 mb-4">More</h2>
        <ul class="flex flex-col gap-y-3 text-white">
            <li>Press Centre</li>
            <li>Our Blog</li>
        </ul>
       </div>
    </div>

   </div>
   <p class=" absolute md:bottom-0 md:right-24 bottom-28 right-16 text-white">Terms & Conditions</p>
   </div>
   
  </footer>
</template>

<script>
    import Brand_2 from '../assets/brand_2.png';
    import Facebook from '../assets/facebook.png';
    import Linkedin from '../assets/linkedin.png';
    import Twitter from '../assets/twitter.png';
    import Instagram from '../assets/instagram.png';
import Social from './Social.vue';

export default {
    data() {
        return {
            Brand_2,
            socialData: [
                { id: 1, icon_img: Facebook, route: "/" },
                { id: 2, icon_img: Linkedin, route: "/" },
                { id: 3, icon_img: Twitter, route: "/" },
                { id: 4, icon_img: Instagram, route: "/" },
            ]
        };
    },
    // components: { Social }
}
</script>

<style>

</style>