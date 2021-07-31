<template>
  <div class="pt-3">
    <div
      class="p-4 bg-white mt-2 rounded dark:bg-gray-900 border-l-2 border-solid border-gray-900"
    >
      <h2 class="text-2xl font-bold mb-2 uppercase dark:text-white">
        {{ topic.title }}
      </h2>

      <p class="text-gray-600 text-xs ">
        {{ topic.created_at }} by {{ topic.user.name }}
      </p>
      <hr />
      <div
        v-for="(content, index) in topic.posts"
        :key="index"
        class="ml-10 mt-4"
      >
        <div v-if="user.data.id === content.user.id" class="text-right">
          <nuxt-link
            :to="{ name: 'topics-posts-edit', params: { id: content, topicId :topic.id } }"
          >
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
            @click="deletePost(content.id)"
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

        <div class="text-xl font-bold dark:text-white">{{ content.body }}</div>
        <p class="text-gray-500 text-xs">
          {{ content.created_at }} by {{ content.user.name }}
        </p>
      </div>
    </div>
    <a href="" class="pl-2 underline dark:text-white" @click.prevent="$router.back()"
      >Go Back</a
    >

    <!-- this is for  -->
    <div class="w-full mx-auto mt-10">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          w-full
          mb-4
          shadow-lg
          rounded-lg
          bg-white
          dark:bg-gray-900
        "
      >
        <div class="flex-auto p-5 lg:p-10">
          <h4 class="text-2xl mb-6 text-black font-semibold dark:text-white">Add Post:</h4>
          <form id="feedbackForm" action="" method="" @submit.prevent="addPost">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2 dark:text-white"
                for="title"
                >Body:</label
              >
              <textarea
                v-model="post.body"
                class="
                  w-full
                  px-3
                  py-2
                  text-gray-700
                  border
                  rounded-lg
                  focus:outline-none
                "
                placeholder="write post body"
                rows="4"
              ></textarea>
              <small class="text-red-600" v-if="errors && errors.body">{{
                errors.body[0]
              }}</small>
            </div>
            <div class="text-center mt-6">
              <button
                id="feedbackBtn"
                class="
                  hover:bg-yellow-300
                  hover:text-black
                  border border-yellow-300
                  text-yellow-300 text-center
                  mx-auto
                  active:bg-yellow-400
                  text-sm
                  font-bold
                  uppercase
                  px-6
                  py-3
                  rounded
                  shadow
                  hover:shadow-lg
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                "
                type="submit"
                style="transition: all 0.15s ease 0s"
              >
                POST
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topic: [],
      post: {
        body: "",
      },
    };
  },
  async asyncData({ $axios, params }) {
    console.log(params.id);
    const { data } = await $axios.$get("/api/topics/" + params.id);
    return {
      topic: data,
    };
  },
  methods: {
    async addPost() {
      try {
        const { data } = await this.$axios.$post(
          "api/topics/" + this.$route.params.id + "/posts/",
          this.post
        );
        if (data) {
          this.topic.posts.push(data);
          this.post.body = "";
        }
      } catch (error) {}
      // or we can get topic is instead of route
      // console.log(this.topic.id);
    },
    async deletePost(id) {
      try {
        if (confirm("are sure to delete?")) {
          await this.$axios.$delete(
            "api/topics/" + this.$route.params.id + "/posts/" + id
          );
          this.topic.posts = this.topic.posts.filter((item) => {
            return item.id != id;
          });
        }
      } catch (error) {}
    },
  },
};
</script>