<template>
    <Layout>
        <LoginForm />
    </Layout>
</template>
<script>
import Layout from './Layout/Layout.vue'
import LoginForm from '@/components/LoginForm.vue'
export default {
    name: 'Login',
    components:{
        Layout,
        LoginForm
    }
}
</script>
<style>
    
</style>