
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '美术宝一对一',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=0.8' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: '美术宝一对一'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    analyze: true,
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
