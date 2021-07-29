import {
    mapGetters
} from "vuex";
import moment from "moment";
import constants from "../../constants";
export default {
    data() {
        return {
            name: '',
            email: '',
            createFrom: '',
            createTo: '',
            userInfo: null,
            dialogTitle: "",
            dialog: false,
            isDeleteDialog: false,
            headerList: [{
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Name",
                    value: "name",
                },
                {
                    text: "Email",
                    value: "email",
                },
                {
                    text: "Phone",
                    value: "phone",
                },
                {
                    text: "Date of Birth",
                    value: "dob",
                },
                {
                    text: "Address",
                    value: "address",
                },
                {
                    text: "Created at",
                    value: "created_at",
                },
                {
                    text: "Updated at",
                    value: "updated_at",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            userList: [],
            showList: [],
            search:constants.App_Search,
            create:constants.App_Create,
            header:constants.User_List,
            edit:constants.App_Edit,
            delete1:constants.App_Delete,
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn", "userName"]),
        headers() {
            if (!this.isLoggedIn) {
                return this.headerList.slice(0, this.headerList.length - 1);
            } else {
                return this.headerList;
            }
        },
    },
    mounted() {
        this.getAllUsers();
    },
    methods: {
        format(value) {
            return moment(value).format('YYYY-MM-DD')
        },
        showUser(item) {
            console.log(item)
            this.$router.push({
                name: 'userprofile',
                params: {
                    id: item.id,
                    url:item.url
                }
            })
        },
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        filterUsers() {
            this.showList = this.userList.filter((user) => {
                return (
                    user.name.includes(this.keyword) ||
                    user.email.includes(this.keyword) ||
                    // user.created_user_id.includes(this.keyword) ||
                    user.phone.includes(this.keyword) ||
                    user.dob.includes(this.keyword) ||
                    user.address.includes(this.keyword) ||
                    user.created_at.includes(this.keyword) ||
                    user.updated_at.includes(this.keyword)
                );
            });
        },
        userCreate() {
            this.$router.push({
                name: "user-create"
            });
        },
        update(item) {
            this.$router.push({
                name: 'user-update',
                params: {
                    id: item.id,
                }
            })
        },
        deleteUser(item) {

            this.$axios
                .delete("/api/users/" + item.id)
                .then(() => {
                    // console.log(response);
                    this.findUser();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        findUser() {
            this.$axios
            .get("/api/users_search", {
                    params: {
                        'name': this.name,
                        'email': this.email,
                        'start_date': this.createFrom,
                        'end_date': this.createTo,
                    }
                })
                .then((response) => {
                    this.userList = response.data;
                    this.showList = this.userList;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getAllUsers() {
            this.$axios
            .get("/api/users")
            .then((response) => {
                this.userList = response.data.data;
                this.showList = this.userList;
            })
            .catch((err) => {
                console.log(err);
            });
        },
    },

};