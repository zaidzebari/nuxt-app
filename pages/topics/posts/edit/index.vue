<template>
    <div>
     
<div class="w-full pt-10">
      <div class="mb-10 mx-auto text-center py-2 bg-white dark:bg-gray-900 rounded-md">
        <h2 class="text-2xl font-bold dark:text-white">Post</h2>
      </div>
    </div>
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
          <h4 class="text-2xl mb-6 text-black font-semibold dark:text-white">Update Post:</h4>
          <form id="feedbackForm" action="" method="" @submit.prevent="updatePost">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                for="title"
                >Body:</label
              >
               <textarea v-model="post.body" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" placeholder="write post body" rows="4"></textarea>
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
                  border
                  border-yellow-300
                  text-yellow-300
                  text-center
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
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </div>
       <a href="" class="pl-2 underline dark:text-white" @click.prevent="$router.back()"
        >Go Back</a
      >
    </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                body:'',// this.$route.parmas.id.body
                id:'',
                created_at : '',
                user:''
            },
            topicId:'',
        }
    },
    asyncData({params}) {
        return {
            post: params.id,
            topicId: params.topicId
        }
    },
    methods: {
       async updatePost() {
          try {
           await this.$axios.$patch('api/topics/' + this.topicId +"/posts/" + this.post.id, this.post);
            this.$router.back();
          } catch (error) {
              
          }
        }
    }
}
</script>