import Vue from 'vue'
import VueRouter from 'vue-router'
const Main1 = ()=>import("components/Main1.vue")
const findMusic = ()=>import("components/findMusic/findMusic.vue")
const diyRecom = ()=>import("components/findMusic/diyRecom/diyRecom.vue")
const Detail = ()=>import("components/findMusic/Detail/Detail.vue")
const RankList = ()=>import("components/findMusic/RankList/RankList.vue")
const Singer = ()=>import("components/findMusic/Singer/Singer.vue")
const newMusic = ()=>import("components/findMusic/newMusic/newMusic.vue")
const playMV = ()=>import("components/findMusic/playMV/playMV.vue")
const playListDetail = ()=>import("components/playListDetail/playListDetail.vue")
const singDetail = ()=>import("components/findMusic/Singer/singDetail.vue")
const MvList =() =>import('components/MvList/MvList.vue')
const allMv =() =>import('components/allMv/allMv.vue')
const search =() =>import('components/search/search.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main1,
    children:[
      {
        path:'/',
        redirect: '/findMusic'
      },
      {
        path:'/findMusic',
        component: findMusic,
        redirect: '/findMusic/diyRecom',
        children:[
          //  个性推荐
          {
            path:'/findMusic/diyRecom',
            component: diyRecom
          },
          // 歌单
          {
            path:'/findMusic/Detail',
            component: Detail
          },
          // 排行榜
          {
            path:'/findMusic/RankList',
            component: RankList
          },
          // 歌手
          {
            path:'/findMusic/Singer',
            component: Singer
          },
          // 新音乐
          {
            path:'/findMusic/newMusic',
            component: newMusic
          },
          // MV
          {
            path:'/findMusic/playMV',
            component: playMV
          },
          
        ]
      },
      // 推荐歌单
      {
        path:'/playListDetail/:id',
        component:playListDetail,
      },
      // 歌手详情页
      {
        path:'/singDetail/:id',
        component:singDetail,
      },
      // Mv播放列表
      {
        path:'/MvList/:id',
        component:MvList,
      },
      // 全部Mv
      {
        path:'/allMv',
        component:allMv,
      },
      //  搜索
      {
        path:'/search/:key',
        component:search, 
      }
    ]
  }
]

const router = new VueRouter({
  linkActiveClass:'active',
  routes
})

export default router
