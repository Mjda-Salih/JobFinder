import mutations from "./mutations";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from '../../../firebase/index'


const state = ({
    countries:[]
})

const getters = {
    get_countries(state){
        return state.countries
    }
}


const actions = {
    async getCountries({commit}){
        const querySnap = await getDocs(query(collection(db, 'countries')))
        let allCountries = []
        querySnap.forEach((doc) => {
            allCountries.push(doc.data())
        })
        commit('SET_COUNTRIES', allCountries)
    }
}

export default{
    namespaced: false,
    state,
    mutations,
    actions,
    getters
}