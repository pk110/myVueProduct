import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home/home'
import recomend from '@/components/recomend/recomend'
import musics from '@/components/musics/musics'
import sing from '@/components/sing/sing'
import my from '@/components/my/my'
import homedetail from '@/components/homedetail'
// import betweenC from '@/components/betweenC/betweenC'

Vue.use(Router)

export default new Router({
  routes: [
     { 
        path: '/', 
        redirect: '/recomend' 
     },
     {
        // 以根目录为初始显示
        path: '/',
        component: homedetail,
        children: [{
        // between   第一页
        path: '/recomend',
        component: recomend
      },
      {
        // between   第二页
        path: '/musics',
        component: musics
      },
      {
        // between   第三页
        path: '/sing',
        component: sing
      },
      {
        // between   第四页
        path: '/my',
        component: my
      }]
    }
  ]
})
