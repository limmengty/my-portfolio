<template>
  <div id="project">
    <div>
      <h1
        class="before:block before:content-[''] before:rotate-3 before:w-24 before:mt-4 before:border-2 before:border-yellow-600 after:block after:content-[''] after:rotate-3 w-8 after:mt-4 after:border-2 after:border-indigo-600 text-2xl font-bold md:text-3xl xl:text-3xl mt-10 dark:text-gray-light text-black"
        data-aos="fade-right"
      >
        Project
      </h1>
    </div>
    <div
      data-aos="fade-right"
      class="grid grid-cols-1 gap-6 md:gap-10 xl:grid-cols-2 xl:gap-8 my-10 cursor-pointer"
    >
      <div
        class="md:min-h-96 md:min-w-96 p-1 hover:-rotate-2 hover:scale-105 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 shadow-xl transition hover:bg-[length:100%_100%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
      >
        <a
          href="https://github.com/MengTy199/laravel-student-management-systems"
          target="_blank"
          rel="noopener noreferrer"
          class="min-h-96"
        >
          <div class="rounded-[10px] bg-white dark:bg-gray-900">
            <img
              src="../assets/students.png"
              alt="students"
              class="rounded-[10px] hover:transition-all object-contain md:min-h-96"
            />
          </div>
        </a>
      </div>
      <div
        class="md:min-h-96 md:min-w-96 p-1 hover:-rotate-2 hover:scale-105 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 shadow-xl transition hover:bg-[length:100%_100%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
      >
        <a
          href="https://mt-reaction-timer.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="min-h-96"
        >
          <div class="rounded-[10px] bg-white dark:bg-gray-900">
            <img
              src="../assets/reaction-timer.png"
              alt="students"
              class="rounded-[10px] hover:transition-all object-contain md:min-h-96"
            />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
