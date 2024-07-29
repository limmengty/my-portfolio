<template>
  <div class="mt-5" data-aos="fade-right">
    <div class="h-14 rounded-2xl relative z-0" :class="`${styleBottom}`">
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        class="h-14 rounded-2xl absolute top-0 left-0"
        :class="`${styleTop}`"
      >
        <div class="flex flex-col justify-center items-start pl-2 h-full w-full">
          <h1
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            class="font-bold xl:text-md md:text-[.8rem] text-md  text-left"
          >
            {{ title }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    styleTop: String, // color
    styleBottom: String,
    title: String,
  },
};
</script>
