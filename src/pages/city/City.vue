<style>
	
</style>

<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list :zidingyiCities="allcities" :hot="hotCities"></city-list>
		<city-alphabet :zidingyiCities="allcities"></city-alphabet>
	</div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'

export default{
	name:'City',
	components:{ 
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	data () {
		return {
			allcities: {},
			hotCities: []
		}
	},
	methods: {
		geCityInfo () {
			axios.get('api/city.json')
				.then(this.handleGetCityInfoSucc)
		},
		handleGetCityInfoSucc(res){
			console.log(res)
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.allcities = data.cities
				this.hotCities = data.hotCities
			}
		}
	},
	// city这个页面的ajax都放在这里；
	mounted () {
		this.geCityInfo()
	}

}
</script>