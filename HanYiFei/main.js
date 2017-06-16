import Vue from 'vue'
import Douban from './douban' // 省略.js .vue
import { Header ,Button ,CellSwipe,Swipe, SwipeItem ,TabContainer,TabContainerItem,Cell  } from 'mint-ui' // mint js的框架
import 'mint-ui/lib/style.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.component(CellSwipe.name, CellSwipe)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);

Vue.use(VueAxios, axios)
Vue.config.productionTip = false // 生产环境？生产环境：开发环境

new Vue({
  el: '#box',
  router,
  template: `<Douban />`,
  components: { Header, Douban, Button ,CellSwipe,Swipe,SwipeItem,TabContainer, TabContainerItem ,Cell}
})
