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
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["./plugins/mixins/user.js"
  ],

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
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      laravelSanctum: {
        provider:'laravel/sanctum',
        url:'http://localhost:8000',
        user:false,
        autoFetchUser: false,
        // tokenName: 'Authorization',
        // tokenType: 'Bearer',
     
        endpoints: {
          login: { url: '/api/login', method: 'post', propertyName:'data.meta.token' },
          logout: { url: '/api/logout', method: 'post' },
          // user: {url:'/api/user', method:'get', propertyName:'data'}
        }
      }
    }
  },

  // axios: {
  //   baseURL: "http://127.0.0.1:8000/api",
  //   credentials: false
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
