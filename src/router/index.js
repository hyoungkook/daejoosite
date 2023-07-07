import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/index.vue';      
import Members from '@/pages/members/index.vue';
import BuddhistCeremony from '@/pages/buddhistceremony/index.vue';
import Fixing from '@/pages/fixing/index.vue';
import Login from '@/pages/login/index.vue';
import LoginNaver from '@/pages/login/naver/index.vue';


const router = createRouter  ({
    history: createWebHistory(),
    routes: [
        {                 
            path:'/',     
            name:'Home',  
            component:Home 
        },    
        {
            path:'/members',
            name:'Members',
            component:Members
        },
        {
            path:'/buddhistceremony',
            name:'BuddhistCeremony',
            component:BuddhistCeremony
        },
        {
            path:'/fixing',
            name:'Fixing',
            component:Fixing
        },
        {
            path:'/login',
            name:'Login',
            component:Login
        },
        {
            path:'/login/naver',
            name:'LoginNaver',
            component:LoginNaver
        },


    ]
});

export default router;   