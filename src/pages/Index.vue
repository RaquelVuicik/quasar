<template>
  <q-page class="container" padding>
    <p class="text-h4">Formulário</p>
      <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="row q-col-gutter-md"
      >
        <q-input
          outlined
          clearable
          clear-icon="close"
          v-model="form.nome"
          color="deep-purple"
          label="Nome"
          class="col-md-12 col-sm-12 col-xs-12"
          :rules="[
            val => val && val.length > 0 || 'Nome obrigatório'
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="person"/>
          </template>
        </q-input>
        <q-input
          v-model.number="form.idade"
          clearable
          clear-icon="close"
          type="number"
          outlined
          label="Idade"
          class="col-md-12 col-sm-12 col-xs-12"
          color="deep-purple"
          :rules="[
            val => val !== null && val !== '' || 'Idade obrigatória',
            val => val > 0 && val < 100 || 'Coloque uma idade real'
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="person"/>
          </template>
        </q-input>
        <q-input
          v-model="form.email"
          clearable
          clear-icon="close"
          label="Email"
          suffix="@gmail.com"
          outlined
          class="col-md-12 col-sm-12 col-xs-12"
          color="deep-purple"
          :rules="[
            val => val && val.length > 0 || 'Email obrigatório'
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="email"/>
          </template>
        </q-input>
        <q-input
          v-model="form.telefone"
          clearable
          clear-icon="close"
          label="Telefone"
          outlined
          class="col-md-12 col-sm-12 col-xs-12"
          color="deep-purple"
          mask="(##) #####-####"
          unmasked-value
          :rules="[
            val => val && val.length > 0 || 'Telefone obrigatório',
            val => val.length === 11 || 'Coloque um telefone real'
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="phone"/>
          </template>
        </q-input>
        <div class="col-12">
          <q-btn
            label="Cadastrar"
            type="submit"
            color="primary"
            class="float-right"
            />
        </div>
      </q-form>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      form: {
        nome: '',
        idade: null,
        email: '',
        telefone: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$q.notify({
        message: 'Cadastro realizado com sucesso',
        color: 'positive',
        icon: 'check_circle_outline'
      })
    },
    onReset () {
      console.log('reseta formulário')
    }
  }
}
</script>
