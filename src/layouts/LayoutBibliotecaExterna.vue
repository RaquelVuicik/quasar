<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
        />
        <q-toolbar-title class="flex flex-center">
          Biblioteca Externa
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
  // name: 'LayoutName',

  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>
