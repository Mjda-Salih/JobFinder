<template>
    <Layout>
        <JobOffer />
    </Layout>
</template>
<script>
import Layout from './Layout/Layout.vue'
import JobOffer from '@/components/JobOffer.vue'
export default {
    name: 'AddJob',
    components:{
        Layout,
        JobOffer
    }
}
</script>
<style>
    
</style>