<template>
  <div>
    <div class="w-full pt-10">
      <div class="mb-10 mx-auto text-center py-2 bg-white rounded-md">
        <h2 class="text-2xl font-bold">Topic</h2>
      </div>
    </div>
    <div class="w-full md:w-2/4 mx-auto mt-10">
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
        "
      >
        <div class="flex-auto p-5 lg:p-10">
          <h4 class="text-2xl mb-6 text-black font-semibold">Update Topic:</h4>
          <form id="feedbackForm" action="" method="" @submit.prevent="update">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                for="title"
                >Title:</label
              ><input
                v-model="topic.title"
                type="text"
                name="title"
                id="title"
                class="
                  border-0
                  px-3
                  py-3
                  rounded
                  text-sm
                  shadow
                  w-full
                  bg-whtie
                  text-gray-800
                  outline-none
                  placeholder-gray-500
                "
                placeholder="write topic title"
                style="transition: all 0.15s ease 0s"
                autofocus
                autocomplete="off"
              />
              <small class="text-red-600" v-if="errors && errors.title">{{
                errors.title[0]
              }}</small>
            </div>
            <div class="text-center mt-6">
              <button
                id="feedbackBtn"
                class="
                  bg-yellow-300
                  text-black text-center
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <a href="" class="pl-2 underline" @click.prevent="$router.back()"
        >Go Back</a
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topic: {
        title: "",
      },
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.$get("/api/topics/" + params.id);
    return {
      topic: data,
    };
  },
  methods: {
    async update() {
      try {
          await this.$axios.$patch("/api/topics/" + this.$route.params.id, this.topic);
      } catch (error) {
          
      }
      this.$router.back();
      console.log("just updated");
    },
  },
};
</script>