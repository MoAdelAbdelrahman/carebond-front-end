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

      
                    <div class="card card-lift--hover shadow border-0">
                        
                           <profile/>
                           <profile/>
                           <profile/>
                           <profile/>

                    </div>
               
    </section>
</template>

<script>

import profile from '@/views/Profile.vue'

export default{
    name: 'SeniorHome',
    data(){
        return{
            
        }
    },
    components: {
        profile,
    }
}
</script>
  