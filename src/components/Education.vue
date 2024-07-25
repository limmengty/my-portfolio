<template>
  <div class="h-auto w-full xl:w-1/2 pb-5 md:p-0 ">
    <div class="flex flex-col items-start  ">
      <h1 class="text-2xl font-bold md:text-3xl xl:text-xxl pb-5 " data-aos="fade-right">Education</h1>
      <LineText school="Srey Sonthor Hight School" location="Srey Sonthor " date="2021" />
      <LineText school="Software Development" location="Norton University " date="2021-Present" />
      <LineText school="Java Training" location="Norton University " date="2022-2023" />
      <!-- <LineText school="Web Development" location="Norton University " date="2022-2023"  /> -->
      <LineText school="Full Stack Web Development" location="TFD " date="2023-2024" />
      <LineText school="Nest JS" location="TFD " date="2023-2024" :styleLine="'display: block;'" />
    </div>
  </div>
</template>

<script>
import LineText from "./LineText.vue";
export default {
  components: { LineText },
};
</script>
