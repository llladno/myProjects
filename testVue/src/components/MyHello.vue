<script setup lang="ts">
import { ref } from 'vue'
let count = ref(0)

function increment(){
  count.value++
}
function decrement(){
  count.value--
}

function updateInput(event){
    count.value = event.target.value

}
</script>


<!--<script lang="ts">-->
<!--export default {-->
<!--    data(){-->
<!--        return {-->
<!--            count: 0-->
<!--        }-->
<!--    },-->
<!--    methods: {-->
<!--        increment(){-->
<!--            this.count++-->
<!--        },-->
<!--        decrement(){-->
<!--            this.count&#45;&#45;-->
<!--        }-->
<!--    }-->
<!--}-->
<!--</script>-->



<template>
  <h1> {{ count }}</h1>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <input @keyup.enter="updateInput">
</template>

<style scoped>
  h1{
    color: red
  }

</style>