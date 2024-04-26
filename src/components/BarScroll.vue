<template>
  <div class="relative">
    <div class="h-1 w-full fixed top-0 rounded-md ">
      <div
        class="h-1 bg-gradient-to-tl from-blue-400 to-emerald-400 rounded-full  absolute top-0 left-0 translate-y-1 translate-x-1"
        :style="`width: ${scrolled}%`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.actionScroll);
  },
  methods: {
    actionScroll() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const hight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      this.scrolled = (winScroll / hight) * 100;
      console.log(this.scrolled);
      return this.scrolled;
    },
  },
};
</script>
