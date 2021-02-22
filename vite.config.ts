import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy'
import { rootFontSize } from './src/utils/rem'
const postcssNormalize = require('postcss-normalize');

export default defineConfig({
  plugins: [
    reactRefresh(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    
  ],
  base:'/about',
  server:{
    port:8888
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`
      }
    },
    postcss:{
      plugins:[
        require('postcss-pxtorem')({
          rootValue : rootFontSize,
          selectorBlackList  : [], //过滤
          propList   : ['*'],
        }),
        postcssNormalize()
      ]
    }
  },
  resolve: {
    alias:{
      '@':'/src',
      'img':'/src/images'
    }
  },
  build:{
    outDir:'build',
    target:'es2015'
  }
})
