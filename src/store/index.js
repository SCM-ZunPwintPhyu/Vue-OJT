import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export default new Vuex.Store({
    state: {
        user: null,
    },
    mutations: {
        setUserData(state, userData) {
            state.user = userData;
        },
    },
    actions: {
        login({ commit }, credentials) {
            return axios.post("/api/login", credentials).then(({ data }) => {
                // console.log(data);
                commit("setUserData", data);
            });
        },
        logout({ commit }, credentials) {
            return axios.post("/api/logout", credentials).then(() => {
                commit("setUserData", null);
            });
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.user,
        userType: (state) => {
            if (state.user && state.user.type) {
                return state.user.type;
            }
            // return -1;
        },
        userId: (state) => {
            if (state.user && state.user.id) {
                return state.user.id;
            }
        },
        userName: (state) => {
            if (state.user && state.user.name) {
                return state.user.name;
            }
        },
        userEmail: (state) => {
            if (state.user && state.user.email) {
                return state.user.email;
            }
        },
        userPhone: (state) => {
            if (state.user && state.user.phone) {
                return state.user.phone;
            }
        },
        userDOB: (state) => {
            if (state.user && state.user.dob) {
                return state.user.dob;
            }
        },
        userAddress: (state) => {
            if (state.user && state.user.address) {
                return state.user.address;
            }
        },
    },
    plugins: [createPersistedState()],
});
