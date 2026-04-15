import { createRouter, createWebHistory } from 'vue-router'
import Frontend from '@/components/Frontend.vue'
import Sandbox from '@/views/SandBox.vue'
import Multiplayer from '@/views/Multiplayer.vue'
import Survival from '@/views/Survival.vue'
import Login from '@/views/Login.vue'
import UserMessage from '@/components/UserMessage.vue'
import Register from '@/views/Register.vue'
const frontend=[
    {
    path:'/',
    component:Frontend,
    children:[
        {
            path:'sandbox',
            component:Sandbox,
            meta:{
                title:'沙盒',
                 icon:'PieChart',
            }
        },
        {
            path:'multiplayer',
            component:Multiplayer,
            meta:{
                title:'多人联机',
                 icon:'Monitor',
            }
        },
        {
            path:'survival',
            component:Survival,
            meta:{
                title:'生存',
                 icon:'Chicken',
            }
        },
    ]
    },
    {
        path:'/user-message',
        component:UserMessage,
        children:[
            {
                path:'login',
                component:Login
            },
            {
                path:'register',
                component:Register
            }
        ]
    },
]
const router = createRouter({
     history:createWebHistory(),
    routes:frontend,
})
export default router
