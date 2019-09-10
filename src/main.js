import Vue from 'vue'
import App from './App.vue'

// vue起動時に表示されるチップス情報ON OFF切り替え
Vue.config.productionTip = false

// 引数で渡されたAppの内容をレンダリング
new Vue({
  render: h => h(App),
}).$mount('#app')
// HTMLのタグIDを指定して、そのタグの内部にVueをレンダリングさせる
