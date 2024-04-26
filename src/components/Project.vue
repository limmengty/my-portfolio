<template>
  <div id="project">
    <div>
      <h1
        class="text-2xl font-bold md:text-3xl xl:text-3xl mt-10 dark:text-gray-light text-black"
        data-aos="fade-right"
      >
        Project
      </h1>
    </div>
    <div
      data-aos="fade-right"
      class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 my-10 cursor-pointer"
    >
      <div class="p-1 hover:-rotate-2 hover:scale-105  hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  shadow-xl transition hover:bg-[length:100%_100%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
        <a
        href="https://github.com/MengTy199/laravel-student-management-systems"
        target="_blank"
        rel="noopener noreferrer"
        class=""
      >
        <div class="rounded-[10px] bg-white dark:bg-gray-900">
          <img
            src="../assets/students.png"
            alt="students"
            class="rounded-[10px] hover:transition-all object-cover "
          />
        </div>
      </a>
      </div>      
      <div class=" overflow-hidden p-1 hover:-rotate-2 hover:scale-105  hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
        <a
        href="https://mt-reaction-timer.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        class=""
      >
        <div class="rounded-[10px] bg-white dark:bg-gray-900">
          <img
            src="../assets/reaction-timer.png"
            alt="students"
            class="rounded-[10px] hover:transition-all object-cover h-full w-full "
          />
        </div>
      </a>
      </div>
      <!-- <a
        href="https://mt-reaction-timer.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:-rotate-2 hover:scale-105 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
      >
        <div class="rounded-[10px] bg-white dark:bg-gray-900">
          <img
            src="../assets/reaction-timer.png"
            alt="reactions-timer"
            class="rounded-[10px] hover:transition-all  "
          />
        </div>
      </a> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>
