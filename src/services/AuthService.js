import { HttpService } from '../services/HttpService'

export class AuthService extends HttpService {

    registerUser(user){
        return this.axios.post('register', user)
    }

    login(user){
        return this.axios.post('login', user)
    }
}

export const authService =  new AuthService()