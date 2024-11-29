
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/tabela',
    component: () => import('layouts/LayoutTabela.vue'),
    children: [
      { path: '', component: () => import('pages/Tabela.vue') }
    ]
  },
  {
    path: '/biblioteca-externa',
    component: () => import('layouts/LayoutBibliotecaExterna.vue'),
    children: [
      { path: '', component: () => import('pages/BibliotecaExterna.vue') }
    ]
  },
  {
    path: '/skeleton-table',
    component: () => import('layouts/LayoutSkeletonTable.vue'),
    children: [
      { path: '', component: () => import('pages/SkeletonTable.vue') }
    ]
  },
  {
    path: '/card',
    component: () => import('layouts/LayoutCard.vue'),
    children: [
      { path: '', component: () => import('pages/Card.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
