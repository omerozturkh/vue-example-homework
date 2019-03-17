import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Table from '@/components/Table'
import Graph from '@/components/Graph'


Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Content
        },
        {
            path: '/table',
            name: 'table',
            component: Table
        },
        {
            path: '/graph',
            name: 'graph',
            component: Graph
        },
    ]
})

router.beforeEach((to, from, next) => {

    if (to.fullPath === '/table') {
        if (!localStorage.login) {
            next('/');
        }
    }
    if (to.fullPath === '/') {
        if (localStorage.login) {
            next({ name: 'table'})
        }
    }
    next();
});

export default router;