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
    <cardprofile
        v-for="profile in profiles"
        :key="profile.id"
        :id="profile.user"
        :profileImagePath="profile.image"
        :profileName="profile.first_name + ' ' + profile.last_name" 
        :position="profile.occupation"
        :clientCount="profile.client_count"
        :rating="profile.rating">
    </cardprofile>
</div>
           
        </div>
    </section>
</template>

<script>

import cardprofile from './components/CardProfile.vue'
import axios from 'axios'

export default {
    name: 'SeniorHome',
    mounted(){
        this.getProfiles();
    },

    methods: {
        async getProfiles() {
           await axios.get('https://sbeve.mooo.com/api/profile/list')
                .then(response => {
                    this.profiles = response.data;
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    data() {
        return {
            profiles: []
        }
    },
    components: {
        cardprofile,
    }
}
</script>
  