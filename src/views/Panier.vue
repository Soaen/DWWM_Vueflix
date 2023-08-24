<script setup>

import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();

const cartRemove = (index) =>{
    
    cartStore.removeCart(index)
}

</script>

<template>

    <div class="container-cart">
        <div v-for="cart in cartStore.getCarts" class="cart-solo">
            <img :src="cart.poster_path" :alt="'poster de ' + cart.poster_path" class="poster-cart">

            <p class="cart-title">{{ cart.title }}</p>

            <button @click="cartRemove(cartStore.getCarts.indexOf(cart))">X</button>

        </div>


    </div>

</template>

<style lang="scss" scoped>

.container-cart{
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    .cart-solo{
        display: flex;
        flex-direction: row;
        margin: 10px;
        .cart-title{
            font-size: 14px;
            margin-left: 5px;
        }
    }
    .poster-cart{
        width: 75px;
        height: 100px;
    }
}

</style>