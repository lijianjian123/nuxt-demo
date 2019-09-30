
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'nuxt demo' },
      { hid: 'keywords', name: 'keywords', content: 'nuxt demo'}
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-icon-192x192.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/apple-icon-57x57.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/apple-icon-60x60.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/apple-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/apple-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/apple-icon-114x114.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/apple-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/apple-icon-152x152.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-icon-180x180.png'
      },
      {
        rel: 'manifest',
        href: '/manifest.json'
      }
    ]
  },

  router: {
    middleware: ['user-agent']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/normalize.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'~plugins/rem',ssr:false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],
  proxy: {
    '/land': {
      target: 'https://landapidev.meishubao.com',
      changeOrigin: true
    }
  },

  /*
  ** Build configuration
  */

  styleResources: {
    scss: './assets/scss/common.scss'
  },

  build: {
    // analyze: true,
    postcss: {
      // 添加插件名称作为键，参数作为值
      // 使用npm或yarn安装它们
      plugins: {
        'postcss-pxtorem': {
          replace: true,
          rootValue: 100,
          propList: ['*']
        }
      },
      preset: {
        // 更改postcss-preset-env 设置
        autoprefixer: {
          grid: true,
          overrideBrowserslist:[
            "defaults",
            "last 2 versions",
            "> 1%",
            "iOS 7",
            "last 3 iOS versions"
          ]
        }
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    port: 8000, // default: 3000
  }
}
