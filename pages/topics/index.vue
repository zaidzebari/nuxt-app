<template>
  <div class="container pt-4">
    <div
      v-for="(topic, index) in topics"
      :key="index"
      class="p-4 bg-white m-3 rounded border-l-2 border-solid border-gray-900"
    >
      <h2 class="text-2xl font-bold mb-2 hover:underline">
        <nuxt-link :to="{ name: 'topics-id', params: { id: topic.id } }">{{
          topic.title
        }}</nuxt-link>
      </h2>

      <div v-if="user.data.id === topic.user.id" class="text-right">
        <nuxt-link :to="{ name: 'topics-edit', params: { id: topic.id } }">
          <button
            class="
              fa fa-edit
              border
              text-green-600
              hover:bg-green-600
              hover:text-white
              border-green-600
              text-center
              py-1
              my-2
              px-2
              rounded
            "
          ></button>
        </nuxt-link>
        <button
          @click="remove(topic.id)"
          class="
            fa fa-remove
            border
            text-red-600
            hover:bg-red-600
            hover:text-white
            border-red-600
            text-center
            py-1
            my-2
            px-2
            rounded
          "
        ></button>
      </div>

      <p class="text-gray-600 text-xs">
        {{ topic.created_at }} by {{ topic.user.name }}
      </p>
      <div
        v-for="(content, index) in topic.posts"
        :key="index"
        class="ml-10 mt-4"
      >
        <div class="text-xl font-bold uppercase text-blue-600">
          {{ content.body }}
        </div>
        <p class="text-gray-500 text-xs">
          {{ content.created_at }} by {{ content.user.name }}
        </p>
      </div>
    </div>
    <nav>
      <ul class="flex justify-center items-center">
        <li
          v-for="(key, value, index) in links"
          :key="index"
          @click="loadMore(key)"
          class="
            bg-white
            px-2
            rounded
            py-1
            cursor-pointer
            border border-gray-900
            mb-3
            ml-1
          "
        >
          {{ value }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [],
      links: [],
    };
  },
  async asyncData({ $axios }) {
    const { data, links } = await $axios.$get("/api/topics");
    //    const {data} = await $axios.$get('/api/topics'); this if only we want data
    // console.log(response);
    return {
      topics: data,
      //    links: links,
      links,
    };
  },
  methods: {
    async loadMore(key) {
      if (key != null) {
        const { data } = await this.$axios.$get(key);
        return (this.topics = { ...this.topics, ...data }); //spread out the topics and then add new once
      }
    },
    async remove(id) {
      try {
        if (confirm('are sure to delete?')) {
          await this.$axios.$delete("api/topics/" + id);
        this.topics = this.topics.filter((item) => {
          return item.id != id;
        });
        }
      } catch (error) {}
      console.log(id);
    },
  },
};
</script>