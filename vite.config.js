import vue from '@vitejs/plugin-vue';

export default {
  resolve: {
    alias: {
      vue: '@vue/compat',
      mode: './src/mode',
      core: './src/core',
      shared: './src/shared',
      src: './src',
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    })
  ]
};
