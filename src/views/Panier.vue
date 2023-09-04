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
            <div>

                <p class="cart-title">{{ cart.title }}</p>

                <button @click="cartRemove(cartStore.getCarts.indexOf(cart))" class="btn-panier">X</button>

            </div>



        </div>


    </div>

</template>

<style lang="scss" scoped>

.container-cart{
    background-color: white;
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    .cart-solo{
        display: flex;
        flex-direction: row;
        margin: 10px;
        width: 100%;
        .cart-title{
            font-size: 14px;
            margin-left: 5px;
        }
        .btn-panier{
            margin-left: 10px;
            border: 0;
            background-color: rgb(198, 28, 28);
            color: white;
            padding: 10px;
            width: 40px;
            cursor: pointer;
            border-radius: 50%;
            &:hover{
                background-color: rgb(145, 21, 21);
            }
        }
    }
    .poster-cart{
        width: 75px;
        height: 100px;
    }
}

</style>