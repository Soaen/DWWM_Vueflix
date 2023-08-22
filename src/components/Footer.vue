<script setup>
import { ref } from 'vue';


const url = 'http://localhost:3000'
const nbFilmsTotal = ref(0)

fetch(url + '/movies')
    .then(response => response.json())
    .then(function(response){
        nbFilmsTotal.value = response.length
    }
)

</script>

<template>

    <footer>

        <div class="border-top"></div>


        <p>Copyright © 2023. Catalogue de <span class="film-total">{{ nbFilmsTotal }}</span> films.</p>

    </footer>
    

</template>


<style scoped>

    footer{
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        margin-top: 20px;
    }

    .border-top{
        width: 70%;
        margin-left: 15%;
        border-top: 1px gray solid;
    }

    .film-total{
        font-weight: bold;
    }

</style>