import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: process.env.BASE_URL || '/ticket-system',
  base: '/',
  plugins: [react()],
  define: {
    global: 'globalThis', // Define globalThis as an empty object
  },
});
