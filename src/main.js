import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import moment from "moment";
import vuetify from "./plugins/vuetify";
import { BModal } from 'bootstrap-vue';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import jQuery from 'jquery';
// window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$store = store;
Vue.prototype.moment = moment;
Vue.component('b-modal', BModal);
new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
    /**
     * This is to set token to any request to server side.
     * @returns Resquest with configurations
     */
    created() {
        axios.interceptors.request.use(
            function (config) {
                if (store.state.user) {
                    // const tokenType = store.state.user.data.token_type;
                    // const token = store.state.user.data.access_token;
                    // if (token) config.headers.Authorization = `${tokenType} ${token}`;
                }
                return config;
            },
            function (error) {
                return Promise.reject(error);
            }
        );
    },
}).$mount("#app");
