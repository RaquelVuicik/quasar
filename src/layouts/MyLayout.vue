<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="bg-deep-purple text-white">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
        />
        <q-toolbar-title class="flex flex-center">
          Introdução ao Quasar
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer class="bg-grey-8 text-white">
        <q-toolbar>
        <q-btn
          flat
          round
          dense
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
export default {
  name: 'PaginaInicial',

  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>
