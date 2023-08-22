<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const hamburgerOpen = ref(false)
const isConnected = ref(false)
import ProfilPicture from '../assets/imgs/pp.jpeg'



</script>

<template>

    <div class="hamburger" @click="hamburgerOpen = !hamburgerOpen" :class="hamburgerOpen ? 'hamburger--is-open' : ''" >
        <div class="hamburger__item hamburger__item--first"></div>
        <div class="hamburger__item hamburger__item--middle"></div>
        <div class="hamburger__item hamburger__item--last"></div>
    </div>  

    <div v-if="hamburgerOpen" class="burger-menu">

        <div class="burger-open-menu">
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

    </div>

</template>


<style lang="scss" scoped>

.name-container{
    display: flex;
    justify-content: start;
    margin-left: 20px;
}


.burger-menu{
    position: absolute;
    width: 100%;
    margin-top:20px;
    background-color: rgb(42, 56, 64);
    left: 0;

}

.burger-open-menu{
    display: flex;
    flex-direction: column;
    a{
        margin: 10px;
        color: white;
        text-decoration: none;
        margin-left:20px;
    }
    .log-class{
        width: 85px;
    }
}

.hamburger {
  height: 30px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    cursor: pointer;
  }
  
  &__item {
    height: 4px;
    width: 100%;
    background: white;
    transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
opacity 300ms linear;
    
    &--first {
      .hamburger--is-open & {
        transform: translate(0, 12px) rotate(45deg);
      }
    }
    
    &--middle {
      .hamburger--is-open & {
        opacity: 0;
      }
    }
    
    &--last {
      .hamburger--is-open & {
        transform: translate(0, -14px) rotate(-45deg);
      }
    }
  }
}

</style>