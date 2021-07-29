import {
    mapGetters
} from "vuex";
import constants from "../../constants";
export default {
    data: () => ({
        valid: true,
        name: "",
        email: "",
        password: "",
        type: 1,
        phone: "",
        address: "",
        profile: "",
        dob: "",
        error: "",
        cancel5:constants.App_Cancel,
        confirm5:constants.App_Confirm,
        clear5:constants.App_Clear,
        header5:constants.User_Create_Confirm,
        url : this.$route.params.url,
        // validation rules for user name.
        nameRules: [
            value => !!value || "The name field is required."
        ],

        // validation rules for user email.
        emailRules: [
            value => !!value || "The email field is required.",
            value => /.+@.+\..+/.test(value) || "E-mail must be valid."
        ],
        // validation rules for password.
        passwordRules: [
            value => !!value || "The password field is required.",
            value => /^(?:(?=.*\d)(?=.*[A-Z]).*){8}$/.test(value) || "Password must be valid."
        ],

        //validation rules for confirm password.
        confirm_pwdRules: [
            value => !!value || "The confirm password field is required.",
            // value =>  same:password.test(value) || "new Password and new confirm password must be same"
        ],

        // validation rules for phone.
        phoneRules: [
            value => !!value || "Phone is required."
        ],

        // validation rules for address.
        addressRules: [
            value => !!value || "Address is required."
        ],

        // validation rules for dob.
        dobRules: [
            value => !!value || "Date of birth is required."
        ],

    }),
    computed: {
        ...mapGetters(["userId"]),
    },
    mounted() {
        console.log(this.$route.params.data)
    },
    methods: {
        store() {
            this.$axios
                .post("/api/users", {
                    name : this.$route.params.name,
                    email : this.$route.params.email,
                    address : this.$route.params.address,
                    dob : this.$route.params.dob,
                    phone : this.$route.params.phone,
                    type : this.$route.params.type,
                    password : this.$route.params.password,
                    profile : this.$route.params.profile,
                    url : this.$route.params.url,
                })
                .then(() => {
                    this.$router.push({
                        name: "user-list"
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};