<template>
  
    <div class="col">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title">{{service.title}}</h5>
                        <p class="card-text">{{service.text}}</p>
                        <button class="btn btn-link">Read More</button>
                    </div>
                </div>
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