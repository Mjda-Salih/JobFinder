<template>
    <Layout>
        <div class="row big__title">
            <div class="col-md-12 ">
                <p>A Employer account will allow you to create jobs and look for Job seekers</p>
            </div>
        </div>
        <FormEmployer/>
    </Layout>
</template>
<script>
import Layout from './Layout/Layout.vue'
import FormEmployer from '@/components/FormEmployer.vue'
export default {
    name:'RegisterEmployer',
    components:{
        FormEmployer,
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