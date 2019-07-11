<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :index="index"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @move="handleMove"
    ></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {},
      index: 0
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios.get('api/city.json').then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data.data
      this.hotCities = res.hotCities
      this.cities = res.cities
    },
    handleMove (index) {
      this.index = index
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
