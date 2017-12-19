<template>
  <v-app dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title>Cryptocurrency Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left>
            <v-btn icon slot="activator" dark>
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="item in dropdown_currency" :key="item.text" @click='select_currency(item.text)'>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md text-xs-center>

        <router-view>
        </router-view>

      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>Last update: {{ new Date().toDateString() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import store from '@/store'
export default {
  name: 'app',
  // currency: 'USD',
  methods: {
    select_currency: function (val) {
      store.commit('set_currency', val)
    }
  },
  data () {
    return {
      dropdown_currency:
      [ { text: 'USD' },
        { text: 'EUR' },
        { text: 'BRL' } ]
    }
  }
}
</script>

<style>
#app {

}

#app img {
  height: auto;
  width: auto;
  max-width: 200px;
}
</style>
