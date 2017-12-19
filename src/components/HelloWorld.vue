
<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-data-table v-bind:headers="$store.state.header" :items="$store.state.list" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td style="text-transform: uppercase; font-weight: bolder;">{{ props.item.symbol }}</td>
          <td class="text-xs-center">{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item['price_' + $store.state.currency.toLowerCase()] }}</td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
import store from '@/store'
export default {
  name: 'HelloWorld',
  created: function () {
    store.commit('set_currency', store.state.currency)
  },
  data () {
    return {
      list: [],
      header: [],
      currency: store.state.currency
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
