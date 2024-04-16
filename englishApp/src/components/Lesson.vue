<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import axios from "axios";
import LessonCards from "@/components/LessonCards.vue";
import "@/assets/lessonStyles.css";

let lessons = ref([])
let theme = ref('')

onMounted(async () => {
    let resultLessons = await axios.get('https://f0cfd85b77b7aa3b.mokky.dev/lessons')

    console.log(resultLessons.data)
    // let resultLessons = {
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
    lessons.value = resultLessons.data
    console.log(lessons)
})
// let resultLessons = {
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
// lessons = resultLessons.data
// console.log(lessons)

function toHideShow(str: string) {
    let lessonMenu = document.querySelector('.lessonMenu')
    let hiden = document.querySelector('.hiden')
    console.log(hiden.style.opacity)
    if (hiden.style.opacity === '1') {
        hiden.style.opacity = '0'
        setTimeout(()=>{
            hiden.style.display = 'none'
        },500)
        hiden.style.width = '0px'
        lessonMenu.style.width = '400px'

    } else {
        hiden.style.display = 'block'
        setTimeout(()=>{
            hiden.style.opacity = '1'

        },50)
        theme.value = str
        lessonMenu.style.width = '100px'
        hiden.style.width = '100%'
    }

}

</script>

<template>
    <div class="flex flex-col gap-5">
        <h1 class="text-3xl">Lessons</h1>
        <div class="flex gap-5">
            <div class="lessonMenu">
                <button @click="toHideShow('Basic')" class="text-black bg-violet-200 px-8 py-2 rounded">Basic</button>
                <button @click="toHideShow('Basic2')" class="text-black bg-violet-200 px-8 py-2 rounded">Basic2</button>
                <button @click="toHideShow('Basic3')" class="text-black bg-violet-200 px-8 py-2 rounded">Basic3</button>
                <button @click="toHideShow('Basic4')" class="text-black bg-violet-200 px-8 py-2 rounded">Basic4</button>
            </div>


            <div class="hiden">
                <LessonCards v-if="lessons" v-for="lesson in lessons"
                             :id="lesson.id"
                             :title="lesson.title"
                             :level="lesson.level"
                             :theme="lesson.theme"
                             :words="lesson.words"
                             :key="lesson.id"></LessonCards>
                <h1>{{theme}}</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
