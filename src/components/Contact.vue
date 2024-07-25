<template>
  <div class="mt-10">
    <h1
      data-aos="fade-right"
      class="text-3xl md:text-3xl xl:text-3xl font-bold mb-10"
    >
      Contacts
    </h1>
    <div class="flex flex-col w-full h-60">
      <div
        class="flex flex-col w-full md:w-1/2 items-start text-3xl mt-2 font-semibold"
      >
        <a href="mailto:limmengti@gmail.com" class="w-full">
          <div
            v-if="isSupported"
            class="w-full flex flex-row justify-between items-center group"
          >
            <h1 data-aos="fade-right" class="hover:block transition-all">
              {{ email }}
            </h1>
            <button @click="copy(email)" class="text-[1rem]">
              <span class="hidden group-hover:block">Copy</span>
            </button>
          </div>
        </a>
        <div
          v-if="isSupported"
          class="w-full flex flex-row justify-between items-center group mt-2"
        >
          <h1 data-aos="fade-right" class="hover:block transition-all">
            {{ tel }}
          </h1>
          <button @click="copy(tel)" class="text-[1rem]">
            <span class="hidden group-hover:block">Copy</span>
          </button>
        </div>
        <h1 data-aos="fade-right" class="mt-5">
          Lived in Phnom Penh, Cambodia.
        </h1>
      </div>
      <div class="flex flex-row justify-between items-center md:my-16">
        <a
          data-aos="fade-right"
          href="https://t.me/mengty199"
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
        >
          <span class="sr-only">Telagram</span>
          <i
            class="fa-brands fa-telegram text-6xl mt-10 md:text-7xl md:mt-0"
          ></i>
        </a>
        <a
          data-aos="fade-right"
          href="https://www.instagram.com/limmengti/"
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
        >
          <span class="sr-only">Instagram</span>
          <i
            class="fa-brands fa-instagram text-6xl mt-10 md:text-7xl md:mt-0"
          ></i>
        </a>
        <a
          data-aos="fade-right"
          href="https://github.com/limmengty"
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
        >
          <span class="sr-only">GitHub</span>
          <i class="fa-brands fa-github text-6xl mt-10 md:text-7xl md:mt-0"></i>
        </a>
        <a
          data-aos="fade-right"
          href="https://web.facebook.com/profile.php?id=100086079594493"
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 flex flex-row transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
        >
          <span class="sr-only">Facebook</span>
          <i
            class="fa-brands fa-facebook text-6xl mt-10 md:text-7xl md:mt-3"
          ></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useClipboard } from "@vueuse/core";
import { ref } from "vue";

const email = ref("limmengti@gmail.com");
const tel = ref("015607244");
const { text, copy, copied, isSupported } = useClipboard({ email });
</script>
