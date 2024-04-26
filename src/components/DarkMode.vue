<template>
    <button @click="toggleDark()"  class="ml-2 ">
        <!-- <i v-if="isDark" class="fa-solid fa-moon"></i> -->
        <i  class="fa-solid fa-sun " :class="{' fa-solid fa-moon': isDark}"></i>
    </button>
</template>


<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>