import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/realtime-weather': {
        target: 'http://localhost:5005',
        changeOrigin: true,
      },
      '/forecast-weather': {
        target: 'http://localhost:5005',
        changeOrigin: true,
      },
    },
  },
});
