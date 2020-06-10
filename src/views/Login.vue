<template>
  <div class="container">
    <div>
      <div v-if="errors.length" class="alert alert-danger mt-3">
        {{ errors }}
      </div>
      <div class="form-group">
        <Label><b>Email</b></Label>
        <input type="email" class="form-control" v-model="user.email" placeholder="Enter email">
      </div>
      <div class="form-group">
        <Label><b>Password</b></Label>
        <input type="password" class="form-control" v-model="user.password" placeholder="Enter password">
      </div>
      <button @click="loginUser()" class="btn btn-success mt-3">Login</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
 data(){
        return{
            user:{}
        }
    },

    computed:{

      ...mapGetters({

        errors: 'getErrors'

      })

    },

    methods:{
        ...mapActions({
            login: 'login'
        }),
        
        loginUser(){
            this.login(this.user).then(() => {
              if(!this.errors){
                this.$router.push({name: 'Home'})
              }
            })
        }
    }
}
</script>

<style>

</style>