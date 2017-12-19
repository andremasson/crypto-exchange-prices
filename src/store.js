import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  name: 'store',
  state: {
    currency: 'USD',
    list: [],
    header: []
  },
  mutations: {
    set_currency (state, curr) {
      state.currency = curr

      Vue.http.get('https://api.coinmarketcap.com/v1/ticker/?convert=' + state.currency)
      .then(response => {
        state.list = response.data
      })

      state.header = [
        { text: 'Symbol', value: 'symbol' },
        { text: 'Currency', value: 'name', align: 'center' },
        { text: state.currency, value: 'price_' + state.currency.toLowerCase() }
      ]
    }
  }
})
