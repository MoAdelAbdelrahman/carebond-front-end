import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader.vue";
import AppFooter from "./layout/AppFooter";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import SeniorForm from "./views/SeniorForm.vue";
import nurseForm from "./views/nurseForm.vue";
import seniorHome from "./views/SeniorHome.vue";
import nurseHome from "./views/nurseHome.vue";

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
            path: "/profile/",
            name: "profile",
            components: {
                header: AppHeader,
                default: Profile,
                footer: AppFooter
            },
            props: {
                props: (route) => ({ id: route.query.id })
            }
        },

        {
            path: "/seniorForm",
            name: "seniorForm",
            components: {
                header: AppHeader,
                default: SeniorForm,
            },
            props: {
                header: { page: "back" }
            }
        },
        {
            path: "/nurseForm",
            name: "nurseForm",
            components: {
                header: AppHeader,
                default: nurseForm,
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
        },
        {
            path: "/nurseHome",
            name: "nurseHome",
            components: {
                header: AppHeader,
                default: nurseHome,
                footer: AppFooter
            },
            props: {
                header: { page: "nurseHome" }
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
