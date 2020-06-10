import { authService } from '../services/AuthService'

export const AuthStore = {

    state:{
        errors:[],
        token: localStorage.getItem('token')
    },

    mutations:{
        setErrors(state, errors){
            state.errors = errors
        },

        setToken(state, token){
            state.token = token
        }
    },

    actions:{
        async login(context, user){
            try{

                const response = await authService.login(user)

                authService.setHeaders({
                    Authorization: `Bearer ${response.data.token}`
                })

                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user_id', response.data.user_id)
                context.commit('setErrors', null)
                context.commit('setToken', response.data.token)

            }catch(exception){
                context.commit('setErrors', exception.response.data.error)
            }
        },

        async logout(context){
            localStorage.removeItem('token')
            context.commit('setToken', null)
        }
    },

    getters:{

        getErrors(state){
            return state.errors
        },

        isUserLoggedIn(state){
            return !!state.token
        }
    }
}