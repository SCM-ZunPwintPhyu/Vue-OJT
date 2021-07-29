import { mapGetters } from "vuex";
import constants from "../../constants";

export default {
    data() {
        return {
            title: constants.APP_TITLE,
            users: constants.APP_Menu1,
            user: constants.APP_Menu2,
            post: constants.APP_Menu3
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn", "userType", "userName"]),
    },
    methods: {
        /**
         * This is to log out from system.
         * @returns void
         */
        logout() {
            this.$store
                .dispatch("logout")
                .then(() => {
                    this.$router.push({ name: "login"});
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
