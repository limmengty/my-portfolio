<template>
  <div
    data-aos="fade-right"
    class="flex flex-row justify-between w-full xl:w-1/2 items-start"
  >
    <div class="flex flex-col justify center items-center">
      <div
        class="flex flex-col items-center justify-center h-14 w-14 relative hover:animate-background rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
      >
        <span
          class="block ounded-md bg-yellow-500 h-7 w-7 rounded-full"
        ></span>
      </div>
      <span
        class="block h-3 bg-blue-300 w-1 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      ></span>
      <span
        class="block h-2 my-2 bg-green-300 w-1 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      ></span>
      <span
        class="block h-2 bg-red-300 w-1 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      ></span>
      <span
        class="block h-3 my-2 bg-yellow-300 w-1 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      ></span>
      <span
        class="block h-2 bg-pink-300 w-1 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      ></span>
      <span
        class="block h-2 mt-2 bg-purple-300 w-1 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      ></span>
      <span
        :style="`${styleLine}`"
        class="h-7 mt-2 hidden opacity-15 bg-lime-300 w-1 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      ></span>
      <span
        :style="`${styleLine}`"
        class="h-10 hidden opacity-10 bg-gray-200 w-1 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      ></span>
    </div>

    <div class="content flex flex-col items-start justify-between w-full px-5">
      <h1 class="font-bold text-sm md:text-lg py-1">{{ school }}</h1>
      <div class="flex flex-row justify-start items-center w-full">
        <i class="fa-solid fa-location-dot"></i>
        <p class=" my-2 px-5">{{ location }}</p>
      </div>
      <div class="flex flex-row justify-start items-center w-full">
        <i class="fa-regular fa-calendar"></i>
        <p class=" px-5">{{ date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["location", "date", "school", "styleLine"],
};
</script>
