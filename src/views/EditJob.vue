<template>
    <Layout>
        <div class="row text-center" v-if="Object.keys(getJob).length == 0">
            <div class="col-md-12">
                <a-spin size="large" />
            </div>
        </div>
        <JobOfferEdit v-else-if="Object.keys(getJob).length != 0" :jobItem="getJob" />
    </Layout>
</template>
<script>
import Layout from './Layout/Layout.vue'
import JobOfferEdit from '@/components/JobOfferEdit.vue'
export default {
    name: 'EditJob',
    components:{
        Layout,
        JobOfferEdit
    },
    data(){
        return{
            job:{},
        }
    },
    computed:{
        getJob(){
            return this.job
        }
    },
    created(){
        this.$store.dispatch('getJob', this.$route.params.id).then((resp) => {
            this.job = resp[0]
        })
    }
}
</script>
<style>
    
</style>