<template>
    <Layout>
        <div class="row">
            <div class="col-md-12">
                <CandidateAppliesTable :columns='columns' :data="getApplies"/>
            </div>
        </div>
    </Layout>
</template>
<script>
const columns = [{
  name: 'First Name',
  dataIndex: 'firstName',
  key: 'firstName',
}, 
{
  title: 'Contact Number',
  dataIndex: 'contactNumber',
  key: 'contactNumber',
}, 
{
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
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
}, 
];
import Layout from './Layout/Layout.vue'
import CandidateAppliesTable from '@/components/CandidateAppliesTable.vue'
export default {
    name:'CandidateApplies',
    components:{
        Layout,
        CandidateAppliesTable
    },
    data(){
        return{
            applies:[],
            columns: columns,
        }
    },
    computed:{
        getApplies(){
            return this.applies
        }
    },
    created(){
        this.$store.dispatch('getCandidateApplies', this.$route.params.id).then((resp) => {
            this.applies = resp
        })
    }
}
</script>
<style>
    
</style>