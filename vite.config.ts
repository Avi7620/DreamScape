import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // ✅ Ensure proper base path for static hosting
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
