import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ticket-system/',
  // base: '/',
  plugins: [react()],
  define: {
    global: 'globalThis', // Define globalThis as an empty object
  },
});
