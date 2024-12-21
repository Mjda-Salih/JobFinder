<template>
    <div class="card-deck my-1">
        <div class="row">
            <div class="col-md-12">
                <h2>Most Viewed Jobs</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4" v-for="(job, index) in jobs?.slice(0,3)" :key="index">
                <JobCard :job="job" />
            </div>
        </div>
    </div>
</template>
<script>
import JobCard from './JobCard.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'TopJobs',
    components:{
        JobCard,
    },
    data(){
        return{
        }
    },
    computed:{
        ...mapGetters({
            jobs: 'get_top_jobs'
        }),
    },  
    mounted(){
        this.$store.dispatch('getTopJobs')
    }
}
</script>
<style>
    
</style>