<template>
    <div class="container">
        <div>
            <h1>Register Here</h1>
            <img src="https://image.flaticon.com/icons/svg/206/206864.svg">
             <div v-for="(error, index) in errors" :key="index" class="alert alert-danger mt-3">
                {{ error[0] }}
            </div>
            <div class="form-group">
                <Label class="mt-3"><b>First Name</b></Label>
                <input type="text" class="form-control" v-model="user.first_name" placeholder="Enter first name">
            </div>
            <div class="form-group">
                <Label><b>Last Name</b></Label>
                <input type="text" class="form-control" v-model="user.last_name" placeholder="Enter last name">
            </div>
            <div class="form-group">
                <Label><b>Email</b></Label>
                <input type="email" class="form-control" v-model="user.email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <Label><b>Password</b></Label>
                <input type="password" class="form-control" v-model="user.password" placeholder="Enter password">
            </div>
             <div class="form-group">
                <Label><b>Confirm Password</b></Label>
                <input type="password" class="form-control" v-model="user.confirm_password" placeholder="Confirm Password">
            </div>
             <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="user.terms_and_conditions"
                        value="1"
                    />
                    <label class="form-check-label">
                        I accept Terms and Conditions.
                    </label>
                </div>
            <button @click="register()" class="btn btn-success mt-3">Register</button>
        </div>
    </div>
</template>

<script>
import { authService } from '../services/AuthService'
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            user:{},
            errors:[]
        }
    },

    methods:{

        ...mapActions({
            login: 'login'
        }),

        register(){
            authService.registerUser(this.user).then( () =>{
            
                this.login({email: this.user.email, password: this.user.password})
                this.$router.push({name: 'Home'})
    
            }).catch(error => {
                this.errors = error.response.data.errors
            })
        }
    }
}
</script>

<style>
    img{
        height: 100px;
    }
</style>