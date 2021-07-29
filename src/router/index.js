import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import PostCreate from "../pages/post/PostCreate";
import PostCreateConfirm from "../pages/post/PostCreateConfirm";
import PostUpdate from "../pages/post/PostUpdate";
import PostUpdateConfirm from "../pages/post/PostUpdateConfirm";
import UploadPost from "../pages/post/UploadPost"
import UserList from "../pages/user/UserList";
import UserCreate from "../pages/user/UserCreate";
import UserCreateConfirm from "../pages/user/UserCreateConfirm";
import UserUpdate from "../pages/user/UserUpdate";
import UserUpdateConfirm from "../pages/user/UserUpdateConfirm"
import ChangePassword from "../pages/user/ChangePassword"
import UserProfile from "../pages/user/UserProfile"
import MyProfile from "../pages/user/MyProfile"
import store from "../store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/logout",
        name: "logout",
        component: Login,
    },
    {
        path: "/change_password",
        name: "change_password",
        component: ChangePassword,
    },
    {
        path: "/post/list",
        name: "post-list",
        component: PostList,
    },
    {
        path: "/post/create",
        name: "post-create",
        component: PostCreate,
    },
    {
        path: "/post/create_confirm",
        name: "post_create_confirm",
        component: PostCreateConfirm,
    },
    {
        path: "/post/update/:id",
        name: "post-update",
        component: PostUpdate,
    },
    {
        path: "/post/update_confirm",
        name: "post_update_confirm",
        component: PostUpdateConfirm,
    },
    {
        path: "/upload_post",
        name: "upload_post",
        component: UploadPost,
    },
    {
        path: "/",
        redirect: "/post/list",
    },
    {
        path: "/user/list",
        name: "user-list",
        component: UserList,
    },
    {
        path: "/user/create",
        name: "user-create",
        component: UserCreate,
    },
    {
        path: "/user/create_confirm",
        name: "user_create_confirm",
        component: UserCreateConfirm,
    },
    {
        path: "/user/update",
        name: "user-update",
        component: UserUpdate,
    },
    {
        path: "/user/update_confirm",
        name: "user_update_confirm",
        component: UserUpdateConfirm,
    },
    {
        path: "/user_profile/:id",
        name: "userprofile",
        component: UserProfile,
    },
    {
        path: "/my_profile",
        name: "my-profile",
        component: MyProfile,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

/**
 * This is to handle and check authentication for routing.
 */
router.beforeEach((to, from, next) => {
    const loggedIn = store.getters.isLoggedIn;
    if (!loggedIn && to.name != "login") {
        return next("/login");
    }
    next();
});

export default router;