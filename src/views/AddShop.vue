<template>
  <div class="container">
        <div v-for="(error, index) in errors" :key="index" class="alert alert-danger mt-3">
            {{ error[0] }}
        </div>
        <div class="form-group">
            <label><b>Shop Name</b></label>
            <input type="text" class="form-control" v-model="shop.name" placeholder="Enter Shop Name">
        </div>
        <div class="form-group">
            <label><b>Photo url</b></label>
            <input type="text" class="form-control" v-model="shop.image" placeholder="Enter Shop Photo">
        </div>
        <button @click="addShop()" class="btn btn-success">Add Shop</button>
  </div>
</template>

<script>
import { shopService } from '../services/ShopService'
export default {
  data(){
    return{
      shop:{
        user_id: localStorage.getItem('user_id')
      },
      errors:[]
    }
  },

  methods:{
    addShop(){
      shopService.addShop(this.shop).then( () => {
        this.$router.push({name: 'Home'})
      }).catch(error => {
        this.errors = error.response.data.errors
      })
    }
  }
}
</script>

<style>

</style>