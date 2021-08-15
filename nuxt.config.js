export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.css'
  ],

  router:{
    middleware: ['clearValidationErrors']
  },

  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["./plugins/mixins/user.js","./plugins/mixins/validation.js", "./plugins/axios.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  
  axios: {
    credentials: true,
    baseURL:"http://localhost:8000/" // "http://localhost/webpost/public" //"http://localhost:8000", //http://192.168.1.11,
  },
  auth: {
    strategies: {
      laravelSanctum: {

        provider:'laravel/sanctum',
        url:'http://localhost:8000', //this solved, from laravel session_domain i was set localhost, here also domain should be localhost
        // user:false,
        // autoFetchUser: false,
        // tokenName: 'Authorization',
        // tokenType: 'Bearer',
        // user: {
        //   property: 'data'
        // },
        // token: {
        //   property: 'meta.token', 
        //   global: true,
        // },
        endpoints: {
          login: { url: '/api/login', method: 'post', property: 'meta.token'},
          logout: { url: '/api/logout', method: 'post' },
          user: {url:'/api/user', method:'get', property:'data' }
        },
      },
    } ,
     redirect: {
        login: '/login', //when need login go login page
        logout: '/login', // after logout got login
        home: '/dashboard' //after login successful redirect to dashboard
      },
       watchLoggedIn: true,
      // rewriteRedirects: false,
      // resetOnError: true,
      autoFetchUser: true,
      // localStorage : true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
