import { shopService } from '../services/ShopService'

export const ShopStore = {

    state:{
        shops:[],
        next_page_url: 'shops',
        term: ''
    },

    mutations:{
        extendsShops(state, shops){
            state.shops.push(... shops)
        },

        setNextPageUrl(state,url){
            state.next_page_url = shopService.parseUrl(url)
        },

        // setTerm(state, term){
        //     state.term = term
        // }

        setShops(state, shops){
            state.shops = shops
        }
    },

    actions: {
        async getShopsByUrl(context){
            const response = await shopService.getShopsByUrl()
            
                context.commit('extendsShops', response.data.data)
                context.commit('setNextPageUrl', response.data.next_page_url)
        },
        async search(context, term){
            const response = await shopService.search(term)
            context.commit('setShops', response.data)
        }
    },

    getters:{
        getShops(state){
            return state.shops
        },

        getNextPageUrl(state){
            return state.next_page_url
        }
    }
}