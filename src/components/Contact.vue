<template>
  <div class="w-full md:h-[800px] py-12" style="background: #FFC85A">
    <div class="container mx-auto grid md:grid-cols-2 grid-cols-1 gap-6 h-full md:justify-self-stretch justify-self-center items-center px-8">
        <div class="col-span-1 md:mx-0 mx-auto">
            <p class="text-sm font-bold pb-12">_______CONTACT</p>
            <h1 class="md:text-8xl text-5xl tracking-wider font-bold mb-5 ">Let's get in touch</h1>
            <p class="leading-8 text-lg">Have a ground breaking startup/business idea but don't <br class="md:block hidden"> know where to start? We'll give you all the support you need.</p>

        </div>
        <form class="col-span-1 mx-auto">
            <input class=" block outline-none bg-transparent py-4  pr-12 my-8 border-b-2 border-black placeholder:text-black md:w-[400px] w-full" name="name" type="text" placeholder="Name">
            <input class=" block outline-none bg-transparent py-4  pr-12 my-8 border-b-2 border-black placeholder:text-black md:w-[400px] w-full" name="email" type="email" placeholder="Email">
           <div class="flex flex-col my-8">
            <label for="Email-Body">Email Body</label>
            <textarea class="resize-none bg-transparent border-b-2 border-black md:w-[400px] w-full" name="email body" cols="30" rows="5"></textarea>
           </div>
           <button type="submit" class="md:w-[400px] w-full py-4 px-16 mt-8 bg-black text-white font-semibold ">
            Send <Font class="ml-4" icon="arrow-right"/>
           </button>
        </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>