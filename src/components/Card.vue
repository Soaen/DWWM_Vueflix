<script setup>

import { ref } from 'vue'

import PicturePerson1 from '@/assets/imgs/person2.jpg'
import PicturePerson2 from '@/assets/imgs/person3.png'
import PicturePerson3 from '@/assets/imgs/person1.jpg'

const listDevs = ref([
    {
        role: "Manager",
        name: "Roulianes",
        showdesc: false,
        picture: PicturePerson1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum malesuada odio eget vulputate. Ut ut elit nec lorem faucibus rutrum quis sit amet ligula. Morbi aliquet, nisl non bibendum facilisis, nibh augue sodales purus, id scelerisque ligula ligula ut lorem. Quisque efficitur non odio a consectetur."
    },
    {
        role: "Développeur",
        name: "Lord Mathieu",
        showdesc: false,
        picture: PicturePerson2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum malesuada odio eget vulputate. Ut ut elit nec lorem faucibus rutrum quis sit amet ligula. Morbi aliquet, nisl non bibendum facilisis, nibh augue sodales purus, id scelerisque ligula ligula ut lorem. Quisque efficitur non odio a consectetur."
    },
    {
        role: "Commercial",
        name: "Slipeur",
        showdesc: false,
        picture: PicturePerson3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum malesuada odio eget vulputate. Ut ut elit nec lorem faucibus rutrum quis sit amet ligula. Morbi aliquet, nisl non bibendum facilisis, nibh augue sodales purus, id scelerisque ligula ligula ut lorem. Quisque efficitur non odio a consectetur."
    },
])    

const offDescState = (index) =>{

    for (let i = 0; i < listDevs.value.length; i++) {
        if(listDevs.value[i].showdesc = true){
            listDevs.value[i].showdesc = false
        }        
    }

    listDevs.value[index].showdesc = true

}

</script>

<template>

    <div v-for="(person, index) in listDevs" class="dev-container">

        <div class="pp-devs-container">

            <img :src="person.picture" alt="Photo de profil" class="pp-devs">
            <p class="name">{{ person.name }}</p>

        </div>

        <div class="role-desc-container">

            <p class="role">{{ person.role }}</p>

            <button @click="offDescState(index)" v-if="!person.showdesc" class="bio-btn">Voir biographie</button>

            <p class="description" v-if="person.showdesc">{{ person.description }}</p>

        </div>

    </div>

</template>


<style lang="scss" scope>

    .dev-container{
        margin: 10px;
        background-color: white;
        height: 250px;
        width: 400px;
        border-radius: 15px;
        text-align: center;
        display: flex;
        flex-direction: row;
    }

    .pp-devs-container{
        margin-top: 20px;
        margin-left: 20px;

        .pp-devs{
            width: 160px;
            height: 160px;
            overflow: hidden;
            object-fit: cover;
            border-radius: 100000px;
        }
        .name{
        font-weight: bold;
        text-align: center;
    }
    }

    

    .role-desc-container{
        display: flex;
        flex-direction: column;
        overflow: hidden;
        text-align: left;
        margin-left: 20px;
        width: 100%;
        height: 100%;
        align-items: center;
        .role{
            font-weight: bold;
            text-align: center;
        }
        .bio-btn{
        border: 0;
        background-color: rgb(170, 47, 38);
        padding: 10px;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        width: 120px;
            &:hover{
                background-color: rgb(153 27 27);
            }
        }
    }

</style>