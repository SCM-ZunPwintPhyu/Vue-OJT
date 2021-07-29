import {
    mapGetters
} from "vuex";
export default {

    data: () => ({
        user: null,
        id: '',

    }),
    computed: {
        ...mapGetters(["isLoggedIn"]),
    },
    mounted() {
        this.id = this.$route.params.id
        this.$axios
            .get("/api/users/" + this.id)
            .then((response) => {
                console.log(response.data)
                this.user = response.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        update(item) {
            this.$router.push({
                name: 'user-update',
                params: {
                    id: item.id,
                }
            })
        },
    },
};