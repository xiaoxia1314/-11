import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import layout from './views/layout/layout'
import home from './views/home/home'
import login from './views/login/login'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 首页
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect:'home',
      children:[
        // 首页
        {
          path:'/home',
          component:home,
          name:'home',
        },
        // 办公系统
        {
          path:'/officeSystem',
          name:'办公系统',
          component:() => import('./views/officeSystem/officeSystem')
        },
        // 办案系统
        {
          path:'/handleSystem',
          name:'办案系统',
          component:() => import('./views/handleSystem/handleSystem')
        },
        // *****************视频录像*************************
        // 录像点播
        {
          path:'/videoFootage/videoDemand',
          name:'录像点播',
          component: () => import('./views/videoFootage/videoDemand')
        },
        // 录像回放
        {
          path:'/videoFootage/videoPlayback',
          name:'录像回放',
          component: () => import('./views/videoFootage/videoPlayback')
        },
        // 检索服务
        {
          path:'/videoFootage/retrievalService',
          name:'检索服务',
          component: () => import('./views/videoFootage/retrievalService')
        },
        // *****************基础管理*************************
        // 添加设备
        {
          path:'/basicManagement/addDevice',
          name:'添加设备',
          component:() => import('./views/basicManagement/addDevice')
        },
        // 设备管理
        {
          path:'/basicManagement/deviceManagement',
          name:'设备管理',
          component:() => import('./views/basicManagement/deviceManagement')
        },
        // 组织管理
        {
          path:'/basicManagement/organizationManagement',
          name:'组织管理',
          component:() => import('./views/basicManagement/organizationManagement')
        },
        // 报警管理
        {
          path:'/alarmManagement',
          name:'报警管理',
          component:() => import('./views/alarmManagement/alarmManagement')
        },
        // *****************系统管理*************************
        // 用户管理
        {
          path:'/SystemManagement/userManagement',
          name:'用户管理',
          component:() => import('./views/SystemManagement/userManagement')
        },
        // 角色管理
        {
          path:'/SystemManagement/roleManagement',
          name:'角色管理',
          component:() => import('./views/SystemManagement/roleManagement')
        },
        // 办公办案自定义
        {
          path:'/SystemManagement/officeCustom',
          name:'办公办案自定义',
          component:() => import('./views/SystemManagement/officeCustom')
        },
         // 业务组管理
        {
          path:'/SystemManagement/businessGroupManagement',
          name:'办公办案自定义',
          component:() => import('./views/SystemManagement/businessGroupManagement')
        },
        // *****************运维管理*************************
        // 设备统计
        {
          path:'/operationManagement/deviceStatistics',
          name:'设备统计',
          component:() => import('./views/operationManagement/deviceStatistics')
        },
        // 视频质量检测
        {
          path:'/operationManagement/videoQualityDetection',
          name:'视频质量检测',
          component:() => import('./views/operationManagement/videoQualityDetection')
        },
        // 统计数据
        {
          path:'/operationManagement/statisticalData',
          name:'统计数据',
          component:() => import('./views/operationManagement/statisticalData')
        },
        // 资源监控
        {
          path:'/operationManagement/resourceMonitor',
          name:'静态资源',
          component:() => import('./views/operationManagement/resourceMonitor')
        },
        // 日志管理
        {
          path:'/operationManagement/logManagement',
          name:'日志管理',
          component:() => import('./views/operationManagement/logManagement')
        },
      ]
      
    },
    // 登陆
    {
      path:'/login',
      name:'login',
      component:login
    }

  ]
})
