<template>
  <header class="opacity-90 sticky top-0 z-50">
    <div
      class="mx-auto w-full lg:w-2/3 bg-gray-lightest dark:bg-gray-dark hover:text-gray-dark dark:text-white dark:hover:text-gray-light rounded-2xl px-10 mt-5 mb-5 py-1"
      :class="{
        'bg-gray-200 py-0 transition-all dark:shadow-gray-50 drop-shadow-md text-gray-dark dark:bg-gray-500':
          scrolledNav,
      }"
    >
      <div class="flex h-14 items-center justify-between">
        <div class="items-center md:flex md:items-center md:gap-12">
          <a class="block font-bold" href="#">
            <span class="sr-only">Home</span>
            <a @click="scrollToHome"
              ><h1
                class="text-2xl bg-gradient-to-r from-sky-400 to-blue-500 dark:bg-gradient-to-r dark:from-rose-400 dark:to-orange-300 bg-clip-text font-bold text-transparent md:text-3xl"
              >
                LMT
              </h1></a
            >
          </a>
        </div>

        <transition name="mobile-nav">
          <nav
            @click="closeMobileNav"
            aria-label="Global"
            class="mt-10 mx-auto w-full rounded-b-2xl absolute top-0 left-0 p-10 -z-50 bg-gray-lightest dark:bg-gray-dark"
            v-show="mobileNav"
          >
            <ul class="flex flex-col items-center gap-6 text-xl">
              <li @click="closeMobileNav">
                <a class="transition" @click="scrollToAbout"> About </a>
              </li>

              <li @click="closeMobileNav">
                <a class="transition" @click="scrollToEdu"> Edu & Exp </a>
              </li>

              <li @click="closeMobileNav">
                <a class="transition" @click="scrollToSkill"> Skill </a>
              </li>

              <li @click="closeMobileNav">
                <a  @click="scrollToProjectMB" class="transition"> Project </a>
              </li>

              <li @click="closeMobileNav">
                <a class="transition" @click="scrollToContact"> Contact </a>
              </li>
            </ul>
          </nav>
        </transition>
        <div class="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" class="">
            <ul class="flex items-center gap-6 md:text-md" v-show="!moblie">
              <li>
                <a @click="scrollToAbout" class="transition"> About </a>
              </li>

              <li>
                <a class="cursor-pointer transition" @click="scrollToEdu">
                  Edu & Exp
                </a>
              </li>

              <li>
                <a @click="scrollToSkill" class="transition"> Skill </a>
              </li>

              <li>
                <a class="transition" @click="scrollToProject"> Project </a>
              </li>

              <li>
                <a class="transition" @click="scrollToContact"> Contact </a>
              </li>

              <li>
                <DarkMode />
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex items-center md:hidden text-xl">
          <div class="block md:hidden float-end">
            <button
              class="mr-2 rounded text-gray-600 transition hover:text-gray-600/75 dark:text-white dark:hover:text-white/75"
            >
              <i
                v-show="moblie"
                class="fa-solid fa-bars rotate-360 transition-all"
                @click="toggleMoblieNav"
                :class="{
                  'fa-solid fa-xmark rotate-180 transition-all': mobileNav,
                }"
              ></i>
            </button>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import DarkMode from "@/components/DarkMode.vue";

export default {
  name: "Navbar",
  components: { DarkMode },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  data() {
    return {
      icon: true,
      scrolledNav: null,
      moblie: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  methods: {
    toggleMoblieNav() {
      this.mobileNav = !this.mobileNav;
    },
    closeMobileNav() {
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.moblie = true;
        return;
      }
      this.moblie = false;
      this.mobileNav = false;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },

    scrollToHome() {
      this.$scrollTo("#home", {
        duration: 300,
        easing: "linner",
        offset: 0,
        force: true,
      });
    },
    scrollToAbout() {
      this.$scrollTo("#about", {
        duration: 300,
        easing: "linner",
        offset: -200,
        // force: true,
      });
    },
    scrollToContact() {
      this.$scrollTo("#contact", {
        duration: 300,
        easing: "linear",
        offset: -100,
        force: true,
      });
    },
    scrollToProject() {
      this.$scrollTo("#project", {
        duration: 300,
        easing: "linear",
        offset: -100,
        force: true,
      });
    },    
    scrollToProjectMB() {
      this.$scrollTo("#project", {
        duration: 300,
        easing: "linear",
        offset: -60,
        force: true,
      });
    },
    scrollToEdu() {
      this.$scrollTo("#edu", {
        duration: 300,
        easing: "linear",
        offset: -100,
        force: true,
      });
    },
    scrollToSkill() {
      this.$scrollTo("#skill", {
        duration: 300,
        easing: "linear",
        offset: -100,
        force: true,
      });
    },
  },
};
</script>

<style>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from {
  transform: translateX(-100%);
}
.mobile-nav-leave-to {
  transform: translateX(110%);
}

.mobile-nav-enter-to {
  transform: translateY(0);
}
</style>
<style>
a {
  cursor: pointer;
}
</style>
