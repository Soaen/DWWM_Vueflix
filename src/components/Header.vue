<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import Burger from './Burger.vue'
const isConnected = ref(false)
const isResponsive = ref(false)

import ProfilPicture from '../assets/imgs/pp.jpeg'

function updateFullSideBar() {
  if(window.matchMedia("(min-width: 900px)").matches){
    isResponsive.value = false
  } else{
    isResponsive.value = true
  }
}

window.addEventListener("resize", updateFullSideBar);


</script>


<template>

    <header>
        <p class="para-vue">Vue<span class="para-flix">Flix</span></p>
        <RouterView>
            <nav class="navbar-container">

                <div class="" v-if="isResponsive">

                    <Burger/>

                </div>
                 
                <div class="classic-menu" v-if="!isResponsive">
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
                
                </div>
            </nav>
        </RouterView>
    </header>

</template>


<style lang="scss">

header{
  background-color: rgb(42, 56, 64);
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  .hidden{
    display: none;
  }
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
    .reponsive-menu{
        color: white
    }
    .classic-menu{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
}
.para-flix{
    color: rgb(231, 116, 112)
}

.para-vue{
  color: white;
  font-weight: bold;
}

.log-class{
    padding: 5px;
    background-color: rgb(198, 28, 28);
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: rgb(145, 21, 21);
    }
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

@media screen and (max-width: 900px){
    .navbar-container{
    justify-content: end;
    }
}

</style>