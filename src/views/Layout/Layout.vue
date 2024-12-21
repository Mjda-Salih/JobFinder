<template>
    <NavbarPage />
    <div class="container" style="flex-grow: 1;">
        <slot></slot>
    </div>
    <FooterPage />
</template>
<script>
import FooterPage from '@/components/FooterPage.vue'
import NavbarPage from '@/components/NavbarPage.vue'
export default {
    name: 'Layout',
    components:{
        FooterPage,
        NavbarPage
    }
}
</script>
<style scoped>

.container{
    margin-top: 40px;
}
    
</style>