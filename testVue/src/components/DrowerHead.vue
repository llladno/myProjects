<template>
    <div class="flex items-center gap-5">
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
             class="opacity-50 cursor-pointer rotate-180 hover:opacity-100 transition">
            <path d="M1 7H14.7143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="black" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </svg>
        <h2 class="text-2xl font-bold">Корзина</h2>
    </div>
    <div class="flex flex-col gap-4">
        <BasketItem></BasketItem>
        <BasketItem></BasketItem>
        <BasketItem></BasketItem>
        <BasketItem></BasketItem>
        <div class="flex flex-col gap-3 mb-6 justify-between bottom-0">
            <div class="flex gap-2">
                <span>Итого:</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>12990 </b>
            </div>
            <div class="flex gap-2">
                <span>Налог 5%:</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>12990 </b>
            </div>
            <button class="transition disabled:bg-slate-300 hover:bg-lime-400 cursor-pointer
        bg-lime-500 w-full rounded-xl py-2 ">
                Оформить заказ
            </button>
        </div>
    </div>



</template>
<script setup>
import BasketItem from "@/components/BasketItem.vue";
</script>