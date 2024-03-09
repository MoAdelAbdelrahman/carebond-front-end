<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <a href="#/profile">
                        <div class="col card card-lift--hover shadow border-0 mb-4" style="margin: 2px;">
                            <section class="section section-skew">
                                <div class="container">
                                    <card shadow class="card-profile" no-body>
                                        <div class="px-4">
                                            <div class="card-profile-image">
                                                <img v-lazy="'img/theme/pic.jpg'" alt="Profile Image"
                                                    class="img-fluid rounded-circle">
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">John Doe</h5>
                                                <p class="card-text">Client Count: 100</p>
                                                <p class="card-text">Rating: 4.5</p>
                                            </div>
                                        </div>
                                    </card>
                                </div>
                            </section>
                        </div>
                    </a>
                </div>
                <div class="col-md-6">
                    <a href="#/profile">
                        <div class="col card card-lift--hover shadow border-0 mb-4" style="margin: 2px;">
                            <section class="section section-skew">
                                <div class="container">
                                    <card shadow class="card-profile" no-body>
                                        <div class="px-4">
                                            <div class="card-profile-image">
                                                <img v-lazy="'img/theme/pic.jpg'" alt="Profile Image"
                                                    class="img-fluid rounded-circle">
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">John Doe</h5>
                                                <p class="card-text">Client Count: 100</p>
                                                <p class="card-text">Rating: 4.5</p>
                                            </div>
                                        </div>
                                    </card>
                                </div>
                            </section>
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>

import profile from '@/views/Profile.vue'

export default {
    name: 'SeniorHome',
    data() {
        return {

        }
    },
    components: {
        profile,
    }
}
</script>
  