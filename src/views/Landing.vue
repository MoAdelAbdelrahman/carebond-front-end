<template>
    <div>
        <div class="position-relative">
            <div class="item">
                <section class="section-shaped my-0">
                    <div class="shape shape-style-1 shape-default shape-skew">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="container shape-container d-flex">
                        <div class="col px-0">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h1 class="display-3  text-white">Elders' instant health and safety keeper.</h1>
                                    <p class="lead  text-white">We provide instant health and safety solution to the
                                        elders.
                                    </p>
                                </div>
                                <div class="col-lg-6 transform-perspective-right">
                                    <img src="../assets/section1.jpg" alt="Image" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <!-- 1st Hero Variation -->
            <div class="item">
                <section class="section section-lg pt-lg-0 mt-100">
                    <div class="container">
                        <div class="container shape-container d-flex">
                            <div class="col px-0">
                                <div class="row">
                                    <div class="col-lg-6 transform-perspective-left">
                                        <img src="../assets/section2.png" alt="Image" class="img-fluid">
                                    </div>
                                    <div class="col-lg-6">
                                        <h1 class="display-3">Customized and flexible nursing appointment
                                        </h1>
                                        <p class="lead">Our nurses can meet your customized schedule.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="item">
                <section class="section-shaped mt-100">
                    <div class="shape shape-style-2 shape-default shape-skew">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="container shape-container d-flex">
                        <div class="col px-0">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h1 class="display-3  text-white">Match up with the nurse you are most satisfied
                                        with
                                    </h1>
                                    <p class="lead  text-white">A variety of nurse options to serve the elderly with
                                        different personalities.</p>
                                </div>
                                <div class="col-lg-6 transform-perspective-right">
                                    <img src="../assets/section3.jpg" alt="Image" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="row row-grid align-items-center">
                            <div class="col-md-6">
                                <div class="pr-md-4">
                                    <h1>Join us Today!</h1>
                                    <p>We look forward to seeing you</p>
                                    <div>
                                        <a href="#/login">
                                            <button class="btn btn-primary">Login</button>
                                        </a>
                                        <a href="#/register">
                                            <button class="btn btn-secondary">Register</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 transform-perspective-right">
                                <img src="../assets/section4.jpg" alt="Join Us" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
export default {
    name: "home",
    components: { VueScrollSnap }
};
</script>

<style>
.item {
    /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
    min-height: 500px;
}

.scroll-snap-container {
    height: match-parent;
    width: match-parent;
}
</style>