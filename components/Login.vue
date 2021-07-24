<template>
  <!-- <div class="flex items-center justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    this is login page
  </div> -->
  <section>
    <div class="bg-black text-white py-5 min-h-screen">
      <div class="container mx-auto flex flex-col md:flex-row my-3 md:my-24">
        <div class="flex flex-col w-full lg:w-2/4 p-8">
          <p
            class="
              text-3xl
              md:text-5xl
              my-4
              leading-relaxed
              md:leading-snug
              text-yellow-300
              tracking-loose
            "
          >
            Welcome Back!
          </p>
          <p
            class="
              text-sm
              md:text-base
              leading-snug
              text-gray-50 text-opacity-100
            "
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="flex flex-col w-full justify-center">
          <div class="container w-full px-4">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-6/12 px-4">
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
                    <h4 class="text-2xl mb-6 text-black font-semibold">
                      LOGIN
                    </h4>
                    <form id="feedbackForm" action="" method="" @submit.prevent="submit">
                      <div class="relative w-full mb-3">
                        <label
                          class="
                            block
                            uppercase
                            text-gray-700 text-xs
                            font-bold
                            mb-2
                          "
                          for="email"
                          >Email</label
                        ><input
                        v-model.trim.trim="form.email"
                          type="email"
                          name="email"
                          id="email"
                          class="
                            border-0
                            px-3
                            py-3
                            rounded
                            text-sm
                            shadow
                            w-full
                            bg-gray-300
                            placeholder-black
                            text-gray-800
                            outline-none
                            focus:bg-gray-400
                          "
                          placeholder=" "
                          style="transition: all 0.15s ease 0s"
                          autofocus
                          autocomplete="off"
                        />
                      <small class="text-red-600" v-if="errors && errors.email">{{errors.email[0]}}</small>
                      </div>
                      <div class="relative w-full mb-3">
                        <label
                          class="
                            block
                            uppercase
                            text-gray-700 text-xs
                            font-bold
                            mb-2
                          "
                          for="password"
                          >Password</label
                        ><input
                        v-model.trim="form.password"
                          type="password"
                          name="password"
                          id="password"
                          class="
                            border-0
                            px-3
                            py-3
                            rounded
                            text-sm
                            shadow
                            w-full
                            bg-gray-300
                            placeholder-black
                            text-gray-800
                            outline-none
                            focus:bg-gray-400
                          "
                          placeholder=" "
                          style="transition: all 0.15s ease 0s"
                        />
                        <small class="text-red-600" v-if="errors && errors.password">{{errors.password[0]}}</small>
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
                          LOGIN
                        </button>
                      </div>
                    </form>
                    <div class="mt-2">
                      <small
                        class="text-black text-center"
                        >Don't have an account?</small
                      >
                      <small
                        class="text-blue-600 text-center mt-2 cursor-pointer"
                        @click="GoToRegister()"
                        >Register</small
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email:'',
        password:''
      }
    }
  },
  methods: {
    GoToRegister() {
      this.$router.replace({ path: "/register" });
    },
    async submit() {
    try {
      const result = await this.$auth.loginWith("laravelSanctum", {
        data: this.form
      });
      if (result) {
          // this.$auth.setUser(result.data) 
         this.$route.push(this.$route.query.redirect || '/');
      }
    } catch (error) {
      // this.$router.replace({ path: "/login" });
    }
    
    }
  },
};
</script>
