<template>
    <Layout>
        <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
            <template #extra>
                <router-link to="/">
                    <a-button type="primary">Back Home</a-button>
                </router-link>
            </template>
        </a-result>
    </Layout>
</template>
<script>
import Layout from './Layout/Layout.vue'
export default {
    name: '404',
    components:{
        Layout
    }
}
</script>
<style>
    
</style>