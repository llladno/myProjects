<template>
    <div v-if="allCorrectWords.length == 10"
         class="flex justify-center w-screen h-screen items-center
    fixed top-0 left-0 bg-black bg-opacity-50">
        <div class="flex flex-col gap-4 w-80 p-7 h-80 bg-white rounded-xl shadow-md items-center justify-center">
            <img src="/src/assets/icons/accept.png" class="w-40">
            <h2 class="text-lg font-semibold">Задание выполнено!</h2>
        </div>
    </div>
    <div v-else-if="allCorrectWords.length < 10 && !loading" class="flex justify-center flex-col items-center mt-40">
        <img :src='photo || "https://cdnn21.img.ria.ru/images/07e4/0c/0a/1588655917_611:0:2659:2048_1280x0_80_0_0_3e0b64c5cdaccb42ccae9f4c8afe1859.jpg"'
             class="w-64 mb-5">
        <div class="grid grid-cols-2 w-fit grid-rows-2 gap-5">
            <button :key="index" v-for="(item, index) in res?.values()"
                    class="bg-violet-500 rounded-lg text-2xl hover:bg-violet-400 transition h-20 w-48">
                <p v-if="randomWord == item"
                   class="text-green-500 text-bold font-semibold transition duration-700 w-48 h-20 text-center flex items-center justify-center rounded-lg"
                   @click="correctWord">{{ item }}</p>
                <p v-else
                   class="text-white font-semibold transition duration-700 text-center w-48 h-20 flex items-center justify-center rounded-lg"
                   @click="wrongWord">{{ item }}</p>
            </button>
        </div>
        <h2></h2>
    </div>
    <div v-else class="flex justify-center items-center">
        <div class="w-64 mb-5 bg-neutral-800"></div>
    </div>
</template>

<script setup lang="ts">


import {onMounted, ref} from "vue";
import axios from "axios";
import { useRoute } from 'vue-router'

const route = useRoute()


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

let loading = ref(false)
let mainWord = ref('')
let allCorrectWords = ref([])
let randomWord = ref('')
let resultLessons = ref([])
let res = ref([])
let photo = ref()

onMounted(async () => {
    loading.value = true

    resultLessons.value = await axios.get('https://f0cfd85b77b7aa3b.mokky.dev/lessons?id=' + route.params.id)
    console.log(resultLessons.value.data[0].words)
    res.value = resultLessons?.value?.data[0].words

    shuffle(res.value)
    let randomPlace = Math.floor(Math.random() * 4)
    let randomWordNumber = Math.floor(Math.random() * 10)
    randomWord.value = res.value[randomWordNumber]
    shuffle(res.value)
    res.value = res.value.filter((item) => item != randomWord.value)
    res.value = res.value.slice(0, 4)
    res.value[randomPlace] = randomWord.value
    loading.value = false

})
//     {
//     data: [
//         {
//             "id": 1,
//             "title": "Basic Aminals",
//             "level": "Easy",
//             "theme": "Basic English",
//             "words": [
//                 "cat",
//                 "dog",
//                 "puppy",
//                 "pig",
//                 "cow",
//                 "chicken",
//                 "kitten",
//                 "sheep",
//                 "rabbit",
//                 "crocodile"
//             ]
//         }
//     ]
// }

// https://api.unsplash.com/search/photos?page=1&query=office
// client_id=Y7ML_TeFnsmqY-3S-RAWA8QzK58CAEm9Biu6kjQmTVU
// https://api.unsplash.com/search/photos?page=1&query=dog&client_id=Y7ML_TeFnsmqY-3S-RAWA8QzK58CAEm9Biu6kjQmTVU
async function correctWord(event) {
    loading.value = true
    allCorrectWords.value.push(event.target.textContent)
    let randomPlace = Math.floor(Math.random() * 4)


    function filterGuessedWords(allWords, guessedWords) {
        return allWords.filter(word => !guessedWords.includes(word));
    }

    res.value = resultLessons.value.data[0].words
    shuffle(res.value)
    const test = filterGuessedWords(res.value, allCorrectWords.value)
    res.value = test
    let randomWordNumber = Math.floor(Math.random() * test.length)
    console.log(randomWord.value)
    randomWord.value = res.value[randomWordNumber]

    let photoResult = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${randomWord.value}&client_id=Y7ML_TeFnsmqY-3S-RAWA8QzK58CAEm9Biu6kjQmTVU`).then((result) => {
        photo.value = result.data.results[0].urls.regular
        loading.value = false
    })


    res.value = resultLessons.value.data[0].words
    shuffle(res.value)
    res.value = res.value.filter((item) => item != randomWord.value)
    res.value = res.value.slice(0, 4)
    res.value[randomPlace] = randomWord.value
}

function wrongWord(event) {
    event.target.style.backgroundColor = 'red'
}

</script>

<style scoped>

</style>