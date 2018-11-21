/* jshint esversion: 6 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home.vue'
import Page from '../view/Page.vue'
import News from '../view/page/News.vue'
import Material from '../view/page/Material.vue'
import Download from '../view/page/Download.vue'
import Recharge from '../view/page/Recharge.vue'
// news
import NewsIndex from '../view/page/news/NewsIndex.vue'
// download
import DownloadIndex from '../view/page/download/DownloadIndex.vue'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page',
    name: 'Page',
    component: Page,
    children: [
      {
        path: '/news',
        component: News,
        children: [
          {
            path: '/',
            name: 'News',
            component: NewsIndex
          }
        ]
      },
      {
        path: '/material',
        name: 'Material',
        component: Material
      },
      {
        path: '/download',
        component: Download,
        children: [
          {
            path: '/',
            name: 'Download',
            component: DownloadIndex
          }
        ]
      },
      {
        path: '/recharge',
        name: 'Recharge',
        component: Recharge
      }
    ]
  }]
})
