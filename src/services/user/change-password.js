import {
    mapGetters
} from "vuex";
import constants from "../../constants";
export default {

    data: () => ({
        valid: true,
        id:null,
        password: "",
        new_password: "",
        confirm_password: "",
        loginUserID:null,
        error: "",
        header:constants.Change_Password,
        confirm:constants.Confirm_Password,
        cancel:constants.App_Cancel,
    
        new_passwordRules: [
            value => !!value || "The new password field is required."
        ],

        confirm_passwordRules: [
            value => !!value || "The confirm password field is required."
        ],
    }),
    computed: {
        ...mapGetters(["isLoggedIn"]),
        headers() {
            if (!this.isLoggedIn) {
                return this.headerList.slice(0, this.headerList.length - 1);
            } else {
                return this.headerList;
            }
        },
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        updatePassword() {
            this.id = this.$route.params.id
            this.name = this.$route.params.name
            this.email = this.$route.params.email
            console.log("updatepass"+ this.id +this.name+this.email)
            this.$axios
                .post("/api/change_password/"+this.id , {
                    id: this.id,
                    password: this.password,
                    // new_password: this.new_password,
                    login_user_id: this.id,
                    name:this.name,
                    email:this.email
                })
                .then(() => {
                    console.log("this.loginUserID")
                    this.$router.push({
                        name: "user-list"
                    });
                })
        }
    },
};