<template>
  <div
    id="home"
    class="bg-gray-light  dark:bg-gray-darkest  scroll-smooth box-border m-0 p-0 "
  >
    <div class="flex flex-col w-11/12 md:w-4/5 mx-auto">
      <Navbar />
      <Hero />
      <div
        id="edu"
        class="text-dark dark:text-gray-light flex h-auto flex-col items-start justify-start md:flex-row md:items-start md:justify-center"
      >
        <Education />
        <Experience />
      </div>
      <div class="h-auto text-black dark:text-gray-light" >
        <ProgrammingLanguages />
        <Framework />
      </div>
      <work />
      <Contact class="text-black dark:text-gray-light"/>
      <Footer />
    </div>
    <PushUp/>
    <BarScroll />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import Navbar from "@/components/Navbar.vue";
import ProgrammingLanguages from "@/components/ProgrammingLanguages.vue";
import Framework from "@/components/Framework.vue";
import Work from "@/components/Project.vue";
import Footer from "@/components/Footer.vue";
import PushUp from "@/components/PushUp.vue";
import BarScroll from "@/components/BarScroll.vue";
import Contact from "@/components/Contact.vue";


export default {
  components: {
    Hero,
    Education,
    Experience,
    Navbar,
    ProgrammingLanguages,
    Framework,
    Work,
    Footer,
    PushUp,
    BarScroll,
    Contact
  },
};
</script>
