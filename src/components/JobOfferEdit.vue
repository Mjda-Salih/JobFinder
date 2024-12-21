<template>
    <div class="row">
        <div class="col-md-12">
            <StepsJobAdd :step="step"/>
        </div>
    </div>
    <div class="row text-center custom__form">
        <div class="col-md-8 col-lg-6 form__inputs">
            <p><span class="title">Job Offer</span></p>
            <a-alert v-if="errors" type="error" message="Can you please fill all fields" banner />
            <form @submit.prevent="handleSubmit">
                <div v-if="step==0" class="form__change">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Job Title" v-model="formState.title">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Company" v-model="formState.company">
                    </div>
                    <div class="form-group">
                        <p style="text-align: left;">Location :</p>
                        <a-select
                                v-model:value="formState.location"
                                style="width: 100%"
                            >
                            <a-select-option v-for="(country, index) in countries" :key="index" :value="country.name">{{country.name}}</a-select-option>
                        </a-select>
                    </div>
                    <div class="form-group">
                        <p style="text-align: left;">Employment Type :</p>
                        <a-select
                            v-model:value="formState.employmentType"
                            style="width: 100%"
                            >
                            <a-select-option value="full-time">Full-time</a-select-option>
                            <a-select-option value="part-time">Part-time</a-select-option>
                            <a-select-option value="self-employed">Self-employed</a-select-option>
                            <a-select-option value="freelance">Freelance</a-select-option>
                            <a-select-option value="contract">Contract</a-select-option>
                            <a-select-option value="internship">Internship</a-select-option>
                            <a-select-option value="apprenticeship">Apprenticeship</a-select-option>
                        </a-select>
                    </div>
                    <div class="button__direction">
                        <a-button type="primary" class="right" @click="next">Next</a-button>
                    </div>
                </div>
                <div v-else-if="step==1" class="form__change">
                    <div class="form-group">
                        <textarea type="text" class="form-control" placeholder="Description" v-model="formState.description"></textarea>
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control my-3" placeholder="Add skills" v-model="skill">
                        <a-button type="primary" @click="addSkill">Add</a-button>
                    </div>
                    <a-tag v-for="skill in formState.skills" :key="skill" closable @close="deleteSkill(skill)" color="#108ee9" style="margin: 5px;">{{skill}}</a-tag>
                    <div class="button__direction">
                        <a-button type="primary" class="left" @click="prev">Previous</a-button>
                        <a-button type="primary" class="right" @click="next">Next</a-button>
                    </div>
                </div>
                <div v-else-if="step==2" class="form__change">
                    <div class="recap_info">
                        <p class="title_recap">Job Title :</p>
                        <p>{{ formState.title }}</p>
                        <p class="title_recap">Company :</p>
                        <p>{{ formState.company }}</p>
                        <p class="title_recap">Location :</p>
                        <p>{{ formState.location }}</p>
                        <p class="title_recap">Employment Type :</p>
                        <p>{{ formState.employmentType }}</p>
                        <p class="title_recap">Skills :</p>
                        <a-tag v-for="skill in formState.skills" :key="skill">{{skill}}</a-tag>
                        <p class="title_recap">Description :</p>
                        <p>{{ formState.description }}</p>
                    </div>
                    <div class="button__direction">
                        <a-button type="primary" class="left" @click="prev">Previous</a-button>
                    </div>
                </div>
                <a-button v-if="step==2" type="primary" htmlType="submit" class="right">Update</a-button>
            </form>
            <a-result
                v-if="success && step == 3"
                status="success"
                title="Job Offer updated successfully"
            >
                <template #extra>
                    <router-link to="/"><a-button key="console" type="primary">Home</a-button></router-link>
                </template>
            </a-result>
        </div>
    </div>
</template>
<script>
import StepsJobAdd from './StepsJobAdd.vue'
import { mapGetters } from 'vuex'
export default {
    name:'FormJobSeeker',
    props:['jobItem'],
    data(){
        return{
            formState:{
                title:'',
                company:'',
                location: '',
                employmentType: '',
                skills:[],
                description: '',
                uid_job:''
            },
            step:0,
            skill: '',
            errors: false,
            success: false,
        }
    },
    components:{
        StepsJobAdd
    },
    computed:{
        ...mapGetters({
            countries: 'get_countries'
        })
    },
    methods:{
        handleSubmit(){
            this.$store.dispatch('updateJob', this.formState).then(() => {
                ++this.step
                this.success = true
            })
        },
        next(){
            if(this.step == 0){
                if(this.formState.title == '' || this.formState.company == '' || this.formState.location == '' || this.formState.employmentType == ''){
                    this.errors = true
                }else{
                    ++this.step
                    this.errors = false
                }
            }else if(this.step == 1){
                if(this.formState.description == '' || this.formState.skills.length == 0){
                    this.errors = true
                }else{
                    ++this.step
                    this.errors = false
                }
            }else{
                ++this.step
            }

        },
        prev(){
            --this.step
        },
        addSkill(){
            if(this.skill != ''){
                if(this.formState.skills){
                    if(!this.formState.skills.find((item) => item == this.skill)){
                        this.formState.skills.push(this.skill)
                    }
                }else{
                    this.formState.skills.push(this.skill)
                }
            }
            this.skill = ''
        },
        deleteSkill(val){
            this.formState.skills = this.formState.skills.filter((item) => item != val)
        }
    },
    mounted(){
        if(this.jobItem){
            this.formState.title = this.jobItem.title
            this.formState.company = this.jobItem.company
            this.formState.location = this.jobItem.location
            this.formState.employmentType = this.jobItem.employmentType
            this.formState.description = this.jobItem.description
            this.formState.skills = this.jobItem.skills.split(',')
            this.formState.uid_job = this.jobItem.uid_job
        }
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
    padding: 40px 0px;
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

.right{
    float: right;
}

.left{
    float: left;
}

.recap_info{
    text-align: left;
}


.title_recap{
    font-weight: 600;
    font-size: 18px;
}

.button__direction{
    margin-top: 50px;
}
</style>