import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  // ...
  build: {
    outDir: 'dist', // ou 'docs' si tu préfères
  },
  base: '/ski-booking-rendezvous/', // important pour GitHub Pages
});