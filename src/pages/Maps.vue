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
      <div class="col-10 text-center">
        <p>
          Latitude: {{ this.latitude }}
        </p>
        <p>
          Longitude: {{ this.longitude }}
        </p>
      </div>
    </div>
      <div class="row justify-center q-mt-lg">
        <q-btn
          class="col-8"
          color="deep-purple-6"
          label="Minha localização"
          push
          size="lg"
          @click="getGeolocation"
        />
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PaginaMaps',
  data () {
    return {
      latitude: '',
      longitude: ''
    }
  },
  methods: {
    getGeolocation () {
      if (navigator.geolocation) {
        this.$q.loading.show()
        navigator.geolocation.getCurrentPosition(this.setPosition, this.errorPosition)
      } else {
        this.errorPosition()
      }
    },
    setPosition (position) {
      const coords = position.coords
      this.latitude = coords.latitude
      this.longitude = coords.longitude
      this.$q.loading.hide()
      this.successNotify()
    },
    errorPosition () {
      this.$q.notify({
        position: 'bottom',
        timeout: 3000,
        color: 'negative',
        textColor: 'white',
        actions: [{ icon: 'close', color: 'white' }],
        message: 'Não foi possível recuperar sua localização'
      })
      this.$q.loading.hide()
    },
    successNotify () {
      this.$q.notify({
        position: 'bottom',
        timeout: 3000,
        color: 'positive',
        textColor: 'white',
        actions: [{ icon: 'check', color: 'white' }],
        message: 'Localização recuperada com sucesso!'
      })
    }
  }
}
</script>
