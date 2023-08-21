<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const isConnected = ref(false)

import ProfilPicture from '../assets/imgs/pp.jpeg'

</script>


<template>

    <header>
        <p class="para-vue">Vue<span class="para-flix">Flix</span></p>
        <RouterView>
            <nav class="navbar-container">
                <RouterLink to="/">Accueil</RouterLink>
                <RouterLink to="/films">Films</RouterLink>
                <RouterLink to="/a-propos">A propos</RouterLink>
                <a @click="isConnected = !isConnected" class="log-class" v-if="!isConnected">Connexion</a>
                <div v-else class="name-container">
                    <p>Prénom</p>
                    <div>
                        <img :src="ProfilPicture" alt="Photo de Profil" class="pp-img">
                    </div>
                    <button @click="isConnected = !isConnected" class="quit-cross">X</button>
                </div>
            </nav>
        </RouterView>
    </header>

</template>


<style scoped>

header{
  background-color: rgb(42, 56, 64);
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

a{
    text-decoration: none;
    color: white;
}

.pp-img{
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    align-items: center;
}

.navbar-container{
    display: flex;
    justify-content: space-around;
    width: 40%;
    height: 100%;
    align-items: center;
    font-size: 16px;
}
.para-flix{
    color: rgb(231, 116, 112)
}

.para-vue{
  color: white;
}

.log-class{
    padding: 5px;
    background-color: rgb(136, 36, 30);
    border-radius: 5px;
    cursor: pointer;
}

.name-container{
    display: flex;
    color: white;
    justify-content: space-between;
    gap: 10px;
    height: 100%;
    align-items: center;
}

.quit-cross{
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	cursor: pointer;
    font-size: 16px;
    
}

</style>