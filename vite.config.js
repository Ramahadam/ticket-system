import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: proce.env.BASE_URL || '/ticket-system',
  plugins: [react()],
  define: {
    global: 'globalThis', // Define globalThis as an empty object
  },
});
