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
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5"
                        class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <h4>Register as</h4>
                            </div>
                            <br>
                            <div class="btn-wrapper text-center">
                                <base-button size="lg" type="secondary" @click="goToSeniorForm">
                                    <img slot="icon" src="img/icons/common/senior.png"
                                        style="width: 100px; height: auto;"> SENIOR </base-button>
                            </div>
                            <br>
                            <div class="btn-wrapper text-center">
                                <base-button size="lg" type="secondary" @click="goToSeniorForm">
                                    <img slot="icon" src="img/icons/common/carePro.png"
                                        style="width: 100px; height: auto;">CARE PROVIDER</base-button>
                            </div>
                        </template>

                    </card>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: "Register",
    methods: {
        goToSeniorForm() {
            this.$router.push('/seniorForm');
        }
    }
};
</script>

<style></style>
