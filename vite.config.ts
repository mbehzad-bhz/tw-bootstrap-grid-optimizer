import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from "@rollup/plugin-eslint"
import PurgeIcons from 'vite-plugin-purge-icons';
import compress from 'vite-plugin-compression';
import WindiCSS from 'vite-plugin-windicss';
import imagemin from 'vite-plugin-imagemin';
import { visualizer } from 'rollup-plugin-visualizer';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    { ...eslint({include: 'src/**/*.+(js|jsx|ts|tsx)'}), enforce: 'pre'},
    PurgeIcons(),
    compress(),
    WindiCSS(),
    imagemin(),
    visualizer(),
  ],
  build: {
    sourcemap: true
  }
})


