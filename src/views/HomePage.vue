<template>
    <Layout>
        <MapDisplay />
        <TopJobs />
    </Layout>
</template>
<script>
import Layout from './Layout/Layout.vue'
import MapDisplay from '@/components/MapDisplay.vue'
import TopJobs from '@/components/TopJobs.vue'
export default {
    name: 'HomePage',
    components:{
        Layout,
        MapDisplay,
        TopJobs
    }
}
</script>
<style>
    
</style>