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
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <large>Register as</large>
                            </div>
                            <br>
                            <div class="btn-wrapper text-center">
                                
                                <button type="button" class="btn btn-outline-default">
                                    <img slot="icon" src="img/icons/common/senior.png" style="width: 50px; height: auto;">
                                    SENIOR</button>
                                        
                                    
                            </div>
                            <br>
                            
                            <div class="btn-wrapper text-center">
                                
                                <button type="button" class="btn btn-outline-default">
                                    <img slot="icon" src="img/icons/common/carepro.png"  style="width: 50px; height: auto;">
                                    CARE PROVIDER</button>
                                        
                                    
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
    name: "Register"
};
</script>
<style>
</style>
