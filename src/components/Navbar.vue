<template>
  <nav class="container mx-auto px-4">
    <div class=" grid md:grid-cols-5 py-4 items-center">
      <div class="col-span-1">
        <RouterLink  to="/">
        <img :src="images.Logo" alt="">
        <img class="absolute top-0 left-1/4 md:block hidden" :src="images.Vector_8" alt="">
        <img class="absolute top-0 right-4 md:block hidden" :src="images.Vector_7" alt="">
    </RouterLink>
      </div>
      <button @click="handleOpen()" v-if="!isOpen" class="md:hidden block absolute top-6 right-12"> 
        <Font    class="text-2xl" icon="bars"/> 
    </button>
    <button @click="hanldeHidden()" v-else class="md:hidden block absolute top-6 right-12"> 
        <Font    class="text-2xl" icon=" fa-xmark"/> 
    </button>
    <div class="md:flex gap-12 md:mx-0 mx-auto  md:col-span-3">
    <ul class="md:mt-0 mt-4"  v-for="menu of menus" :key="menu.id">
        <li class="text-lg font-medium md:mb-0 mb-4">
            <RouterLink :to="menu.route">{{menu.listName}}</RouterLink>
        </li>
    </ul>
 </div>
    <div class="md:col-span-1 md:text-current text-center">
        <button class=" py-2 bg-black text-white px-5 hover:scale-95 transition-all">Contact Us <Font class="ml-3" icon="arrow-right"/></button>
       
    </div>

</div>
  </nav>
</template>

<script>
    import { RouterLink } from 'vue-router';
    import Logo from '../assets/logo.png';
    import Vector_8 from '../assets/vector 8.png';
    import Vector_7 from '../assets/vector 7.png';
export default {
    data(){
        return {
            images: {
                Logo,
                Vector_7,
                Vector_8
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
        },
        hanldeHidden(){
            this.isOpen = this.isOpen
        }
    }
}


</script>

<style>

</style>