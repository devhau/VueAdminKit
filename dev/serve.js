import { createApp } from 'vue';
import Dev from './serve.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
import VueAdminKit from '@/entry.esm';

const app = createApp(Dev);
app.use(VueAdminKit);

app.mount('#app');
