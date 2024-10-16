import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import sass from 'sass';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
            '@components': path.resolve(__dirname, './src/components/'),
            '@pages': path.resolve(__dirname, './src/pages/'),
        },
    },
    css: {
        postcss: {
            plugins: [autoprefixer({})],
        },
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        },
    },
});
