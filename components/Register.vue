<template>
  <!-- <div class="flex items-center justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    this is login page
  </div> -->
  <section>
    <div class="bg-black text-white py-5 min-h-screen">
      <div class="container mx-auto flex flex-col md:flex-row my-2 md:my-10">
        <div class="flex flex-col w-full lg:w-2/4 p-4">
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
            Welcome!
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
                      REGISTER
                    </h4>
                    <form id="feedbackForm" action="" method="">
                      <div class="relative w-full mb-3">
                        <label
                          class="
                            block
                            uppercase
                            text-gray-700 text-xs
                            font-bold
                            mb-2
                          "
                          for="userName"
                          >User Name</label
                        ><input
                          v-model="form.name"
                          type="text"
                          name="userName"
                          id="userName"
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
                        <small class="text-red-600">show error here</small>
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
                          for="email"
                          >Email</label
                        ><input
                          v-model="form.email"
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
                          
                        />
                        <small class="text-red-600">show error here</small>
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
                          v-model="form.password"
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
                        <small class="text-red-600">show error here</small>
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
                          @click="submit"
                        >
                          REGISTER
                        </button>
                      </div>
                    </form>
                    <div class="mt-2">
                      <small class="text-black text-center"
                        >Already have an account?</small
                      >
                      <small
                        class="text-blue-600 text-center mt-2 cursor-pointer"
                        @click="GoToLogin()"
                        >Login</small
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
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    GoToLogin() {
      this.$router.replace({ path: "/login" });
    },
    async submit() {
      try {
         await this.$axios.$get("sanctum/csrf-cookie");
        await this.$axios
          .post("api/register", this.form)
          .then(function (resp) {
            console.log(resp);
          })
          .catch(function (err) {
            console.log(err);
          });
      } catch (error) {
        
      }
       

        // await this.$axios.get("/sanctum/csrf-cookie");
        // await this.$axios.post("/api/register", this.form);
        // const result = await this.$auth.loginWith("laravelSanctum", {
        //   data: {
        //     email: this.form.email,
        //     password: this.form.password,
        //   },
        // });
        // if (result) {
        //   this.$auth.setUser(result.data);
        //   this.$router.push({ path: "/" });
        // }
        // this.$router.replace({ path: "/login" });
    },
  },
};
</script>
