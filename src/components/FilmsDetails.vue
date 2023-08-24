<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import ShowActors from './ShowActors.vue'
import Modal from './Modal.vue'

import { getMovie } from '../api'

const showModal = ref(false)
const filmDatas = ref({})
const isLoading = ref(true)

let hours   
let minutes

const route = useRoute()

setTimeout(() => {
    getMovie(route.params.id).then(reponse => {
    filmDatas.value = reponse
    hours = Math.floor(filmDatas.value.runtime / 60);        
    minutes = filmDatas.value.runtime % 60;
    isLoading.value = false
})
}, 100)





// onBeforeMount(() => {
//     setTimeout(async()=> {
//         filmId.value = route.params.id;
//         await loadFilms(filmId.value);

//         hours = Math.floor(filmDatas.value[0].runtime / 60);
//         minutes = filmDatas.value[0].runtime % 60;

//         isLoading.value = false;
//     }, 100)

// });
// const loadFilms = async (e) =>{
//     filmDatas.value = await $fetch('http://localhost:3000/movies?id=' + e)
//     filmGenre.value = await $fetch('http://localhost:3000/genres?id=' + filmDatas.value[0].genreId)
//     isLoading.value = false

// }

// const route = useRoute();
// const filmId = ref(route.params.id);

</script>

<template>

    <div v-if="!isLoading">

        <div class="top-film" :style="{backgroundImage: 'url('+ filmDatas.backdrop_path +')'}" >
        <div class="background-coloration">

        <img :src="filmDatas.poster_path" alt="" class="poster">
        
            <div class="infos-container">

                <h2>{{ filmDatas.title }} ({{ new Date(filmDatas.release_date).getFullYear() }})</h2>

                <p>{{ new Date(filmDatas.release_date).toLocaleDateString('fr') }} - {{ filmDatas.genre.name }} - {{ hours }}h{{ minutes }}</p>
                <div class="vote-container">


                
                    <div class="vote-average"
                        :class="{

                        'vote-green': Math.round(filmDatas.vote_average * 10) >= 70,
                        'vote-orange': Math.round(filmDatas.vote_average * 10) > 40 && Math.round(filmDatas.vote_average * 10) < 70,
                        'vote-red': Math.round(filmDatas.vote_average * 10) <= 40

                        }">
                    
                        <p>
                        {{ Math.round(filmDatas.vote_average*10) }}%
                        </p>
                </div>

                <button class="btn-modal" @click="showModal = true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="movie-play-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>

                <span>Voir la bande annonce</span>
              </button>
                </div>
                <p class="tagline">{{ filmDatas.tagline }}</p>
                <p class="text-overview-title">Synopsis</p>
                <p class="overview">{{ filmDatas.overview }}</p>

            </div>

        </div>

    </div>

    <div class="showactors-container">

        <ShowActors :actorsDatas="filmDatas.actors"/>

    </div>

    
    </div>


    <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <iframe
        width="100%"
        height="500"
        :src="`https://www.youtube.com/embed/` + filmDatas.youtube"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Modal>
  </Teleport>

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
            z-index: 9997;
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
.vote-container{
    display: flex;
}


.btn-modal{
    display: flex;
    flex-direction: row;
    background-color: transparent;
    color: white;
    height: 54px;
    width: 300px;
    box-shadow: none;
    border: none;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    .movie-play-icon{
        width: 80px;
        height: 54px;
    }
}
</style>