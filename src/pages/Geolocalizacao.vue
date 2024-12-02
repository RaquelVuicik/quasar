<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-6">
        <img
          alt="mapa"
          src="~assets/map.svg"
        />
      </div>
    </div>
      <div class="row justify-center">
        <q-btn
          class="col-8"
          color="deep-purple-6"
          label="Minha localização"
          push
          size="lg"
        />
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PaginaGeolocalizacao'
}
</script>
