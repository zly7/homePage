import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import IconsResolver from 'unplugin-icons/resolver'
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver,AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// import Icons from 'unplugin-icons/vite'

// import Inspect from 'vite-plugin-inspect'

//修改这个文件能很轻松引入ant-design-view


export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  // console.log(env)
  return { 

    plugins: [vue(),
    AutoImport({
      resolvers: [  ElementPlusResolver(),
      // 自动导入图标组件
      // IconsResolver({
      //   prefix: 'Icon',
      // }),
    ],
      
    }),
    Components({
      resolvers: [ElementPlusResolver(),AntDesignVueResolver(),
      // // Auto register icon components
      // // 自动注册图标组件
      // IconsResolver({enabledCollections: ['ep'],}),
    ],
    }),
    // Icons({
    //   autoInstall: true,
    // }),
    // Inspect(),
    
  ],
    server: {
      host: '0.0.0.0',
      port: 8080,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(),
//     Components({
//       resolvers: [AntDesignVueResolver()]
//     })],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })
