import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { inisHelper } from '@/utils/helper/helper'

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/Base'),
    children: [
      {
        title: '首页',
        name: 'index',
        path: '/',
        component: () => import('@/views/pages/Index'),
      },
      {
        title: '文章详情',
        name: 'article',
        path: '/article/:id',
        component: () => import('@/views/pages/Article'),
      },
      {
        title: '友链',
        name: 'links',
        path: 'links',
        component: () => import('@/views/pages/Links'),
      },
      {
        title: '留言墙',
        name: 'msg-wall',
        path: 'msg-wall',
        component: () => import('@/views/pages/MsgWall'),
      },
      {
        title: '自定义页面',
        name: 'page',
        path: '/page/:alias',
        component: () => import('@/views/pages/Page'),
      },
      {
        title: '分类',
        mame: 'sort',
        path: '/sort/:id',
        component: () => import('@/views/pages/Sort'),
      },
      {
        title: '标签',
        mame: 'tags',
        path: '/tags/:id',
        component: () => import('@/views/pages/Tags'),
      },
      {
        title: '时光机',
        mame: 'cross',
        path: 'cross',
        component: () => import('@/views/pages/Cross'),
      }
    ],
    meta: {
      title:"加载中 ... ",
    }
  },
  {
    path: '/index.html',
    component: () => import('@/views/pages/Index'),
  },
  {
    // 测试方法
    name: 'test',
    path: '/test',
    component: () => import('@/components/public/test')
  },
  {
    // 认证路由 - 登录注册等
    path: '/auth',
    component: () => import('@/views/auth/Base'),
    children: [
      {
        title: '后台',
        name: 'admin',
        path: '',
        component: () => import('@/views/auth/Index'),
      },
      {
        title: '管理文章',
        name: 'manage-article',
        path: 'article',
        component: () => import('@/views/auth/Article'),
      },
      {
        title: '主题配置',
        name: 'option',
        path: 'option',
        component: () => import('@/views/auth/Option'),
      }
    ],
    meta: {
      title:"加载中 ... ",
    }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/auth/Login'),
    meta: {
      title:"登录",
    }
  },
  {
    name: 'register',
    path: '/register',
    component: () => import('@/views/auth/Register'),
    meta: {
      title:"注册",
    }
  },
  {
    // 404 路由
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/pages/404'),
    // meta: {
    //   title:"404",
    //   content: 'edgavsnfjkqvdmsfjkesbv'
    // }
  }
]

// 路由模式
let history = (INIS.route_hash) ? createWebHashHistory() : createWebHistory();

const router = createRouter({
  history,
  routes
})

// 获取缓存中的登录信息
let is_login = inisHelper.get.storage("login")
// 判断缓存是否存在且未过期
if (is_login != "expire" && is_login != false) is_login = true
else is_login = false

// 路由守卫 - 方法一
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title ? to.meta.title : defaultTitle;
  }
  if (!is_login && to.path.indexOf('/auth') != -1) next({path: '/'})
  else next()
});

export default router
