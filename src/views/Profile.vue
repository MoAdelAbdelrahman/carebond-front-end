<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="picture" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="row-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                <base-button :type="buttonType" icon="ni ni-briefcase-24" @click="toggleModal"> Book appointment</base-button>
                                  
                            </div>
                            <div>
                                <Modal v-if="showModal" :times="times" :name="name" @close="toggleModal"></Modal>

                            </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">{{clientsCount}}</span>
                                        <span class="description">Clients</span>
                                    </div>

                                    <div>
                                        <span class="heading">{{rating}}</span>
                                        <span class="description">Rating</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>{{name}}
                                <span class="font-weight-light">{{age}}</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Edmonton, Canada</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>{{postion}} </div>

                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>{{description}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>

<script>
import Modal from './Modal.vue';
import axios from 'axios';

export default {
    mounted() {
        
        this.fetchProfile(this.$route.query.id);
        this.fetchSechdule(this.$route.query.id);
        
        console.log(this.times);
    },


    name: "Profile",
    
    data(){
        return{
            
            picture: '',
            name:  '',
            clientsCount:  '',
            rating:    '',
            age:    '',
            postion: '',
            description: '',
            showModal: false,
            buttonType: "primary",
            showBookingConfirmationModal: false,
            bookingMessage: '',
            times: [],
        }
    },
    components:{
        Modal,
    },
    methods:{
        toggleModal() {
        this.showModal = !this.showModal;
        this.buttonType = this.buttonType === 'primary' ? 'secondary' : 'primary';
        
    },
    async fetchProfile(id) {
        await axios.get(`https://sbeve.mooo.com/api/profile/${id}`)
            .then(response => {
                this.picture = response.data.image;
                this.name = response.data.first_name + ' ' + response.data.last_name;
                this.clientsCount = response.data.client_count;
                this.rating = response.data.rating;
                this.age = response.data.age;
                this.postion = response.data.occupation;
                this.description = response.data.biography;
            })
            .catch(error => {
                console.log(error)
            })
    
    },
    async fetchSechdule(id) {
        await axios.get(`https://sbeve.mooo.com/api/schedule/${id}`)
            .then(response => {
                this.times = response.data;
                console.log(response.data)
                console.log('getting times  ' + this.times)
            })
            .catch(error => {
                console.log(error)
            })
},
    }
    
};
</script>
<style></style>
