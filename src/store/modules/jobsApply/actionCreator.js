import mutations from "./mutations";
import { db, auth } from '../../../firebase/index'
import { setDoc, collection, query, getDocs, where, orderBy, limit, deleteDoc, doc, getDoc, updateDoc  } from "firebase/firestore"

const state = ({
    jobsApply: [],
    candidateJobs: []
})


const getters = {
    get_jobs_apply(state){
        return state.jobsApply
    },
    get_candidates(state){
        return state.jobsApply
    }
}

const actions = {
    async getJobsDetails({commit}, data){
        console.table(data)
        const querySnap = await getDocs(query(collection(db, 'jobs'), where('uid_job','==',data.jobId)))
        let allDetails = []

        querySnap.forEach((doc) => {
            let d = doc.data()
            allDetails.push({...data, ...d})
        })

        commit('ADD_JOBS_APPLIED', allDetails)
    },
    async getJobsApply({commit,dispatch}, email){
        commit('CLEAR_JOBS_APPLIED')
        await getDocs(query(collection(db, 'jobsApply'), where('candidateEmail','==',email))).then((resp) => {
            resp.forEach((doc) => {
                let apply = doc.data()
                dispatch('getJobsDetails', apply)
            })
        })
    },
    async getCandidateApplies(context, id){
        let allCandidates = []
        let allCandidatesDetails = []

        const query1 = await getDocs(query(collection(db, 'jobsApply'), where('jobId','==',id)))
        query1.forEach((doc) => {
            allCandidates.push(doc.data())
        })
        for(let i = 0; i < allCandidates.length; i++){
            const query2 = await getDocs(query(collection(db, 'users'), where('email','==',allCandidates[i].candidateEmail)))
            query2.forEach((doc) => {
                let candidate = doc.data()
                allCandidatesDetails.push({...allCandidates[i],...candidate})
            })
        }

        return allCandidatesDetails
    },
    async updateStatusApply(context, data){
        const query1 = query(collection(db, 'jobsApply'), where('jobId','==', data.jobId))
        const query2 = await getDocs(query(query1, where('candidateEmail','==', data.candidateEmail)))
        query2.forEach(async(docd) => {
            const docSnap = doc(db, 'jobsApply', docd.id)
            updateDoc(docSnap, {
                status: data.status,
            })
        })
    }
}

export default{
    namespaced: false,
    state,
    mutations,
    getters,
    actions
}