import constants from "../../constants";
export default {
    data() {
        return {
          error: {},
          import_file: constants.Import_File,
          cancel: constants.App_Cancel,
        }
      },
    methods: {
        importExcel(){
            let import_form = document.querySelector('#importForm');
            let data = new FormData(import_form);
            this.$axios.post('/api/importExcel', data)
            .then((response)=>{
                console.log(response);
                this.$router.push({ name: "post-list" });
            })
        }










  },
};
