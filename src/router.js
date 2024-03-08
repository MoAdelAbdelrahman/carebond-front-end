import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader.vue";
import AppFooter from "./layout/AppFooter";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import seniorForm from "./views/SeniorForm.vue";
import seniorHome from "./views/SeniorHome.vue";

Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "components",
            components: {
                header: AppHeader,
                default: Landing,
                footer: AppFooter
            },
            props: {
                header: { page: "home" }
            }
        },
        {
            path: "/landing",
            name: "landing",
            components: {
                header: AppHeader,
                default: Landing,
                footer: AppFooter
            },
            props: {
                header: { page: "home" }
            }
        },
        {
            path: "/login",
            name: "login",
            components: {
                header: AppHeader,
                default: Login,
                footer: AppFooter
            },
            props: {
                header: { page: "home" }
            }
        },
        {
            path: "/register",
            name: "register",
            components: {
                header: AppHeader,
                default: Register,
                footer: AppFooter
            },
            props: {
                header: { page: "home" }
            }
        },
        {
            path: "/profile",
            name: "profile",
            components: {
                header: AppHeader,
                default: Profile,
                footer: AppFooter
            },
            props: {
                header: { page: "lgin" }
            }
        },

        {
            path: "/seniorForm",
            name: "seniorForm",
            components: {
                header: AppHeader,
                default: seniorForm,
            },
            props: {
                header: { page: "back" }
            }
        },
        {
            path: "/seniorHome",
            name: "seniorHome",
            components: {
                header: AppHeader,
                default: seniorHome,
                footer: AppFooter
            },
            props: {
                header: { page: "seniorHome" }
            }
        }

    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }
});
