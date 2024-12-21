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
            <template v-else-if="column.key === 'Status'">
                <a-tag v-if="record.status == 'accepted'" color="success">{{ record.status }}</a-tag>
                <a-tag v-else-if="record.status == 'sent'" color="default">{{ record.status }}</a-tag>
                <a-tag v-else-if="record.status == 'received'" color="processing">{{ record.status }}</a-tag>
                <a-tag v-else-if="record.status == 'rejected'" color="warning">{{ record.status }}</a-tag>
            </template>
            <template v-else-if="column.key === 'cv'">
                <a :href="record.candidateCV" target="_blank">
                    <a-button type="primary" shape="circle" class="mx-1">
                        <template #icon><file-outlined /></template>
                    </a-button>
                </a>
            </template>
        </template>
    </a-table>
</template>
<script>
import { FileOutlined  } from '@ant-design/icons-vue';
export default {
    name: 'JobsAppliedTable',
    props: ['columns', 'data'],
    components:{
        FileOutlined
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