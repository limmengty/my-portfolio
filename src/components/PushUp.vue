<template>
  <div>
    <div
      data-aos="zoom-in-down"
      @click="pushTop()"
      v-show="scrolledNav"
      :class="{ block: scrolledNav }"
      class="fixed flex flex-col justify-center items-center animate-pulse duration-75 shadow-sm bottom-5 right-4 w-4 h-5 rounded-full cursor-pointer bg-second-200 p-5 z-10 dark:bg-white dark:text-black text-white bg-gray-darkest"
    >
      <i class="fa-solid fa-arrow-up"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolledNav: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    pushTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
