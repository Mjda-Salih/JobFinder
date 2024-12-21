<template>
    <Layout>
        <div class="row my-2">
            <div class="col-md-12">
                <router-link to="/add-job">
                    <a-button type="primary">Add Job</a-button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <JobsTable :columns="columns" :data="jobs"/>
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
  title: 'Action',
  key: 'action',
}
];
import JobsTable from '@/components/JobsTable.vue'
import Layout from './Layout/Layout.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'ManageJobs',
    components:{
        Layout,
        JobsTable
    },
    data(){
        return{
            columns: columns
        }
    },
    computed:{
        ...mapGetters({
            jobs: 'get_jobs_authenticated',
            user: 'get_user'
        })
    },
    mounted(){
        this.$store.dispatch('getEmployerJobs', this.user.uid)
    }
}
</script>
<style>
    
</style>