<template>
    <button @click="toggleDark()"  class="ml-2">
        <i v-if="isDark" class="fa-solid fa-sun"></i>
        <i v-else class="fa-solid fa-moon"></i>
    </button>
</template>


<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
console.log(isDark.value)
</script>