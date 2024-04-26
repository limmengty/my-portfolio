<template>
  <div
    data-aos="fade-top"
    class="flex flex-col items-start w-full mb-20"
    id="contact"
  >
    <footer class="bg-transparent w-full">
      <div class="w-full mt-16">
        <div class="sm:flex sm:items-center sm:justify-end">
          <h1
            class="mt-4 text-center text-2xl md:text-3xl text-black lg:mt-0 lg:text-right dark:text-gray-lightest"
          >
            Copyright &copy; {{ now }}. All rights reserved.
          </h1>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const date = new Date();
const now = date.getFullYear();
</script>
