<template>
  <div class='container'>
    <h3 class="mt-5">Welcome to online shop!</h3>
    <!-- <button class="btn btn-outline-success mt-3" @click="showShops()">See All Shops</button> -->
    <div v-for="(shop, index) in shops" :key="index">
      <ul class="list-group">
        <li class="list-group-item">{{shop.name}}</li>
      </ul>
    </div>
    <button v-if="next_page_url" @click="showShops()" class="btn btn-outline-success mt-3">
      <div v-if="!shops.length">
        Show All Shops
      </div>
      <div v-else>
        Load More
      </div>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  
  computed:{
    ...mapGetters({
      shops: 'getShops',
      next_page_url: 'getNextPageUrl'
    })
  },

  methods:{
    ...mapActions({
      getShops: 'getShopsByUrl'
    }),

    showShops(){
      this.getShops()
    }
  }
}
</script>
