<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/logo.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <img style="-webkit-filter: invert(1); filter: invert(1);" src="img/brand/logo.png">
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
            <div v-if="page === 'seniorHome'">
                <ul class="navbar-nav ml-lg-auto">
                    <li class="nav-item">
                        <a class="nav-link nav-link-icon" href="#">
                            <i class="ni ni-circle-08"></i>
                            <span class="nav-link-inner--text">Profile</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-icon" href="#">
                            <i class="ni ni-collection"></i>
                            <span class="nav-link-inner--text">Past Appointments</span>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="ni ni-settings-gear-65"></i>
                            <span class="nav-link-inner--text">Settings</span>
                        </a>
                    </li>
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
