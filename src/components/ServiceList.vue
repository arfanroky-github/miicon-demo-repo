<template>
      <div class=" md:h-[423.41px] md:w-[388.29px] p-14 border-2 border-[#E7E7E7] " style="box-shadow: inset -4px 0px 4px #EDEDED, inset 4px 0px 4px #EDEDED, inset 0px -4px 4px #EDEDED, inset 0px 4px 4px #EDEDED;">
        <img class="pb-3" :src="service.img" alt="">
        <h1 class=" font-bold text-[20px] pt-4">{{service.title}}</h1>
        <p class="pt-3 md:text-[20px] text-[16px]">{{service.text}}</p>
        <p class="pt-16 font-bold">Read More <Font icon="arrow-right" /></p>
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