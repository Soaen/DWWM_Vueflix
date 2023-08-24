<script setup>
import { ref, onBeforeMount } from 'vue';
import { $fetch } from 'ohmyfetch'
import LoadingScreen from '../assets/imgs/tail-spin.svg'
import ShowFilmDetails from '../components/FilmsDetails.vue'
import router from '../router';
import { useRoute } from 'vue-router';

 
const movies = ref([])
const moviesTotal = ref([])

const nbShow = ref(0)

const isLoading = ref(true)

const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"
];

const route = useRoute();  

const id = ref(route.params.id);

const tableauFilm = ref()

onBeforeMount(async () => {
    loadFilms()

    // A changer pcq nul
    window.setInterval(function(){
        if(route.params.id != id.value){
            id.value = route.params.id
        }
    }, 100);
});

const loadFilms = async () =>{
    nbShow.value += 10;
    movies.value = await $fetch('http://localhost:3000/movies?_page=1&_limit=' + nbShow.value)
    moviesTotal.value = await $fetch('http://localhost:3000/movies')
    isLoading.value = false
}

const openFilmsInfo = (idfilm, tabfilm) => {
    router.push('/films/' + idfilm)
    id.value = idfilm
    tableauFilm.value = tabfilm
}


</script>

<template>
    <div v-if="id == ''">
        <h1>Films</h1>
        <p>{{ movies.value }}</p>
        <div class="global-films-container">
            <div v-if="isLoading">
                <img :src="LoadingScreen" alt="" class="loading-screen">
                <p>Chargement...</p>
            </div>

            <div v-else v-for="movie in movies" class="movies-container">
                <img :src="movie.poster_path" alt="" class="movie-poster" @click="openFilmsInfo(movie.id, movie)">

                <div class="vote-average"
                :class="{

                'vote-green': Math.round(movie.vote_average * 10) >= 70,
                'vote-orange': Math.round(movie.vote_average * 10) > 40 && Math.round(movie.vote_average * 10) < 70,
                'vote-red': Math.round(movie.vote_average * 10) <= 40

                }">
                    
                    <p>
                        {{ Math.round(movie.vote_average*10) }}%
                    </p>
                </div>

                <div class="movie-text">
                    <div>
                        <p class="original-title">{{ movie.title }}</p>

                        <p class="date-format">{{ new Date(movie.release_date).getDay() }} {{ monthNames[new Date(movie.release_date).getMonth()] }} {{ new Date(movie.release_date).getFullYear() }}</p>
                </div>

                    <button class="shop-btn">Ajouter au panier</button>
                </div>
            </div>

        </div>

        <button @click="loadFilms" class="showmore-btn" v-if="!isLoading && nbShow < moviesTotal.length">Afficher la suite</button>

    </div>

    <div v-else>

        <ShowFilmDetails/>

    </div>
</template>


<style lang="scss" scoped>

h1{

    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;

}

.global-films-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .movies-container{
    margin: 20px;
    border-radius: 15px;
    width: 300px;
    height: 600px;
    background-color: white;

        .movie-poster{
            border-radius: 15px 15px 0 0;
            height: 70%;
            width: 100%;
            cursor: pointer;
        }
        .movie-text{
            margin-top: 10px;
            height: 25%;
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .date-format{
                color: lightgray;
                font-size: 16px;
            }
            .original-title{
                font-weight: 600;
            }
            .shop-btn{
                background-color: rgb(198, 28, 28);
                border: 0;
                color: white;
                padding: 10px;
                width: 96%;
                cursor: pointer;
                &:hover{
                    background-color: rgb(145, 21, 21);
                }
            }
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
            margin-top: -70px;
            margin-left: 10px;
            color: white;
            width: 50px;
            height: 50px;
            background-color: black;
            border-radius: 50%;
            justify-content: center;
        }
    }
    .loading-screen{
        height: 80%;
        width: 100%;
        fill: black;
    }
}


.showmore-btn{
    width: 10%;
    margin-left: 45%;
    background-color: rgb(198, 28, 28);
    border: 0;
    color: white;
    padding: 10px;
    cursor: pointer;
    &:hover{
    background-color: rgb(145, 21, 21);
    }
}

</style>