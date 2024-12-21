import mutations from "./mutations";
import { db, auth } from '../../../firebase/index'
import { setDoc, collection, query, getDocs, where, orderBy, limit, deleteDoc, doc, addDoc, updateDoc } from "firebase/firestore"
import { uuid } from 'vue-uuid'; 

const state = ({
    jobs: null,
    authenticatedJobs: null,
    topJobs: null,
})


const getters = {
    get_jobs(state){
        return state.jobs
    },
    get_jobs_authenticated(state){
        return state.authenticatedJobs
    },
    get_top_jobs(state){
        return state.topJobs;
    }
}


const actions = {
    async updateJob(context, data){
        const query1 = await getDocs(query(collection(db, 'jobs'), where('uid_job','==', data.uid_job), limit(1)))
        let skillsFormated = ""
        data.skills.forEach((element,index) => {
            if(data.skills.length - 1 != index){
                skillsFormated += element + ","
            }else{
                skillsFormated += element
            }
        })

        let job = {
            title: data.title,
            company: data.company,
            location: data.location,
            employmentType: data.employmentType,
            skills: skillsFormated,
            description: data.description,
            updated_at: new Date(Date.now()).toLocaleString(),
        }

        query1.forEach(async(docd) => {
            const docSnap = doc(db, 'jobs', docd.id)
            updateDoc(docSnap, job)
        })
    },
    async addJob(context, data){
        let skillsFormated = ""
        data.skills.forEach((element,index) => {
            if(data.skills.length - 1 != index){
                skillsFormated += element + ","
            }else{
                skillsFormated += element
            }
        })
        let job = {
            title: data.title,
            company: data.company,
            location: data.location,
            employmentType: data.employmentType,
            skills: skillsFormated,
            description: data.description,
            author: auth.currentUser.uid,
            uid_job: uuid.v4(),
            created_at: new Date(Date.now()).toLocaleString(),
            views:0,
        }

        const response = await setDoc(doc(db, "jobs", job.uid_job), job)

        return response
    },
    async updateViews(context, id){
        const querySnap = await getDocs(query(collection(db, 'jobs'), where('uid_job','==',id), limit(1)))
        let job = [];
        querySnap.forEach(async(docd) => {
            const docSnap = doc(db, 'jobs', docd.id)
            let viewsDoc = docd.data().views
            await updateDoc(docSnap,{
                views: ++viewsDoc
            })
        });

    },
    async getNbrJobsPerCountry({commit}){
        const queryCountries = await getDocs(query(collection(db, 'countries')));
        const queryJobs = await getDocs(query(collection(db, 'jobs')));
        let allCountries = []
        let allJobs = []
        let CountJobs = {}

        queryCountries.forEach((doc) => {
            allCountries.push(doc.data())
        })

        queryJobs.forEach((doc) => {
            allJobs.push(doc.data())
        })

        for(let i=0; i<allCountries.length; i++){
            let countC = 0;
            for(let j=0; j<allJobs.length; j++){
                if(allJobs[j].location.toLowerCase() === allCountries[i].name.toLowerCase()){
                    ++countC
                }
            }
            //CountJobs.push({codeCountry:allCountries[i].code, number: countC})
            CountJobs[allCountries[i].code] = countC
        }

        return CountJobs;


    },
    async getJobs({commit}){
        const querySnap = await getDocs(query(collection(db, 'jobs')));
        let allJobs = []
        querySnap.forEach((doc) => {
            allJobs.push(doc.data())
        })
        commit('SET_JOBS', allJobs)
    },
    async getTopJobs({commit}){
        const querySnap = await getDocs(query(collection(db, 'jobs'), orderBy('views', 'desc'), limit(3)));
        let allJobs = []
        querySnap.forEach((doc) => {
            allJobs.push(doc.data())
        })
        commit('SET_TOP_JOBS', allJobs)
    },
    async getEmployerJobs({commit}, uid){
        const querySnap = await getDocs(query(collection(db, 'jobs'), where('author', '==', uid)))
        let jobs = []
        querySnap.forEach((doc) => {
            jobs.push(doc.data())
        })
        commit('SET_AUTHENTICATED_JOBS', jobs)
    },
    async getJob(context, uid){
        const querySnap = await getDocs(query(collection(db, 'jobs'), where('uid_job', '==', uid)), limit(1))
        let job = []
        querySnap.forEach((doc) => {
            job.push(doc.data())
        })
        return job
    },
    async deleteJob({commit}, id){
        const response = await deleteDoc(doc(db, 'jobs', id))
        commit('DELETE_JOB',id)

        return response
    },
    async applyForJob(context, data){
        const response = await addDoc(collection(db, 'jobsApply'), data)

        return response
    },
    async checkUserApply(context, data){
        const query1 = query(collection(db, 'jobsApply'), where('jobId','==', data.jobId))
        const query2 = await getDocs(query(query1, where('candidateEmail','==', data.candidateEmail)))
        let candidate = [];

        query2.forEach((doc) => {
            candidate.push(doc.data())
        })

        if(candidate.length == 0){
            return false
        }else{
            return true
        }
    }
}

export default{
    namespaced: false,
    state,
    mutations,
    getters,
    actions
}