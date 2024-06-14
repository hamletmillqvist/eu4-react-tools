import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/eu4-react-tools",
    plugins: [react(),tsconfigPaths()],
    define: {
        __APP_VERSION__: JSON.stringify('v1.0.0'),
    },
    publicDir: "false",
})
