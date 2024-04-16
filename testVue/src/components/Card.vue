<script setup>
defineProps({
    id: Number,
    title: String,
    imageUrl: String,
    price: Number,
    isAdded: Boolean,
    isFavorite: Boolean,
    onClickAdd: Function,
    onFavorite: Function,
})

</script>
<template>
    <div class="relative bg-white border border-slate-200 rounded-2xl p-8 cursor-pointer
          hover:-translate-y-1 hover:shadow-xl transition">
        <img
            @click="onFavorite({id}, isFavorite = !isFavorite)"
            :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'" alt="Like 1" class="absolute top-8 left-8">
        <img :src="imageUrl" alt="Sneaker">
        <p class="mt-2">{{title}}</p>
        <div class="flex justify-between mt-5">
            <div class="flex flex-col">
                <span class="text-slate-400">Цена:</span>
                <span>{{ price }} руб.</span>
            </div>

            <img @click="onClickAdd" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="Plus">
        </div>
    </div>
</template>
