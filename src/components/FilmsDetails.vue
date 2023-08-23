<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import { $fetch } from 'ohmyfetch'
import { useRoute } from 'vue-router';
import ShowActors from './ShowActors.vue'

const filmGenre = ref('')
const filmDatas = ref([])
const isLoading = ref(true)
var hours = Math.floor(filmDatas.value.runtime / 60);          
var minutes = filmDatas.value.runtime % 60;



onBeforeMount(() => {
    setTimeout(async()=> {
        filmId.value = route.params.id;
        await loadFilms(filmId.value);

        hours = Math.floor(filmDatas.value[0].runtime / 60);
        minutes = filmDatas.value[0].runtime % 60;

        isLoading.value = false;
    }, 100)

});
const loadFilms = async (e) =>{
    filmDatas.value = await $fetch('http://localhost:3000/movies?id=' + e)
    filmGenre.value = await $fetch('http://localhost:3000/genres?id=' + filmDatas.value[0].genreId)
    isLoading.value = false

}

const route = useRoute();
const filmId = ref(route.params.id);




</script>

<template>


    <p>{{filmDatas[0].adult}}</p>


    <!-- <div class="top-film" :style="{backgroundImage: 'url('+ filmDatas[0].backdrop_path +')'}" v-if="!isLoading">
        <div class="background-coloration">

        <img :src="filmDatas[0].poster_path" alt="" class="poster">
        
            <div class="infos-container">

                <h2>{{ filmDatas[0].title }} ({{ new Date(filmDatas[0].release_date).getFullYear() }})</h2>

                <p>{{ new Date(filmDatas[0].release_date).toLocaleDateString('fr') }} - - {{ hours }}h{{ minutes }}</p>
                <div class="vote-average"
                    :class="{

                    'vote-green': Math.round(filmDatas[0].vote_average * 10) >= 70,
                    'vote-orange': Math.round(filmDatas[0].vote_average * 10) > 40 && Math.round(filmDatas[0].vote_average * 10) < 70,
                    'vote-red': Math.round(filmDatas[0].vote_average * 10) <= 40

                    }">
                    
                        <p>
                        {{ Math.round(filmDatas[0].vote_average*10) }}%
                        </p>
                </div>
                <p class="tagline">{{ filmDatas[0].tagline }}</p>
                <p class="text-overview-title">Synopsis</p>
                <p>{{ filmId }}</p>
                <p class="overview">{{ filmDatas[0].overview }}</p>

            </div>

        </div>

    </div>

    <div class="showactors-container">

        <ShowActors :filmsId="filmDatas[0].id"/>

    </div> -->

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