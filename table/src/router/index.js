import Vue from 'vue';
import Router from 'vue-router';
import BaseWrapper from '../components/base-table/index.vue';
import PaginationWrapper from '../components/pagination/index.vue';
import VirtalScrollWrapper from '../components/virtual-scroll/index.vue';
import FunctionalWrapper from '../components/functional-components/index.vue';
import Comparison from '../components/Comparison.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: BaseWrapper
        },
    
        {
            path: '/pagination',
            name: 'pagination',
            component: PaginationWrapper
        },

        {
            path: '/virtual-scroll',
            name: 'virtual-scroll',
            component: VirtalScrollWrapper
        },

        {
            path: '/functional',
            name: 'functional',
            component: FunctionalWrapper
        },

        {
            path: '/comparison',
            name: 'comparison',
            component: Comparison
        }
    ]
});