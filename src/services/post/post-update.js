import {
    mapGetters
} from "vuex";
import constants from "../../constants";
export default {
    data: () => ({
        valid: true,
        id: '',
        title: "",
        description: "",
        status: '',
        error: "",
        header:constants.User_Update,
        cancel:constants.App_Cancel,
        confirm:constants.App_Confirm,
        clear:constants.App_Clear,

        // validation rules for title
        titleRules: [
            value => !!value || "The title field is required."
        ],
        // validation rules for title
        descriptionRules: [
            value => !!value || "The description field is required."
        ],
    }),
    mounted() {
        this.id = this.$route.params.id
        this.$axios
            .get("/api/posts/" + this.id)
            .then((response) => {
                this.title = response.data.title
                this.description = response.data.description
                this.status = response.data.status
            })
            .catch((err) => {
                console.log(err);
            });
    },
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
        clearData() {
            this.title = ''
            this.description = ''
        },

        postUpdate() {
            this.$router.push({
                name: 'post_update_confirm',
                params: {
                    id: this.id,
                    title: this.title,
                    description: this.description,
                    status: this.status,

                }
            })
        }

    },
};
