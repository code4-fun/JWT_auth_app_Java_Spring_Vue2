import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Protected from "@/components/Protected";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {path: '/', component: Home},
        {path: '/auth', component: Login},
        {path: '/hello', component: Protected},
        {path: '/register', component: Register}
    ]
})