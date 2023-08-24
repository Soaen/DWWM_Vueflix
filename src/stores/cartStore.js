import { defineStore } from "pinia";


export const useCartStore = defineStore('cart', {
    state: () => {
        return{
            cartFilms : [],
        }
    },

    actions: {
        addCart(cart){
            this.cartFilms.push(cart)  
        },
        setCart(cart){
            this.cartFilms = cart
        },
        destroyCart(){
            this.cartFilms = {}
        },
        removeCart(cart){
            this.cartFilms.splice(cart, 1);
        },
    },
    getters: {
        getCarts() {
          return this.cartFilms
        },
      },
})
