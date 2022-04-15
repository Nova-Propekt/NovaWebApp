import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    publicPath: process.env.NODE_ENV === "production" ? "/NovaWebApp/" : "/",
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./NovaWebApp/src',
                import.meta.url))
        }
    }
})