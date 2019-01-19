import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import 'iview/dist/styles/iview.css'
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes
});

new Vue({
    router,
  render: h => h(App),
}).$mount('#app');