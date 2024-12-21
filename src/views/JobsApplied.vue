<template>
    <Layout>
        <div class="row my-2">
            <div class="col-md-12">
                <router-link to="/jobs">
                    <a-button type="primary">Apply for other jobs</a-button>
                </router-link>
            </div>
        </div>
        <div class="row text-center" v-if="!jobsApply">
            <div class="col-md-12">
                <a-spin size="large" />
            </div>
        </div>
        <div class="row" v-else >
            <div class="col-md-12">
                <JobsAppliedTable :columns="columns" :data="jobsApply"/>
            </div>
        </div>
    </Layout>
</template>
<script>
const columns = [{
  name: 'Title',
  dataIndex: 'title',
  key: 'title',
}, 
{
  title: 'Company',
  dataIndex: 'company',
  key: 'company',
}, 
{
  title: 'Employment Type',
  dataIndex: 'empType',
  key: 'empType',
}, 
{
  title: 'Skills',
  key: 'skills',
  dataIndex: 'skills',
},
{
  title: 'Location',
  key: 'location',
  dataIndex: 'location',
}, 
{
  title: 'Status',
  key: 'status',
  dataIndex: 'status',
},
{
  title: 'CV',
  key: 'cv',
  dataIndex: 'cv',
}
];
import JobsAppliedTable from '@/components/JobsAppliedTable.vue'
import Layout from './Layout/Layout.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'ManageJobs',
    components:{
        Layout,
        JobsAppliedTable
    },
    data(){
        return{
            columns: columns,
        }
    },
    computed:{
        ...mapGetters({
            jobsApply: 'get_jobs_apply',
            user: 'get_user'
        }),
    },
    created(){
        this.$store.dispatch('getJobsApply', this.user.email)
    }
}
</script>
<style>
    
</style>