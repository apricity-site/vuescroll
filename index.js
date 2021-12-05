import { createApp } from 'vue';
import Vuescroll from './src/entry-mix-mode';

const app = createApp();
app.use(Vuescroll);
app.mount('#app');
