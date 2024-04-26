<template>
  <div class="h-auto w-full mt-16 mb-5" >
    <h1  class="font-bold text-2xl md:text-3xl" data-aos="fade-right">{{ title }}</h1>
    <div
      class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ChartLanguage from "./ChartLanguage.vue";
export default {
  components: { ChartLanguage },
  props: {
    title: String,
  },
};
</script>
