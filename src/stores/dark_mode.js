import { defineStore } from "pinia";
import { ref } from "vue";
import { useDark } from "@vueuse/core";
import { useToggle } from "@vueuse/shared";

export const darkModeStore = defineStore("darkMode", {
  state: () => ({
    isDark: ref(false)
  }),
  actions: {
    initializeDarkMode() {
      this.isDark = useDark();
    },
    toggleDarkMode() {
      this.isDark = useToggle(this.isDark.valueOf);
    }
  }
});