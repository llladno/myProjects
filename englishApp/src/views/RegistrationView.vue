<script setup lang="ts">
import {ref} from "vue";
import axios from "axios";

let errorForm = ref(false)
let successForm = ref(false)
let errorRequest = ref(false)

async function submitForm(event) {
    let childrens = event.target.children
    let data = {
        login: childrens[2].value,
        email: childrens[4].value,
        password: childrens[6].value,
        money: 50
    }
    if (data.login == '' || data.email == '' || data.password == '') {
        errorForm.value = true
    } else {
        if (data.password == childrens[8].value) {
            let result = await axios.post(`https://f0cfd85b77b7aa3b.mokky.dev/users`, data)
            if (result.status == 201) {
                successForm.value = true
                setTimeout(() => {
                    window.location.href='/login'
                },1000)
            } else {
                errorRequest.value = true
            }
        } else {
            errorForm.value = true
        }
    }

}
</script>

<template>
    <div class="flex justify-center w-full mt-32 items-center">
        <form @submit.prevent="submitForm"
              class="flex flex-col gap-4 w-80 p-7 rounded-xl shadow-md formstyle">
            <h2 class="text-2xl font-bold flex justify-center">Регистрация</h2>
            <h3>Login</h3>
            <input type="text" placeholder="Username" name="login" class="px-2 h-9 rounded-md">
            <h3>Email</h3>
            <input type="text" placeholder="Email" name="email" class="px-2 h-9 rounded-md">
            <h3>Password</h3>
            <input type="password" placeholder="Password" name="password" class="px-2 h-9 rounded-md text-black">
            <h3>Repeat password</h3>
            <input type="password" placeholder="Repeat password" name="password" class="px-2 h-9 rounded-md">
            <button type="submit" class="px-2 h-9 rounded-md bg-violet-500 hover:bg-violet-600 transition text-white mt-3">Registration</button>
            <h2 v-if="errorForm" class="text-red-500">Введите корректные данные</h2>
        </form>
    </div>
    <div v-if="successForm" class="flex justify-center w-screen h-screen items-center
    fixed top-0 left-0 bg-black bg-opacity-50">
        <div class="flex flex-col gap-4 w-80 p-7 h-80 bg-white rounded-xl shadow-md items-center justify-center">
            <img src="/src/assets/icons/accept.png" class="w-40">
            <h2 class="text-lg font-semibold">Регистрация прошла успешно!</h2>
        </div>
    </div>
</template>

<style scoped>
</style>
