<template>
    <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

      <!-- (Optional) The Header -->
      <q-header elevated>
        <q-toolbar>
          <q-btn
            flat
            round
            dense
            icon="menu"
            @click="leftDrawer = !leftDrawer"
          />
          <q-toolbar-title class="flex flex-center">
            Tabela Skeleton
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawer"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Links Essenciais
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

      <!-- (Optional) The Footer -->
      <q-footer class="bg-grey-8 text-white">
        <q-toolbar>
          <q-btn
            flat
            round
            dense
            icon="menu"
            @click="leftDrawer = !leftDrawer"
          />
          <q-toolbar-title class="flex flex-center">
            Desenvolvido por Raquel Vuicik
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>

      <q-page-container>
        <!-- This is where pages get injected -->
        <router-view />
      </q-page-container>

    </q-layout>
  </template>

<script>
import EssentialLink from '../components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    icon: 'home',
    route: 'home'
  },
  {
    title: 'Tabela',
    icon: 'table_chart',
    route: 'tabela'
  },
  {
    title: 'Biblioteca Externa',
    icon: 'library_books',
    route: 'biblioteca-externa'
  },
  {
    title: 'Skeleton Table',
    icon: 'table_rows',
    route: 'skeleton-table'
  },
  {
    title: 'Cards',
    icon: 'dashboard',
    route: 'card'
  },
  {
    title: 'Camera',
    icon: 'photo_camera',
    route: 'camera'
  },
  {
    title: 'Geolocalização',
    icon: 'location_on',
    route: 'geolocalizacao'
  },
  {
    title: 'Mapas',
    icon: 'explore',
    route: 'maps'
  }
]

export default {
  name: 'PaginaSkeletonTable',
  components: { EssentialLink },
  data () {
    return {
      leftDrawer: false,
      essentialLinks: linksData
    }
  }
}
</script>
