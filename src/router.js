import Vue from "vue";
import VueRouter from "vue-router";
import List from "./components/ListPersonel/Personels";
import New from "./components/New";
import Update from "./components/Update";
Vue.use(VueRouter)
export const router =new VueRouter({
  routes:[
    {path:"/", component:List},
    {path:"/new", component:New},
    {name :"duzenle",path:"/update", component:Update},
    {path:"*", redirect:"/"}
  ],
  mode:"hash"
})
