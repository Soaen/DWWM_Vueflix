<script setup>
import { defineProps, ref, onBeforeMount } from 'vue'
import { $fetch } from 'ohmyfetch'


const props = defineProps({
    actorsDatas: Object,
});

const casting = ref([])

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

onBeforeMount( () =>{
    casting.value = props.actorsDatas

    }
)
</script>

<template>
    <div class="container">

        <h3>Casting</h3>


        <div  class="casting-container">

            <div v-for="actor in casting" class="actor-fullcontain">
            
            <div class="actor-container">

                <img :src="actor.profile_path" alt="">
                
                <div class="actor-info">

                    <p class="actor-name">{{ actor.name }} ({{ getAge(actor.birthday) }} ans)</p>
                    <p class="character-name">{{ actor.character }}</p>

                </div>

            </div>


        </div> 
    
        </div>
   

        
    </div>

</template>


<style lang="scss">
body{
    background-color: lightgrey;

}
.container{
    display: flex;
    flex-direction: column;
    h3{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        margin-left: 10px;
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .casting-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 70px;
        .actor-fullcontain{
            height: 360px;
            background-color: white;
            border-radius: 10px;
            margin: 20px;
            width: 250px;
            .actor-container{
            height: 80%;
            img{
                height: 100%;
                width: 100%;
                border-radius: 10px 10px 0 0;
                object-fit: cover;
            }
            .actor-info{
                margin-left: 10px;
                .character-name{
                    color: gray;
                    font-size: 14px;
                    }
                .actor-name{
                    font-weight: bold;
                    margin-top: 5px;
                }
            }
        }
        }
        
    }
}



</style>