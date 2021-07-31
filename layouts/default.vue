<template>
  <div class="bg-indigo-200" :class="{dark : isDark}">
    <div class="bg-indigo-700 dark:bg-black dark:text-white flex justify-end">
     
      <span v-if="isDark" @click="toggle()" class="text-white mt-2 mx-2 cursor-pointer">
        <svg class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    </span>
    <span v-else @click="toggle()"  class=" text-white mt-2 mx-2 cursor-pointer">
        <svg class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    </span>

    </div>
    <nav-bar />
    <div class="bg-indigo-100 dark:bg-gray-900 px-8 min-h-screen min-w-screen">
      <Nuxt />
    </div>
    <div
      class="
        flex
        justify-center
        bg-indigo-400
        dark:bg-black
        dark:text-white
        text-white
        py-3
      "
    >
      Here is footer
    </div>
  </div>
</template>
<script>
// import MyNav from "../components/Nav"
// export default {
//   components:{
//     MyNav
//   }

// }
export default {
  name: "default",
  middleware: ["auth"],
  data() {
    return {
      isDark: false,
    }
  },
  methods: {
    toggle() {
      this.isDark = !this.isDark;
    }
  }
};
</script>