<template>
    <div class=" mx-auto  h-[423.41px] w-[388.29px]" style="box-shadow: 0 4px 4px #EDEDED; background: linear-gradient(#E7E7E7, #FFFFFF);">
        <Font class="pt-10 px-10 h-[71.86px] w-[74.38]" :icon="service?.icon"/>
        <h1 class="text-2xl pt-6 px-10">{{service.title}}</h1>
        <p class="pt-8 px-10">{{service.text}}</p>
        <p class="pt-16 px-10 pb-10">Read More <Font icon="arrow-right" /></p>
    </div>
</template>

<script>
export default {
    name: 'service',
    props: ['service']
}

</script>

<style>

</style>