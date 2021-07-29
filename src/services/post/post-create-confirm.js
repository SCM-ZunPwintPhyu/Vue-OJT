import { mapGetters } from "vuex";
import constants from "../../constants";
export default {
    data: () => ({
        valid: true,
        title: "",
        description: "",
        error: "",
        header:constants.Post_Create_Confirm,
        cancel:constants.App_Cancel,
        create:constants.App_Create,
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

    computed: {
        ...mapGetters(["userId"]),
    },

    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
         store(){
            this.$axios
            .post("/api/posts", {
                title : this.$route.params.title,
                description : this.$route.params.description,
            })
            .then(() => {
                this.$router.push({ name: "post-list" });
            })
            .catch((err) => {
                console.log(err);
            });
         }
          
    },
};
