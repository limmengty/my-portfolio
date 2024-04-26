import { defineStore } from "pinia";
import { useVueScrollto } from 'vue-scrollto' // Assuming vue-scrollto is installed

export const scrollStore = defineStore("scroll", {
  state: () => ({
    scrollTo: useVueScrollto()
  }),
  actions: {
      scrollToHome() {
        this.scrollto("#home", {
          duration: 400,
          easing: "linner",
          offset: 0,
          force: true,
        });
      },
      scrollToContact() {
        this.$scrollTo("#contact", {
          duration: 1000,
          easing: "linear",
          offset: -100,
          force: true,
        });
      },
      scrollToProject() {
        this.$scrollTo("#project", {
          duration: 1000,
          easing: "linear",
          offset: -100,
          force: true,
        });
      },
      scrollToEdu() {
        this.$scrollTo("#edu", {
          duration: 1000,
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
  }
});