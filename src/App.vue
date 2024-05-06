<template>
    <div v-if="isLoading">
      <loading-page> </loading-page>
    </div>
    <div v-else>
      <home />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useImage } from "@vueuse/core";
import Home from "./views/Home.vue";
import LoadingPage from "./components/LoadingPage.vue";
const imageOptions = ref();

const { isLoading } = useImage(imageOptions, { delay: 900 });
</script>
