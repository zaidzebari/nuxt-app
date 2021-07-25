<template>
  <div
    class="
      flex flex-row
      justify-between
      items-center
      pl-4
      py-2
      bg-indigo-700
      text-white
      sticky
      top-0
      z-50
    "
  >
  <nuxt-link to="/" class="text-4xl font-bold cursor-pointer text-white">Nuxt Post</nuxt-link>

    <!-- <div class="text-4xl font-bold cursor-pointer">Nuxt Post</div> -->
    <div>
      <ul class="space-x-3 flex items-center pr-3">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/users">Users</nuxt-link></li>
        <li><nuxt-link to="/topics">Posts</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
    <template v-if="!authenticated">
        <li><nuxt-link to="/login">Login</nuxt-link></li>
        <li><nuxt-link to="/register">Register</nuxt-link></li>
    </template>
    <template v-else>

        <li  class="cursor-pointer"><nuxt-link to="/dashboard">{{user.data != null ? user.data.name : ''}}</nuxt-link></li>
        <li  class="cursor-pointer" @click.prevent="logout">Logout</li>
    </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>
<style>
a.nuxt-link-active:last-child {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active:last-child {
  color: #00c58e;
}
</style>