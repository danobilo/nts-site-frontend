import Vue from 'vue';

import Default from '@/layouts/Default';
import Home from '@/pages/Home';
// const AppMedium = () => import("@/components/AppMedium");

Vue.component('default-layout', Default);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { layout: 'default' },
    },
    // {
    //     path: "/medium",
    //     name: "Medium",
    //     component: AppMedium,
    // },
];

export default routes;
