<script setup lang="ts">
import Header from "@/components/Header.vue";
import CardList from "@/components/CardList.vue";

import {onMounted, reactive, ref, watch} from "vue";
import axios from "axios";


const items = ref([])

const filters = reactive({
    sortBy: '',
    searchQuery: ''
})

const fetchItems = async (prop) => {
    try {
        let {data} = await axios.get(`https://604781a0efa572c1.mokky.dev/items${prop}`)
        items.value = data.filter(item => item.title)
        items.value = items.value.map((item) => ({
          ...item,
                isFavorite: false,
                isAdded: false
        }))
    } catch (e) {
        console.log(e)
    }
}

async function fetchFavorites() {
  try {
    let {data: favorites} = await axios.get('https://71859a9ddc5a31c7.mokky.dev/favorites')
      console.log(favorites)
      items.value = items.value.map((item) => {
        const favorite = favorites.find(favorite => favorite.iditem === item.id)
          if (!favorite) {
              return item
          } else {
              return {
                  ...item,
                  isFavorite: true
              }
          }
      })
  } catch (e){
      console.log(e)
  }
}

const onChangeSelect = event => {
  filters.sortBy = event.target.value
}

const onChangeInput = event => {
    filters.searchQuery = event.target.value
}

onMounted(async () => {
    await fetchItems('')
    await fetchFavorites()
})


watch(filters, async () => fetchItems(filters.sortBy ? `?sortBy=${filters.sortBy}` : `?title=*${filters.searchQuery}*`))
</script>

<template>
  <!--    <Drawer></Drawer>-->
    <div
            class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-10">
        <Header></Header>
        <div class="p-10">
            <div class="flex justify-between items-center mb-7">
                <h2 class="text-3xl font-bold mb-7">Все кросовки</h2>

                <div class="flex gap-4">
                    <select @change="onChangeSelect"
                        class="py-2 px-3 border rounded-md outline-none">
                        <option value="name">По названию</option>
                        <option value="price">По цене (дешевые)</option>
                        <option value="-price">По цене (дорогие)</option>
                    </select>

                    <div class="relative">
                        <img class="absolute top-3.5 left-3.5"
                             src="/search.svg" alt="Search">
                        <input type="text" placeholder="Поиск..." @change="onChangeInput"
                               class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-grey-400">
                    </div>
                </div>
            </div>
            <CardList :items="items"></CardList>
        </div>

    </div>
</template>
<style scoped>

</style>
