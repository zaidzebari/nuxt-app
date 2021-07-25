<template>
  <div class="pt-3">
    <div
      class="p-4 bg-white m-3 rounded border-l-2 border-solid border-gray-900"
    >
      <h2 class="text-2xl font-bold mb-2">
        {{ topic.title }}
      </h2>
     
      <p class="text-gray-600 text-xs">
        {{ topic.created_at }} by {{ topic.user.name }}
      </p>
       <hr/>
      <div
        v-for="(content, index) in topic.posts"
        :key="index"
        class="ml-10 mt-4"
      >
        <div class="text-xl font-bold uppercase">{{ content.body }}</div>
        <p class="text-gray-500 text-xs">
          {{ content.created_at }} by {{ content.user.name }}
        </p>
      </div>
    </div>
      <a href="" class="pl-2 underline" @click.prevent="$router.back()" >Go Back</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topic: [],
    };
  },
  async asyncData({ $axios, params }) {
    console.log(params.id);
    const { data } = await $axios.$get("/api/topics/" + params.id);
    return {
      topic: data,
    };
  },
};
</script>