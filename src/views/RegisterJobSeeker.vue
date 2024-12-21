<template>
    <Layout>
        <div class="row big__title">
            <div class="col-md-12 ">
                <p>A Job Seeker account will allow you to search and apply for jobs</p>
            </div>
        </div>
        <FormJobSeeker/>
    </Layout>
</template>
<script>
import Layout from './Layout/Layout.vue'
import FormJobSeeker from '@/components/FormJobSeeker.vue'
export default {
    name:'RegisterJobSeeker',
    components:{
        FormJobSeeker,
        Layout
    }
}
</script>
<style scoped>
.big__title{
    text-align: center;
    font-size: 30px;
}

    
</style>