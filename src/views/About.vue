<script setup>

    import { ref } from 'vue'

    import PicturePerson1 from '@/assets/imgs/person2.jpeg'
    import PicturePerson2 from '@/assets/imgs/person3.jpeg'
    import PicturePerson3 from '@/assets/imgs/person1.jpeg'

    const listDevs = ref([
        {
            role: "Manager",
            name: "Fiorella",
            showdesc: false,
            picture: PicturePerson1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum malesuada odio eget vulputate. Ut ut elit nec lorem faucibus rutrum quis sit amet ligula. Morbi aliquet, nisl non bibendum facilisis, nibh augue sodales purus, id scelerisque ligula ligula ut lorem. Quisque efficitur non odio a consectetur."
        },
        {
            role: "Développeur",
            name: "Matthieu",
            showdesc: false,
            picture: PicturePerson2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum malesuada odio eget vulputate. Ut ut elit nec lorem faucibus rutrum quis sit amet ligula. Morbi aliquet, nisl non bibendum facilisis, nibh augue sodales purus, id scelerisque ligula ligula ut lorem. Quisque efficitur non odio a consectetur."
        },
        {
            role: "Commerciale",
            name: "Marina",
            showdesc: false,
            picture: PicturePerson3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum malesuada odio eget vulputate. Ut ut elit nec lorem faucibus rutrum quis sit amet ligula. Morbi aliquet, nisl non bibendum facilisis, nibh augue sodales purus, id scelerisque ligula ligula ut lorem. Quisque efficitur non odio a consectetur."
        },
    ])    

</script>

<template>
    <div>
        <h1>A propos</h1>
        <div class="showdev-container">

            <div v-for="person in listDevs" class="dev-container">


                <div class="pp-devs-container">

                    <img :src="person.picture" alt="Photo de profil" class="pp-devs">
                    <p class="name">{{ person.name }}</p>

                </div>
                
                <div class="role-desc-container">

                    <p class="role">{{ person.role }}</p>

                    <button @click="person.showdesc = true" v-if="!person.showdesc" class="bio-btn">Voir biographie</button>

                    <p class="description" v-if="person.showdesc">{{ person.description }}</p>

                </div>

            </div>

        </div>

    </div>
</template>

<style scoped>

    h1{
        text-align: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .dev-container{
        margin: 10px;
        background-color: white;
        height: 250px;
        width: 600px;
        border-radius: 15px;
        text-align: center;
        display: flex;
        flex-direction: row;
    }

    .showdev-container{
        display: flex;
        flex-direction: row;
    }

    .pp-devs{
        height: 70%;
        border-radius: 100000px;
    }

    .pp-devs-container{
        margin-top: 20px;
        margin-left: 20px;
    }

    .role, .name{
        font-weight: bold;
        text-align: center;
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
    }

    .bio-btn{
        border: 0;
        background-color: rgb(170, 47, 38);
        padding: 10px;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        width: 120px;
    }

    .bio-btn:hover{
        background-color: rgb(153 27 27);
    }

</style>