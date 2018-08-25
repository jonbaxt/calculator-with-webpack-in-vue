import Vue from 'vue'
import Router from 'vue-router'
import MainCalculator from '@/components/MainCalcFile';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainCalculator',
      component: MainCalculator
    }
  ]
})
