export default{
    ADD_JOBS_APPLIED(state,data){
        state.jobsApply.push(...data)
    },
    CLEAR_JOBS_APPLIED(state){
        state.jobsApply = []
    }
}