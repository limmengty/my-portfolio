<template>
  <div id="skill">
    <BaseProgram title="Programming Languages">
      <ChartLanguage
        title="HTML"
        :styleBottom="'bg-gradient-to-r from-green-300 to-purple-400'"
        :styleTop="'w-2/3 bg-gradient-to-r from-sky-400 to-cyan-300'"
      />
      <ChartLanguage
        title="CSS"
        :styleBottom="'bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700'"
        :styleTop="'w-2/3  bg-gradient-to-r from-blue-400 to-emerald-400'"
      />
      <ChartLanguage
        title="JavaScript"
        :styleBottom="'bg-gradient-to-r from-green-400 to-blue-400'"
        :styleTop="'w-1/2 bg-gradient-to-l from-pink-500 to-orange-500'"
      />
      <ChartLanguage
        title="TypeScript"
        :styleBottom="'bg-gradient-to-r from-red-500 to-red-300'"
        :styleTop="'w-1/2 bg-gradient-to-r from-green-300  to-purple-900'"
      />
      <ChartLanguage
        title="Java"
        :styleBottom="'bg-gradient-to-r from-green-300 to-purple-400'"
        :styleTop="'w-1/2 bg-gradient-to-r from-emerald-500 to-lime-600'"
      />
      <ChartLanguage
        title="C#"
        :styleBottom="'bg-gradient-to-r from-green-300 to-purple-400'"
        :styleTop="'w-1/3 bg-gradient-to-r from-slate-500 to-yellow-100'"
      />
      <ChartLanguage
        title="Python"
        :styleBottom="'bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'"
        :styleTop="'w-1/2 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'"
      />
      <ChartLanguage
        title="C++"
        :styleBottom="'bg-gradient-to-r from-green-300 to-purple-400'"
        :styleTop="'w-1/3 bg-gradient-to-r from-slate-500 to-yellow-100'"
      />
      <ChartLanguage
        title="SQL"
        :styleBottom="'bg-gradient-to-r from-green-300 to-purple-400'"
        :styleTop="'w-1/2 bg-gradient-to-r from-slate-500 to-yellow-100'"
      />
    </BaseProgram>
  </div>
</template>
<script>
import ChartLanguage from "./ChartLanguage.vue";
import BaseProgram from "./BaseProgram.vue";
export default {
  components: {
    BaseProgram,
    ChartLanguage,
  },
};
</script>
