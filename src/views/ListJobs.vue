<template>
    <Layout>
        <div class="row justify-content-center">
            <div class="col-md-12">

            </div>
        </div>
        <div class="row">
            <a-spin v-if="!jobs" size="large" />
            <a-result v-else-if="checkJobsSearch" title="No jobs available">
                <template #icon>
                    <frown-outlined />
                </template>
                <template #extra>
                    <router-link to="/">
                        <a-button type="primary">Back</a-button>
                    </router-link>
                </template>
            </a-result>
            <div class="col-md-4 my-3" v-for="(job, index) in getJobs" :key="index">
                <JobCard :job="job" />
            </div>
        </div>
        
    </Layout>
</template>
<script>
import Layout from './Layout/Layout.vue'
import JobCard from '@/components/JobCard.vue'
import { mapGetters } from 'vuex'
import { FrownOutlined } from '@ant-design/icons-vue';
export default {
    name: 'ListJobs',
    props:['where', 'what'],
    data(){
        return{
            jobsSearch:[],
            Search: false
        }
    },
    components:{
        Layout,
        JobCard,
        FrownOutlined
    },
    computed:{
        ...mapGetters({
            jobs: 'get_jobs'
        }),
        getJobs(){
            return this.jobsSearch
        },
        checkJobsSearch(){
            return this.Search
        }
    },
    created(){
        this.$store.dispatch('getJobs').then(() => {
            this.jobsSearch = this.jobs
            if(this.where && this.what){
                this.jobsSearch = this.jobs.filter((item) =>  {
                    return item.location.toLowerCase().includes(this.where.toLowerCase()) && (item.title.toLowerCase().includes(this.what.toLowerCase()) || item.company.toLowerCase().includes(this.what.toLowerCase()))
                })
                this.Search = this.jobs && this.getJobs.length == 0
            }
        })
    },
    beforeDestroy() {
        this.Search= false
    }
    
    

}
</script>
<style>
    
</style>