
<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-data-table v-bind:headers="header" :items="list" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td style="text-transform: uppercase; font-weight: bolder;">{{ props.item.symbol }}</td>
          <td class="text-xs-center">{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item['price_' + currency.toLowerCase()] }}</td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['currency'],
  name: 'HelloWorld',
  created: function() {
    this.currency = this.$route.query.currency;
    this.loadHeader();
    this.loadData();

  },
  updated: function() {
    console.log("ATUALIZOU " + this.currency);
    /*
    this.loadHeader();
    this.loadData();
    */
  },
  methods: {
    loadData: function() {
      this.$http.get('https://api.coinmarketcap.com/v1/ticker/?convert='+this.currency)
      .then(response => {
        this.list = response.data;
      });
    },
    loadHeader: function() {
      this.header = [
        {text: "Symbol", value: "symbol"},
        {text: "Currency", value: "name", align: "center"},
        {text: "USD", value: "price_" + this.currency}
      ]
    }
  },
  data () {
    return {
      list: [],
      header: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
