import { HttpService } from '../services/HttpService'
import store from '../store'

export class ShopService extends HttpService {

    getShopsByUrl(){
        if(store.getters.getNextPageUrl){
            return this.axios.get(store.getters.getNextPageUrl)
        }
    }

    search(term){
        return this.axios.get(`shops/search/${term}`)
    }
    addShop(shop){
        return this.axios.post('shops/create', shop)
    }
}

export const shopService =  new ShopService()