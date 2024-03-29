import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// vue primie imports
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import InputSwitch from 'primevue/inputswitch';
import Listbox from 'primevue/listbox';




// import css and themes
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';



const app = createApp(App);

app.use(store);
app.use(router);
app.use(PrimeVue);

app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('Checkbox', Checkbox);
app.component('InputSwitch', InputSwitch);
app.component('Listbox', Listbox);

app.mount('#app')



