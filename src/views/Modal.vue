<template>
    <div>
        <div class="py-3 text-center">
        <i class="ni ni-bell-55 ni-3x"></i>
        <h4 class="heading mt-4">Pick an available slot!</h4>
        <p></p>
    </div>
    <div v-for="timePair in times" :key="timePair.id" class="mb-3">
    <base-button block type="warning" @click="bookAppointment(timePair)" >
        {{ timePair.start_time }} - {{ timePair.end_time }}
    </base-button>
</div>






<template v-if="modals.modal2">
    <div class="py-3 text-center message-background">
        <p>{{ bookingMessage }}</p>
    </div>
</template>

</div>

</template>

<script>

import modal from './Modal.vue';

export default {
    name: "YourComponentName",
    props: {
        name: String,
        times: Array,
    },
    data() {
        return {
            bookingMessage: '',
            modals: {
                modal2: false,
            },

        
            
        };
    },
    methods:
    {
        bookAppointment(timePair) {
    this.bookingMessage = `Booked with ${this.name} at ${timePair.start_time} - ${timePair.end_time}. You should receive a confirmation email shortly.`;
    this.modals.modal2 = true;

    this.$nextTick(() => {
        const messageDiv = this.$el.querySelector('.message-background'); // Adjust this selector to target the message div
        if (messageDiv) {
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
},

},
    components: {
        modal,
    },
    
};


</script>


<style scoped>


.message-background {
    background: linear-gradient(to right, #00b4db, #0083b0);
    color: white;
    padding: 15px;
    border-radius: 10px;
    margin: 10px 0;
}
    </style>