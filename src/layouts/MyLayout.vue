<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="bg-deep-purple text-white">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title class="flex flex-center">
          Introdução ao Quasar
        </q-toolbar-title>
      </q-toolbar>
      <!-- <q-tabs>
        <q-route-tab
          icon="map"
          to="/your/route"
          replace
          label="One Tab"
        />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs> -->
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer class="bg-grey-8 text-white">
        <!-- <q-tabs switch-indicator>
          <q-route-tab
            icon="map"
            to="/your/route"
            replace
            label="One Tab"
          />
          <q-route-tab
            icon="assignment"
            to="/some/other/route"
            replace
            label="Other Tab"
          />
        </q-tabs> -->
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
  name: 'PaginaInicial',
  components: { EssentialLink },
  data () {
    return {
      leftDrawer: false,
      essentialLinks: linksData
    }
  }
}
</script>
