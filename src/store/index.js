import { createStore } from 'vuex'
import auth from './modules/auth/actionCreator.js'
import job from './modules/job/actionCreator.js'
import jobsApply from './modules/jobsApply/actionCreator.js'
import countries from './modules/countries/actionCreator.js'
import createPersistedState from "vuex-persistedstate";


const items = createPersistedState({
  paths: ['auth']
})

export default createStore({
  modules: {
    auth,
    job,
    jobsApply,
    countries
  },
  plugins: [items]
})
