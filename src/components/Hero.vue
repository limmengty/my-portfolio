<template>
  <section id="about">
    <div
      class="mx-auto h-screen items-center max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
    >
      <div class="mx-auto max-w-3xl">
        <h1
          ref="el2"
          class="bg-gradient-to-r from-purple-800 via-blue-500 to-green-600 dark:bg-gradient-to-r dark:from-indigo-200 dark:via-red-200 dark:to-yellow-100 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          LIM

          <span
            ref="el"
            class="block mt-5 bg-clip-text bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 dark:bg-gradient-to-r dark:from-red-200 dark:via-red-300 dark:to-yellow-400"
          >
            MENG TY
          </span>
        </h1>

        <p class="mx-auto mt-4 max-w-xl dark:text-gray-lightest text-2xl">
          {{ title }}
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a
            class="block hover:text-gray-darkest text-center transition-colors w-full rounded border border-gray-dark dark:bg-gray-light dark:text-gray-darkest dark:hover:text-white dark:hover:bg-transparent dark:border-gray-light bg-gray-dark px-12 py-3 text-sm font-medium text-white hover:bg-transparent focus:outline-none focus:ring-2 active:text-opacity-75 sm:w-auto"
            href="https://github.com/MengTy199/my-portfolio/blob/main/src/assets/Limmengty.pdf"
            target="_blank"
          >
            MY CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const title =
  "I'm currently in my Fourth year of the Software Development at Norton University, focusing on web development.";

import { ref } from "vue";
import { useAnimate  } from "@vueuse/core";

const el = ref();
const el2 = ref();
const keyframes = ref([
  { clipPath: "circle(20% at 0% 30%)" },
  { clipPath: "circle(20% at 50% 80%)" },
  { clipPath: "circle(20% at 100% 30%)" },
]);
const keyframes2 = ref([
  { clipPath: "circle(20% at 0% 30%)" },
  { clipPath: "circle(20% at 50% 80%)" },
  { clipPath: "circle(20% at 90% 30%)" },
]);

useAnimate(el, keyframes,1000);
useAnimate(el2, keyframes2,1400);
</script>
