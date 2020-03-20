import Vue from 'vue';
import App from './app.vue';

// Display the app in the html file
new Vue({ render: h => h(App) }).$mount('#app');