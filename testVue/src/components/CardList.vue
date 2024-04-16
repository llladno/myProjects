<script setup>
import Card from "@/components/Card.vue";
import axios from "axios";


defineProps({
    items: Array
})

const onClickAdd = () => {
  alert('Hello')
}

const onClickFavorite = async ({id}) => {
    let result = await axios.post('https://71859a9ddc5a31c7.mokky.dev/favorites', {iditem: id})
    console.log(result)
}
</script>
<template>
  <div class="grid grid-cols-4 gap-5">
      <Card
              v-for="item in items"
              :id = "item.id"
            :image-url="item.imageUrl"
            :title="item.title"
            :price="item.price"
            :is-added="true" :is-favorite="false"
              :isFavorite="!item.isFavorite"
            :onClickAdd="onClickAdd" :onFavorite="onClickFavorite"
              :key="item.id">

      </Card>
  </div>
</template>