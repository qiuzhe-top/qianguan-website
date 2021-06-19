import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        default: () => import('@/views/Index'),
        Header: () => import('@/components/Header'),
        Bottom: () => import('@/components/Bottom')
      },
    },
    {
      path: '/ProductCenter',
      name: 'ProductCenter',
      components: {
        default: () => import('@/views/ProductCenter'),
        Header: () => import('@/components/Header'),
        Bottom: () => import('@/components/Bottom')
      },
    },
    {
      path: '/ProductIntroduction',
      name: 'ProductIntroduction',
      components: {
        default: () => import('@/views/ProductIntroduction'),
        Header: () => import('@/components/Header'),
        Bottom: () => import('@/components/Bottom')
      },
    },
    {
      path: '/ApplicationCase',
      name: 'ApplicationCase',
      components: {
        default: () => import('@/views/ApplicationCase'),
        Header: () => import('@/components/Header'),
        Bottom: () => import('@/components/Bottom')
      },
    },
    {
      path: '/About',
      name: 'About',
      components: {
        default: () => import('@/views/About'),
        Header: () => import('@/components/Header'),
        Bottom: () => import('@/components/Bottom')
      },
    },
    {
      path: '/NewsDetails',
      name: 'NewsDetails',
      components: {
        default: () => import('@/views/NewsDetails'),
        Header: () => import('@/components/Header'),
        Bottom: () => import('@/components/Bottom')
      },
    },
    // 导航底部跳转
    {
      path: '/describe1',
      name: 'Describe1',
      components: {
        default: () => import('@/views/BottomNav/describe1'),
        Header: () => import('@/components/Header'),
        Bottom: () => import('@/components/Bottom')
      },
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
    }
})
