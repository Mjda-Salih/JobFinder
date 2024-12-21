<template>
    <div class="row text-center custom__form">
        <div class="col-md-8 col-lg-6 form__inputs">
            <p><span class="title">UPDATE PROFILE</span></p>
            <a-alert v-if="updateSuccess" message="Profile updated successfully" type="success" class="my-3"/>
            <a-avatar shape="square" :size="64">
                <template #icon><UserOutlined /></template>
            </a-avatar>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="FIRST NAME" v-model="formState.firstName">
                </div>
                <div class="form-group">
                    <textarea class="form-control" placeholder="ADDRESS" v-model="formState.address"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="CONTACT NUMBER" v-model="formState.contactNumber">
                </div>
                <button type="submit" class="btn btn-primary custom__button">UPDATE</button>
            </form>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { UserOutlined } from '@ant-design/icons-vue'
export default {
    name:'FormUpdate',
    components:{
        UserOutlined,
    },
    data(){
        return{
            formState:{},
            updateSuccess: false,
        }
    },
    computed:{
        ...mapGetters({
            userInfo: 'get_user_info'
        })
    },
    methods:{
        handleSubmit(){
            this.$store.dispatch('updateInfo', this.formState).then(() => {
                this.updateSuccess = true
                setTimeout(() => {
                    this.updateSuccess = false
                }, 2500)
            })
        }
    },
    mounted(){
        this.formState = {...this.userInfo}
    }
}
</script>
<style scoped>
.title{
    font-size: 30px;
    font-weight: 600;
}

.custom__form{
    justify-content: center;
    margin: auto;
    padding: 30px 0px;
}

.form__inputs{
    background: #EEEEEE;
    padding: 40px;
}

.form-group{
    margin: 30px 0px;
}

.subtitle{
    font-size: 15px;
    font-weight: 500;
}

.custom__button{
    width: 200px;
    height: 60px;
    border-radius: unset;
}
</style>