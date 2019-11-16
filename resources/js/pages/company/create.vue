<template>
  <modal id="modal-create-company" ref="modalCrear"
         button
         :title="`${ $t('create') } ${ $t('company') }`"
         button-class="btn btn-sm btn-primary"
         :button-text="$t('create')"
         @save="save"
         :cargando="cargando"
  >
    <template slot="button-icon">
      <i class="fas fa-plus" />
    </template>

    <form @submit.prevent="save" @keydown="form.onKeydown($event)">
      <div class="input-group my-3">
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-user" />
          </div>
        </div>
        <input v-model="form.name" type="text" :class="{ 'is-invalid': form.errors.has('name') }"
               class="form-control" :placeholder="$t('name')"
        >

        <has-error :form="form" field="name" />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-envelope" />
          </div>
        </div>
        <input v-model="form.email" type="email" :class="{ 'is-invalid': form.errors.has('email') }"
               class="form-control" :placeholder="$t('email')"
        >

        <has-error :form="form" field="email" />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-append">
          <div class="input-group-text">
            <span class="fas fa-code" />
          </div>
        </div>
        <input v-model="form.website" type="text" :class="{ 'is-invalid': form.errors.has('website') }"
               class="form-control" :placeholder="$t('website')"
        >

        <has-error :form="form" field="website" />
      </div>
      <vueFile v-model="form.logofile" />
    </form>
  </modal>
</template>

<script>
import Form from 'vform'
export default {
  name: 'CrearCompany',
  data: () => ({
    form: new Form({
      name: '',
      email: '',
      website: '',
      logofile: ''
    }),
    cargando:false,
  }),
  methods: {
    async save () {
      this.cargando = true
      const resp = await this.form.submit('post', '/api/companies', {
        // Transform form data to FormData
        transformRequest: [
          function(data) {
          let formData = new FormData()
            for(let key of Object.keys(data)){
              formData.append(key,data[key])
            }
            return formData
          }
        ]
      }).catch(error => {
        console.log(error)
      })
      if (resp) {
        this.$refs.modalCrear.close()
        this.form.clear()
        this.form.reset()
        this.$emit('ok')
      }
      this.cargando = false;
    }
  }
}
</script>

<style scoped>

    .button-wrapper {
        display: flex;
        justify-content: center;
        margin-top: 17px;
    }

    .button {
        color: white;
        font-size: 16px;
        padding: 10px 20px;
        background: #3fb37f;
        cursor: pointer;
        transition: background 0.5s;
    }

    .button:hover {
        background: #38d890;
    }

    .button input {
        display: none;
    }
</style>
