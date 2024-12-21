export default{
    SET_JOBS(state, data){
        state.jobs = data
    },
    SET_AUTHENTICATED_JOBS(state, data){
        state.authenticatedJobs = data
    },
    SET_TOP_JOBS(state,data){
        state.topJobs = data
    },
    DELETE_JOB(state, id){
        state.authenticatedJobs = state.authenticatedJobs.filter((item) => item.uid_job != id)
    }
}