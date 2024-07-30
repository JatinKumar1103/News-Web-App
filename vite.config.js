
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [react()],
    css: {
      postcss: {},
    },
    define: {
      
      'process.env.VITE_API_KEY': JSON.stringify(env.VITE_API_KEY),
      'process.env.DB_URL': JSON.stringify(env.DB_URL),
      
    },
  });
};



