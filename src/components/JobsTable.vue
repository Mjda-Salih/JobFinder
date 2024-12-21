<template>
    <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
        <template v-if="column.key === 'title'">
            <span>
                Job Title
            </span>
        </template>
        </template>

        <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'title'">
            <p>
            {{ record.title }}
            </p>
        </template>
        <template v-else-if="column.key === 'company'">
            <p>
            {{ record.company }}
            </p>
        </template>
        <template v-else-if="column.key === 'empType'">
            <p>
            {{ record.employmentType }}
            </p>
        </template>
        
        <template v-else-if="column.key === 'skills'">
            <span>
            <a-tag
                v-for="skill in record.skills.split(',')"
                :key="skill"
                color="blue"
            >
                {{ skill }}
            </a-tag>
            </span>
        </template>
        <template v-else-if="column.key === 'location'">
            <p>
            {{ record.location }}
            </p>
        </template>
        <template v-else-if="column.key === 'action'">
            <router-link :to="{name:'EditJob', params:{id:record.uid_job}}">
                <a-button type="primary" shape="circle" class="mx-1">
                    <template #icon><edit-filled /></template>
                </a-button>
            </router-link>
            <router-link :to="{name:'CandidateApplies', params:{id:record.uid_job}}">
                <a-button type="primary" shape="circle" class="mx-1">
                    <template #icon><TeamOutlined /></template>
                </a-button>
            </router-link>
            <a-button type="primary" shape="circle" class="mx-1" danger @click="deleteJob(record.uid_job)">
                <template #icon><delete-filled /></template>
            </a-button>
        </template>
        </template>
    </a-table>
</template>
<script>
import { DeleteFilled, EyeFilled, EditFilled, TeamOutlined  } from '@ant-design/icons-vue';
export default {
    name: 'JobsTable',
    props: ['columns', 'data'],
    components:{
        DeleteFilled,
        TeamOutlined,
        EyeFilled,
        EditFilled
    },
    methods:{
        deleteJob(val){
            this.$store.dispatch('deleteJob', val).then(() => {
                this.$emit()
            })
        }
    }
}
</script>
<style>

.ant-table-cell{
    text-transform: capitalize;
}
    
</style>