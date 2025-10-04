import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import path from "path";
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const baseUrl = mode == 'production' ? env.BASE_URL : '/'
  return {
    base: baseUrl,
    plugins: [
      vue(),
      eslint(),
      vueI18n({
        include: path.resolve(__dirname, './src/locales/**')
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      },
    },
  }
})
