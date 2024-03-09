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
                <cardprofile/>
            </div>
        </div>
    </section>
</template>

<script>

import cardprofile from './components/CardProfile.vue'

export default {
    name: 'SeniorHome',
    data() {
        'img/theme/pic.jpg'
        return {

        }
    },
    components: {
        cardprofile,
    }
}
</script>
  