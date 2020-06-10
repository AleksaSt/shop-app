<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item active">
                    <a  v-if="!isUserLoggedIn" class="nav-link" href="/register">Register</a>
                </li>
                <li class="nav-item active">
                    <a  v-if="!isUserLoggedIn" class="nav-link" href="/login">Login</a>
                </li>
                <li class="nav-item active">
                  <button v-if="isUserLoggedIn" class="btn btn-danger" @click="logoutUser()">Logout</button>
                </li>
                <li class="nav-item active">
                    <a  v-if="isUserLoggedIn" class="nav-link" href="/shops/create">Add Your Shop</a>
                </li>
            </ul>
            <b v-if="$route.name == 'Home'" class="mr-2">Search for the shop &rarr;</b>
            <div v-if="$route.name == 'Home'" class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" v-model="term" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" @click="searchShops()" type="submit">Search</button>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{
            term: ''
        }
    },

    computed:{

        ...mapGetters({

            isUserLoggedIn: 'isUserLoggedIn'
        })

    },

    methods:{
        ...mapActions({
            search: 'search',
            logout: 'logout'
        }),
        
        searchShops(){
            this.search(this.term)
        },

        logoutUser(){
            this.logout().then(() => {
                if(this.$route.name != 'Home'){

                    this.$router.push({name: 'Home'})
                }
            })
        }
    }
}
</script>

<style>

</style>