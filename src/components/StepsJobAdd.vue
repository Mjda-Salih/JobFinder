<template>
    <a-steps :current="step" size="small">
        <a-step title="Job Offer" />
        <a-step title="Job Details" />
        <a-step title="Job Recap" />
    </a-steps>
</template>
<script>
export default {
    name: 'StepsJobAdd',
    props:['step']
}
</script>
<style>
    
</style>