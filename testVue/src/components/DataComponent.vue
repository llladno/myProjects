

<script setup>
defineProps({
    title: String,
    price: Number,
    isAdded: Boolean
})

</script>

<template>
  <div class="product">
      <h2>Кросовки: {{ title }}</h2>
      <p>Цена:{{ price }}руб</p>
      <p>Добавлен {{ isAdded}}</p>
  </div>
  <slot></slot>
</template>

<style scoped>
  .product {
      border: 2px solid black;
      padding: 10px;
      margin: 10px;
  }

</style>