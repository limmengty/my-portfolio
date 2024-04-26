<template>
  <div class="mt-5">
    <SkillProgram title="Libraries / Frameworks">
      <ChartLanguage
        title="Vue js"
        :styleBottom="'bg-gradient-to-r from-green-300 to-purple-400'"
        :styleTop="'w-1/2 bg-gradient-to-r from-green-600 via-blue-400 to-pink-200'"
      />
      <ChartLanguage
        title="Express js"
        :styleBottom="'bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700'"
        :styleTop="'w-1/2  bg-gradient-to-r from-blue-400 to-emerald-400'"
      />
      <ChartLanguage
        title="Nest js"
        :styleBottom="'bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300'"
        :styleTop="'w-1/3 bg-gradient-to-l from-violet-500 to-orange-300'"
      />
      <ChartLanguage
        title="Tailwind Css"
        :styleBottom="'bg-gradient-to-r from-green-300 to-purple-400'"
        :styleTop="'w-1/2 bg-gradient-to-r from-green-500 to-yellow-100'"
      />
      <ChartLanguage
        title="Spring"
        :styleBottom="'bg-gradient-to-r from-blue-300 to-yellow-200'"
        :styleTop="'w-1/3 bg-gradient-to-r from-yellow-200 via-pink-500 to-pink-400'"
      />
      <ChartLanguage
        title="Spring Boot"
        :styleBottom="'bg-gradient-to-tl from-blue-400 to-emerald-400'"
        :styleTop="'w-1/2 bg-gradient-to-r from-blue-500 to-green-700'"
      />
    </SkillProgram>
  </div>
</template>
<script>
import ChartLanguage from "./ChartLanguage.vue";
import SkillProgram from "./BaseProgram.vue";
export default {
  components: {
    SkillProgram,
    ChartLanguage,
  },
};
</script>
