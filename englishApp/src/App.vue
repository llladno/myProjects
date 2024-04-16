<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="flex justify-between px-20 py-4 items-center mb-10">
      <RouterLink to="/" class="text-xl font-semibold text-yellow-300 ">English App</RouterLink>
      <div>
          <nav class="flex gap-6 items-center">
              <RouterLink to="/me">Обо мне</RouterLink>
              <RouterLink to="/about">О приложении</RouterLink>
              <RouterLink to="/login"
                          class="px-6 py-1 bg-violet-500 rounded-2xl text-white
                          hover:bg-violet-400 transition drop-shadow hover:drop-shadow-md">Вход</RouterLink>
          </nav>
      </div>
  </header>
  <RouterView />
</template>

<style scoped>
</style>
