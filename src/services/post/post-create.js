import { mapGetters } from "vuex";
import constants from "../../constants";
export default {
   
    data: () => ({
        valid: true,
        title: "",
        description: "",
        error: "",
        cancel:constants.App_Cancel,
        confirm:constants.App_Confirm,
        clear:constants.App_Clear,
        header:constants.Post_Create,
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
        ...mapGetters(["isLoggedIn"]),
        headers() {
            if (!this.isLoggedIn) {
                return this.headerList.slice(0, this.headerList.length - 1);
            } else {
                return this.headerList;
            }
        },
    },
    mounted() {
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
          confirmPage(event) {
              alert(event);
              event.preventDefault()
              this.$router.push({ 
                  name: 'post_create_confirm',
                  params: { 
                       title: this.title ,
                       description : this.description
                 }
                })

          },
          clearData() {
             this.title = ''
             this.description = ''
          },

        
    },
};
