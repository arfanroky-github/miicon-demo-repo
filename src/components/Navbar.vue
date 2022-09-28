<template>
<header class="w-full h-auto relative py-4">
    <nav class="container mx-auto px-8 ">
    <div class=" grid md:grid-cols-7 grid-cols-1 py-4 items-center">
        <!-- LOGO -->
      <div class="col-span-1 mr-auto">
        <RouterLink  to="/">
        <img :src="images.Logo" alt="">
       
    </RouterLink>
      </div>

      <!-- OPEN BUTTON -->
      <button @click="handleOpen()" v-if="!isOpen" class="md:hidden block absolute top-10 right-12"> 
        <Font    class="text-2xl" icon="bars"/> 
    </button>
    <!-- CLOSE BUTTON -->
    <button @click="hanldeHidden()" v-else class="md:hidden block absolute top-10 right-12"> 
        <Font    class="text-2xl" icon=" fa-xmark"/> 
    </button>
    <!-- NAV MENUS -->
    <div :class="[!isOpen ? 'hidden': 'block']" class="md:col-span-5 md:flex justify-center gap-8 h-auto md:mt-0 mt-6 bg-white w-full pl-4 z-10">
    <ul class="md:mt-0 mt-4"  v-for="menu of menus" :key="menu.id">
        <li class="text-lg font-medium md:mb-0 mb-4">
            <RouterLink :to="menu.route">{{menu.listName}}</RouterLink>
        </li>
    </ul>
 </div>
 
    <div  class="md:col-span-1 md:ml-auto md:pl-0 pl-4">
        <button :class="[!isOpen ? 'hidden': 'block']" class=" py-5 px-12 bg-black text-white hover:scale-95 transition-all">Contact Us <Font class="ml-3" icon="arrow-right"/></button>

    </div>

</div>
<img class="absolute top-0 right-0 md:block hidden w-[200px]" :src="images.Vector_7" alt="">
<img class="absolute top-0 left-[100px] md:hidden block" :src="images.Vector_8" alt="">

<img class=" absolute top-0 left-[430px] md:block hidden" :src="images.Vector_10" alt="">
  </nav>
</header>
</template>

<script >
    import { RouterLink } from 'vue-router';
    import Logo from '../assets/logo.png';
    import Vector_7 from '../assets/vector 7.png';
    import Vector_8 from '../assets/vector 8.png';
    import Vector_10 from '../assets/vector 10.png';

  
export default {
    data(){
        return {
            images: {
                Logo,
                Vector_7,
                Vector_8,
                Vector_10
            },

            menus:[
                {id:1, listName: 'Home', route: '/'},
                {id:2, listName: 'Website Package', route: '/website-package'},
                {id:3, listName: 'App Package', route: '/app-package'},
                {id:4, listName: 'SEO Package', route: '/seo-package'},
                {id:5, listName: 'Our Work', route: '/our-work'},
                {id:6, listName: 'About', route: '/about'},
                {id:7, listName: 'Blogs', route: '/blogs'},
            ],
            isOpen: false,
            isHidden: false,
            
        }
    },
    methods:{
        handleOpen(){
            this.isOpen = !this.isOpen;
            console.log('open',this.isOpen);
        },
        hanldeHidden(){
            this.isOpen = !this.isOpen
            console.log('hidden',this.isOpen);
        }
    }
}


// console.log('isopen', isOpen);
</script>

<style>

</style>