import constants from "../../constants";
export default {
    data: () => ({
        valid: true,
        id:'',
        title:'',
        description: '',
        status : '',
        error: "",
        header:constants.Post_Update_Confirm,
        cancel:constants.App_Cancel,
        create:constants.App_Create,
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
        this.title =this.$route.params.title
        this.description =this.$route.params.description
        this.status =this.$route.params.status
        
    },
    
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
         clear () {
             this.title = ''
             this.description = ''
          },
          updatePost(){
            this.$axios
            .put("/api/posts/"+this.id , {
                title : this.title,
                description : this.description,
                status: this.status,
                updated_user_id : 1,

            })
            .then((response) => {
                console.log(response)
                this.$router.push({ name: "post-list" });
             
            })
    },
},
};
