<script setup lang="ts">

import axios from "axios";
import {onMounted, ref} from "vue";

let error = ref(false)

onMounted(()=>{
  if (localStorage.getItem('logid')) {
    window.location.href = '/user/' + localStorage.getItem('logid')
  }
})
async function submitForm(event: any) {
    let childrens = event.target.children
    let data = {
        login: childrens[2].value,
        password: childrens[4].value
    }
    console.log(data)
       let result = await axios.get(`https://f0cfd85b77b7aa3b.mokky.dev/users?login=${data.login}&password=${data.password}`)
    if (result.data.length > 0) {
        localStorage.setItem('logid', result.data[0].id)
       window.location.href = '/user/' + result.data[0].id
    } else {
        console.log('error')
        error.value = true
    }
}
</script>

<template>
  <div class="flex justify-center w-full mt-40 items-center">
    <form @submit.prevent="submitForm" class="flex flex-col gap-4 w-80 p-7 rounded-xl shadow-md formstyle">
        <h2 class="text-2xl font-bold flex justify-center">Вход</h2>
        <h3>Email/Login</h3>
        <input type="text" placeholder="Email/Login" name="email" class="px-2 h-9 rounded-md text-black">
        <h3>Password</h3>
        <input type="password" placeholder="Password" name="password" class="px-2 h-9 rounded-md text-black">
        <button type="submit" class="px-2 h-9 rounded-md bg-violet-500 hover:bg-violet-600 transition text-white mt-3">Login</button>
        <RouterLink to="/registration" class="flex w-full justify-center">Зарегистрирвоаться</RouterLink>
        <h2 v-if="error" class="text-red-500">Неверные данные</h2>
    </form>
  </div>
</template>

<style scoped>
</style>
