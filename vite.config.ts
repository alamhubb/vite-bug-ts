// https://vitejs.dev/config/
import {defineConfig} from "vite";
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
    esbuild: {
        sourcemap: false,
    },
    plugins: [
        Inspect(),
    ]
})
