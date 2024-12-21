<template>
    <div v-if="job != null" class="card my-2">
        <div class="card-body">
            <h5 class="card-title">{{job.title}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{job.company}}</h6>
            <p class="card-text">{{description}}</p>
            <div class="details__job">
                <a-tag color="#027CC9">
                    <template #icon>
                        <pushpin-outlined />
                    </template>
                    {{ job.location }}
                </a-tag>
                <a-tag color="#027CC9">
                    <template #icon>
                        <profile-outlined />
                    </template>
                    {{ job.employmentType }}
                </a-tag>
            </div>
            <div v-if="userInfo && userInfo.type!='employer' && apply != true" class="apply__button">
                <router-link :to="{name: 'ApplyJob', params:{ id: job.uid_job } }">
                    <a-button type="primary">Apply</a-button>
                </router-link>
            </div>
        </div>
        <div class="card-footer text-muted">
            <div class="skills__job">
                <a-tag v-for="skill in skills" :key="skill">{{ skill }}</a-tag>
            </div>
            <div class="views__card">
                <eye-filled /> {{ job.views }}
            </div>
        </div>
    </div>
</template>
<script>
import {
  PushpinOutlined,
  ProfileOutlined,
  EyeFilled
} from '@ant-design/icons-vue';
import { mapGetters } from 'vuex'
export default {
    name: 'JobCard',
    props: ['job', 'apply'],
    components:{
        PushpinOutlined,
        ProfileOutlined,
        EyeFilled
    },
    computed:{
        skills(){
            return this.job.skills?.split(',');
        },
        description(){
            return this.job.description?.substr(0,200) + '...'
        },
        ...mapGetters({
            user: 'get_user',
            userInfo: 'get_user_info'
        })
    }
}
</script>
<style scoped>

.details__job{
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    margin: 10px 0px;
}

.views__card{
    display: flex;
    align-items: center;
}

.card-footer {
    display: flex;
    justify-content: space-between;
}

.views__card span{
    margin-right: 5px;
}

.apply__button button{
    width: 100%;
    margin: 5px 0px;
}


    
</style>