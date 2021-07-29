import axios from "axios";
import {
    mapGetters
} from "vuex";
import constants from "../../constants";

export default {
    data() {
        return {
            postInfo: null,
            dialogTitle: "",
            dialog: false,
            isDeleteDialog: false,
            search:constants.App_Search,
            upload:constants.App_Upload,
            download:constants.App_Download,
            create:constants.App_Create,
            edit:constants.App_Edit,
            delete1:constants.App_Delete,
            post_list:constants.Post_List,
            headerList: [{
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Post Title",
                    value: "title",
                },
                {
                    text: "Post Desciption",
                    value: "description",
                },
                {
                    text: "Status",
                    value: "status",
                },
                {
                    text: "Posted User",
                    value: "created_user_id",
                },
                {
                    text: "Updated User",
                    value: "updated_user_id",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            postList: [],
            showList: [],
            title: '',
            description: '',
            status: '',
            search_data: '',
            modalShow: false,
            // open: false
        };
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
    mounted() {
        this.getAllPosts();
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        filterPosts() {
            this.showList = this.postList.filter((post) => {
                return (
                    post.title.includes(this.title) ||
                    post.description.includes(this.description) ||
                    post.created_user_id.includes(this.created_user_id)
                );
            });
        },
        postCreate() {
            this.$router.push({
                name: "post-create"
            });
        },
        update(item) {
            this.$router.push({
                name: 'post-update',
                params: {
                    id: item.id,
                }
            })
        },
        deletePost(item) {

            this.$axios
                .delete("/api/posts/" + item.id)
                .then((response) => {
                    console.log(response);
                    this.getAllPosts();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getAllPosts() {
            this.$axios
                .get("/api/posts")
                .then((response) => {
                    this.postList = response.data;
                    this.showList = this.postList;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        findPost() {
            alert("herer");
            this.$axios
                .get("/api/posts/search", {
                    params: {
                        'search_data': this.search_data
                    }
                })
                .then((response) => {
                    console.log(response.data)
                    this.postList = response.data;
                    this.showList = response.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        excelDownload() {
            axios.post("/api/exportExcel", {
                    responseType: 'blob'
                })
                .then(response => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'post.xlsx');
                    document.body.appendChild(link);
                    link.click();
                });
        },
        excelUploadPage() {
            this.$router.push({
                name: "upload_post"
            });
        }
    }
}