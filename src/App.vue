<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>

    <div class="nav-container">

      <Header/>

    </div>


  <RouterView />

  <Footer/>

</template>

<style>

p, a{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

</style>
