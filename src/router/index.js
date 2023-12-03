import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

// Navbar : About pages
import AboutView from '@/views/AboutView.vue'
import GalleryView from '@/views/GalleryView.vue'
import TeamView from '@/views/TeamView.vue'
import ActivityView from '@/views/ActivityView.vue'
import NewsView from '@/views/NewsView.vue'


// Navbar : Initiatives pages
import ProjectView from '@/views/ProjectView.vue'
import ReccuringEventsView from '@/views/ReccuringEventsView.vue'
import BlogView from '@/views/BlogView.vue'
import PodcastView from '@/views/PodcastView.vue'

import NotFoundView from '@/views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // Navbar : About pages
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    {
      path: '/events',
      name: 'events',
      component: ActivityView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },

    {
      path: '/projects',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/reccuring-events',
      name: 'reccuring-events',
      component: ReccuringEventsView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/inora',
      name: 'inora',
      component: PodcastView
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView
    }
  ]
})

export default router
