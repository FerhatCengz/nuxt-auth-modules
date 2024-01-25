const bodyParser = require('body-parser');
export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-auth-modules',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: {url: '/api/auth/login', method: 'post'},
          logout: {url: '/api/auth/logout', method: 'post'},
          user: {url: '/api/auth/user', method: 'post'},
        },
      },
      google: {
        clientId: '68558145813-959436nlciqg26ir1jvmpnoindro62m4.apps.googleusercontent.com',
        codeChallengeMethod: "",
        responseType: "id_token token",

      },
    },
  },
  /*Cookie :
   auth: {
      strategies: {
        local: {
          token: {
            required: false,
            type: false
          },
          endpoints: {
            login: {url: '/api/auth/login', method: 'post'},
          }
        }
      }
    },
  * */
  serverMiddleware: [
    bodyParser.json(),
    "~/api/auth",
    "~/api",
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
