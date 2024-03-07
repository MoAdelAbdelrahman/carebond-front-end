<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/logo.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/logo.png">
                    </a>
                </div>
            </div>

            <div v-if="page === 'home'">
                <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                    <router-link to="/login" class="nav-link">Login</router-link>
                    <router-link to="/register" class="nav-link">Register</router-link>
                </ul>

            </div>
            <div v-if="page === 'back'">
                <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                    <router-link to="/register" class="nav-link">Back</router-link>
                </ul>
            </div>
        </base-nav>
    </header>
</template>

<script>
import BaseNav from "@/components/BaseNav";

export default {
    components: {
        BaseNav,
    },
    props: {
        page: {
            type: String,
            default: "home",
        }
    },
    data() {
        return {};
    },
};
</script>

<style></style>
