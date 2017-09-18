import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello'
import Add from '@/components/Add';
import Detail from '@/components/Detail';
import List from '@/components/List';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail/:id', ///detail/1 this.route.params.id
      name: 'Detail',
      component: Detail
    }
  ]
});
