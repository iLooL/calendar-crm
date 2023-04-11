// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

// // https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// vite.config.js

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     middlewareMode: 'html',
//     configureServer: ({ app }) => {
//       app.use((req, res, next) => {
//         res.setHeader('Referrer-Policy', 'no-referrer-when-downgrade');
//         next();
//       });
//     },
//   },
// });