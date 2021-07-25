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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    baseURL: "http://localhost:8000",
  },
  auth: {
    strategies: {
      laravelSanctum: {

        provider:'laravel/sanctum',
        url:'http://localhost:8000',
        // user:false,
        // autoFetchUser: false,
        // tokenName: 'Authorization',
        // tokenType: 'Bearer',
     
        endpoints: {
          login: { url: '/api/login', method: 'post', propertyName:'meta.token' },
          logout: { url: '/api/logout', method: 'post' },
          user: {url:'/api/user', method:'get', propertyName:'data'}
        },
         
      },
     
    
     
    } ,
     redirect: {
        login: '/login', //when need login go login page
        logout: '/login', // after logout got login
        home: '/profile' //after login successful redirect to profile
      },
       watchLoggedIn: true,
      // rewriteRedirects: false,
      // resetOnError: true,
      autoFetchUser: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
