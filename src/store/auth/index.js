import axios from 'axios'
export default{
    namespaced : true,
    state:{
        token : null,
        user : null,
    },
    mutations:{
        setToken(state,token){
            state.token = token
        },
        setUser(state,data){
            state.user = data
        },
        destroyToken(state){
            state.token = null
            state.user = null
        }
    },
    getters:{
        authenticated(state){
            return state.token && state.user
        },
        user(state){
            return state.user
        }
    },
    actions:{
        async signIn({ dispatch }, credentials){
            const response = await axios.post('login/',credentials)
            return dispatch('attempt',response.data.access)
        },

        signOut({ commit }){
            try{
                localStorage.removeItem('token')
                return commit('destroyToken')
            }catch(error){
                console.error(error)
            }
        },

        async attempt({ commit, state }, token){
            if(token){
                commit('setToken',token) //first because we have a subscribe should add the token in the headers
            }
            if(!state.token){
                return;
            }
            const response = await axios.get('user-profile/')
            commit('setUser',response.data)
        }

    },
}