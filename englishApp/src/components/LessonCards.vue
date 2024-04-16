<template>
    <div class="border-2 border-violet-200 w-96 pt-5 pb-7 pl-6 border-solid rounded-xl shadow-md bg mb-8">
        <RouterLink :to="'/lesson/'+id">
            <h2 class="text-2xl font-bold flex justify-center text-yellow-300 mb-3">{{ title }}</h2>
            <h3>Level: {{ level }}</h3>
            <h3>Words: {{ words.length }}</h3>
            <div class="flex gap-5 items-center mt-5">
                <div class="w-56 bg-neutral-800 h-5 rounded-lg">
                    <div :style='{width: (words.length/10)*100+"%"}' class="bg-yellow-200  h-5 rounded-lg">
                    </div>
                </div>
                <span>{{ words.length }} / 10</span>
            </div>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
let props = defineProps({
    id: Number,
    title: String,
    level: String,
    theme: String,
    words: [String]
})

</script>

<style scoped>
.bg{
    background-color: #1f1f1f
}

.bg:hover{
    background-color: #282828;
    transition: 0.5s;
    box-shadow: rgba(212, 234, 116, 0.39) -2px -2px 15px,rgba(181, 116, 234, 0.39) 0px 5px 15px;
}

</style>