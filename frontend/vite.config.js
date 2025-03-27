import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/realtime-weather': {
        target: 'http://localhost:5005',
        changeOrigin: true,
      },
    },
  },
});
