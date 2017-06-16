import Vue from 'vue'
import Router from 'vue-router'
import Lianzai from '@/components/Lianzai'

Vue.use(Router)

export default new Router({
	routes: [
		
		{	path: '/Lianzai',
	      	name: 'Lianzai',
	      	component: Lianzai
		}
		
		
	]
})