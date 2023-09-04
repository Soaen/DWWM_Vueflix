<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { dayjs, getMovieCom } from '../api';

const route = useRoute()
const movieCom = ref({})


setTimeout(() => {
    getMovieCom(route.params.id).then(reponse => {
        movieCom.value = reponse
})
}, 100)


</script>


<template>
<div class="comfull-container">
    <h3>Commentaires</h3>

    <div class="com-fullcontainer">

        <div v-for="com in movieCom" class="com-container">

            <div class="pp-name">
                <img :src="`https://i.pravatar.cc/50?u=${com.user.email}`" :alt="com.user.name"/>

                <p class="com-username">Écrit par <span>{{ com.user.name }}</span> le {{ dayjs(com.createdAt).format('DD MMMM YYYY à HH:mm') }}</p>

            </div>
            


            <p>{{ com.message }}</p>


        </div>
        
    </div>
</div>



</template>


<style lang="scss" scoped>
.comfull-container{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    flex-direction: column;
    width: 60%;
    .com-fullcontainer{
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: white;
    
        .com-container{
            padding: 10px;
            .com-username{
                color: gray;
                span{
                    font-weight: bold;
                }
            }
        }
        .pp-name{
            display: flex;
            img{
                border-radius: 50%;
                margin-right: 20px;
            }
        }
    }
}



</style>