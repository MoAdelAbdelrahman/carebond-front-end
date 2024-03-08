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
        <div class ="container">
        <div class="card card-lift--hover shadow border-0">
            <VueSchedule 
            v-model="schedule" 
            :timeArray="['9PM', '10PM', '11PM', '12PM', '1PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM']"
        />
    </div>
        

        </div>
               
    </section>
</template>

<script>

import profile from '@/views/Profile.vue'
import 'vue-daily-scheduler/dist/vue-schedule.min.css'
import VueSchedule from 'vue-daily-scheduler'


export default{
    name: 'SeniorHome',
    data(){
        return{
            schedule: {
                0: [],
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: []
            },
        }
    },
    components: {
        profile,
        VueSchedule
    }
}
</script>

<style scoped>
.container{
    margin-top: 100px;
    height: fit-content;
}
</style>
  