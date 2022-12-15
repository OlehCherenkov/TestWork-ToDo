import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast, { timeout: 5000 });

window.Vue = require('vue').default;

import App from  './layouts/App';
import store from './store';

import './assets/scss/main.scss'

new Vue({
    store,
    el: '#app',
    render: h => h(App)
});
