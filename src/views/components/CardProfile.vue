<template>
    <div class="col-md-6">
        <div class="card card-lift--hover shadow border-0 mb-4  bg-gradient-gray" style="margin: 2px; max-width: 400px">
            <section class="section section-skew">
                <div class="container">
                    <card shadow class="card-profile" no-body>
                        <div class="px-4">
                            <div class="card-profile-image text-center">
                                <img v-lazy="profileImagePath" alt="Profile Image" class="img-fluid rounded-circle"
                                    style="width: 100px; height: 100px; margin-top: 10px;">
                            </div>
                            <div class="card-body">
                                <div class="text-center">
                                    <h3 class="card-title" style="font-size: 24px; font-weight: 600;">{{ profileName }}</h3>
                                </div>
                                <div class="row">
                                    <div class="col text-center">
                                        <p class="card-text" style="color: #999999; font-weight: lighter;">Clients</p>
                                        <h4 class="card-text" style="font-weight: 500;">{{ clientCount }}</h4>
                                    </div>
                                    <div class="col text-center">
                                        <p class="card-text" style="color: #999999; font-weight: lighter;">Rating</p>
                                        <h4 class="card-text" style="font-weight: 500; color: green;">{{ rating }}</h4>
                                    </div>
                                </div>
                                <div class="text-center mt-4">
                                    <a href="#/profile">
                                        <base-button class="btn-primary">View Profile</base-button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </card>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
defineProps({
    profileName: String,
    profileImagePath: String,
    clientCount: Number,
    rating: Number
})
</script>