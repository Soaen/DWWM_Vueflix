<script setup>
import { defineProps, ref, onBeforeMount } from 'vue'
import { $fetch } from 'ohmyfetch'
import ShowActors from './ShowActors.vue'

const props = defineProps({
    filmsId: String,
    datas: Object
});

const filmGenre = ref('')
const isLoading = ref(true)
var hours = Math.floor(props.datas.runtime / 60);          
var minutes = props.datas.runtime % 60;

onBeforeMount(async () => {
    loadFilms()
});

const loadFilms = async () =>{
    filmGenre.value = await $fetch('http://localhost:3000/genres?id=' + props.datas.genreId)
    isLoading.value = false
}
</script>

<template>

    <div class="top-film" :style="{backgroundImage: 'url('+ props.datas.backdrop_path +')'}" v-if="!isLoading">
        <div class="background-coloration">

        <img :src="props.datas.poster_path" alt="" class="poster">
        
            <div class="infos-container">

                <h2>{{ props.datas.title }} ({{ new Date(props.datas.release_date).getFullYear() }})</h2>

                <p>{{ new Date(props.datas.release_date).toLocaleDateString('fr') }} - {{ filmGenre[0].name }} - {{ hours }}h{{ minutes }}</p>
                <div class="vote-average"
                    :class="{

                    'vote-green': Math.round(props.datas.vote_average * 10) >= 70,
                    'vote-orange': Math.round(props.datas.vote_average * 10) > 40 && Math.round(props.datas.vote_average * 10) < 70,
                    'vote-red': Math.round(props.datas.vote_average * 10) <= 40

                    }">
                    
                        <p>
                        {{ Math.round(props.datas.vote_average*10) }}%
                        </p>
                </div>
                <p class="tagline">{{ props.datas.tagline }}</p>
                <p class="text-overview-title">Synopsis</p>
                <p class="overview">{{ props.datas.overview }}</p>

            </div>

        </div>

    </div>

    <div class="showactors-container">

        <ShowActors :filmsId="props.datas.id"/>

    </div>

</template>

<style lang='scss' scoped>

.top-film{
    width: 100%;
    background-size:cover;
    box-shadow: inset 0 0 5px 2px #282a2d;
    height: 500px;
    .poster{
        height: 90%;
        margin-left: 20px;
        margin-top: 25px;
        border-radius: 10px;
    }
    .infos-container{
        display: flex;
        flex-direction: column;
        color: white;
        margin-left: 30px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        height: 100%;
        margin-top: 2.5%;
        row-gap: 10px;
        h2, p{
            margin: 0;
        }
        .tagline{
            font-style: italic;
        }
        .vote-green{
            border: green 2px solid;
        }
        .vote-orange{
            border: orange 2px solid;
        }
        .vote-red{
            border: red 2px solid;
        }

        .vote-average{
            display: flex;
            z-index: 10000;
            position: relative;
            margin-left: 10px;
            color: white;
            width: 50px;
            height: 50px;
            background-color: black;
            border-radius: 50%;
            justify-content: center;
            p{
                margin-top: 25%;
            }
        }
        .text-overview-title{
            font-weight: 600;
            font-size: 16px;
        }
        
    }
    .background-coloration{
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        display: flex;
    flex-direction: row;
    }
    .showactors-container{
        height: 100%;
    }
    .overview{
            overflow: hidden;
        }
}

</style>