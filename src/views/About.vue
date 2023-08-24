<script setup>

    import Card from '../components/Card.vue'

    document.title = "VueFlix | A Propos" 

</script>

<template>
    <div>
        <h1>A propos</h1>
        <div class="showdev-container">

            <Card/>

        </div>

    </div>
</template>

<style scoped>

    h1{
        text-align: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    

    .showdev-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    

</style>