import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        register: 'auth/register/index.html',
        login: 'auth/login/index.html',
      },
    },
  },
});
