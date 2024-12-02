
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/tabela',
    component: () => import('layouts/LayoutTabela.vue'),
    children: [
      { path: '', name: 'tabela', component: () => import('pages/Tabela.vue') }
    ]
  },
  {
    path: '/biblioteca-externa',
    component: () => import('layouts/LayoutBibliotecaExterna.vue'),
    children: [
      { path: '', name: 'biblioteca-externa', component: () => import('pages/BibliotecaExterna.vue') }
    ]
  },
  {
    path: '/skeleton-table',
    component: () => import('layouts/LayoutSkeletonTable.vue'),
    children: [
      { path: '', name: 'skeleton-table', component: () => import('pages/SkeletonTable.vue') }
    ]
  },
  {
    path: '/card',
    component: () => import('layouts/LayoutCard.vue'),
    children: [
      { path: '', name: 'card', component: () => import('pages/Card.vue') }
    ]
  },
  {
    path: '/geolocalizacao',
    component: () => import('layouts/LayoutGeolocalizacao.vue'),
    children: [
      { path: '', name: 'geolocalizacao', component: () => import('pages/Geolocalizacao.vue') }
    ]
  },
  {
    path: '/camera',
    component: () => import('layouts/LayoutCamera.vue'),
    children: [
      { path: '', name: 'camera', component: () => import('pages/Camera.vue') }
    ]
  },
  {
    path: '/maps',
    component: () => import('layouts/LayoutMaps.vue'),
    children: [
      { path: '', name: 'maps', component: () => import('pages/Maps.vue') }
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
