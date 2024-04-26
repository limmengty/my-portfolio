<template>
  <div>
    <div
      data-aos="zoom-in-down"
      @click="pushTop()"
      v-show="scrolledNav"
      :class="{ block: scrolledNav }"
      class="fixed bottom-10 right-5 rounded-xl cursor-pointer bg-second-200 p-5 z-10 text-black bg-white"
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
