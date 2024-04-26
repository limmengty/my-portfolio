<template>
  <div class="h-auto w-full md:w-1/2">
    <div class="flex flex-col items-start">
      <h1 class="text-2xl font-bold md:text-3xl xl:text-3xl pb-5" data-aos="fade-right">Experience</h1>
      <LineText
        school="Assistant Photo Copy"
        location="Norton University "
        date="2022-Present"
        :styleLine="'display: block;'" 
      />
    </div>
  </div>
</template>

<script>
import LineText from "./LineText.vue";

export default {
  components: { LineText },
};
</script>
