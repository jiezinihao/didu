import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Wash from "../views/Wash.vue"
import KitchenElectrical from "../views/Kitchen-Electrical"
import LifeElectrical from "../views/Life-Electrical"
import Onlion from "../views/Onlion.vue"
import SelectProduct from "../views/SelectProduct"
import ProductDeatil2 from "../views/ProductDeatil2"
import AfterSales from "../views/AfterSales"

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path:"/wash",
    name:"Wash",
    component:Wash
  },
  {
    path:"/kitchenElectrical",
    name:"KitchenElectrical",
    component:KitchenElectrical
  },
  {
    path:"/lifeElectrical",
    name:"LifeElectrical",
    component:LifeElectrical
  },
  {
    path:"/onlion",
    name:"Onlion",
    component:Onlion
  },
  {
    path:"/selectProduct/:sortId",
    name:"SelectProduct",
    component:SelectProduct,
    props: true
  },
  {
    path:"/productDeatil1",
    name:"ProductDeatil1",
    component:()=>import("../views/ProductDetail1.vue")
  },
  {
    path:"/productDeatil2",
    name:"ProductDeatil2",
    component:ProductDeatil2,
    props:true
  },
  {
    path:"/productDeatil3",
    name:"ProductDeatil3",
    component:()=>import("../views/ProductDetail3.vue")
  },
  {
    path:"/productDeatil4",
    name:"ProductDeatil4",
    component:()=>import("../views/ProductDetail4.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:"/aftersales",
    name:"AfterSales",
    component:AfterSales
  },
  {
    path:"/mwavefood",
    name:"MwaveFood",
    component:() => import("../views/MwaveFood")

  },
  {
    path:"/help",
    name:"Help",
    component:()=>import("../views/help.vue")
  },
  {
    path:"/comment",
    name:"Comments",
    component:()=>import("../views/comments.vue")
    },
    {
      path:"/download",
      name:"Download",
      component:()=>import("../views/download.vue")
    }
];


const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
    /* eslint-disable */
  scrollBehavior (to, from, savedPosition) {
    if(to.name == "About" && to.hash == "#ab1"){
      return({x:0,y:500})
    }
    console.log(to)
    if(savedPosition){
      return savedPosition
    }else{
      return ({x:0,y:0})
    }

  }/* eslint-enable */ 
});

export default router;
