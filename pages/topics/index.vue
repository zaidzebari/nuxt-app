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
        <div class="flex justify-between flex-row">
          <div class="text-xl font-bold uppercase text-blue-600">
            {{ content.body }}
          </div>
          <div class="flex-none flex justify-between">
            <span
              ><button
                @click="likePost(topic.id, content)"
                class="
                  fa fa-thumbs-up
                  border
                  text-blue-600
                  hover:bg-blue-600
                  hover:text-white
                  border-blue-600
                  text-center
                  py-1
                  px-2
                  rounded
                "
              >
                <span class="mx-2">{{ content.like_count }}</span>
              </button>
            </span>
          </div>
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
    try {
      const { data, links } = await $axios.$get("/api/topics"); 
      return {
      topics: data,
      //    links: links,
      links,
    };
    } catch (error) {
      
    }
    //    const {data} = await $axios.$get('/api/topics'); this if only we want data
    // console.log(response);
   
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
        if (confirm("are sure to delete?")) {
          await this.$axios.$delete("api/topics/" + id);
          this.topics = this.topics.filter((item) => {
            return item.id != id;
          });
        }
      } catch (error) {}
      console.log(id);
    },
    async likePost(topicId, post) {
      const userFromVuex = this.$store.getters["user"];
      if (userFromVuex) {
        //this is for post own like
        if (userFromVuex.data.id == post.user.id) {
          alert("You can not like your own post");
          return;
        }
        //if user has already liked
        if (post.users) {
          if (post.users.some((user) => user.id == userFromVuex.data.id)) {
            alert("you have already liked this post");
            return;
          } else {
            // now send request
            await this.$axios.$post(
              "api/topics/" + topicId + "/posts/" + post.id + "/likes"
            );
            const { data, links } = await this.$axios.$get("/api/topics");
            this.topics = data;
            this.links = links;
          }
        }
      } else {
        alert("you are not logged in");
        this.$router.push("/login");
      }
      console.log(userFromVuex);
      //  await this.$axios.$post("api/topics/" + id);
    },
  },
};
</script>