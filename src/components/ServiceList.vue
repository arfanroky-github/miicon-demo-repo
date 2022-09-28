<template>
    <div class=" mx-auto  h-[423.41px] w-[388.29px] p-14 border-4 border-pink-100     " style="box-shadow: 0 4px 4px #E7E7E7 ,0 -4px 4px #E7E7E7,inset 4 0px 4px #E7E7E7 ,inset -4 0px 4px #E7E7E7; background: linear-gradient(#f8fafc, #f8fafc);">
        <img class="pb-3" :src="service.img" alt="">
        <h1 class=" font-bold text-xl pt-4">{{service.title}}</h1>
        <p class="pt-3">{{service.text}}</p>
        <p class="pt-16">Read More <Font icon="arrow-right" /></p>
    </div>
</template>

<script>
export default {
    name: 'service',
    props: ['service'],

    data(){
        return {
        }
    }
}

</script>

<style>

</style>