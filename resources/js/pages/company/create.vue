<template>
  <modal id="modal-create-company" ref="modalCrear"
         button
         :title="`${ $t('create') } ${ $t('company') }`"
         button-class="btn btn-sm btn-primary"
         :button-text="$t('create')"
         @save="save"
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
    </form>
  </modal>
</template>

<script>
import Form from 'vform'

export default {
  name: 'CrearCompany',
  data: () => ({
    img: 'https://images.pexels.com/photos/226746/pexels-photo-226746.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    form: new Form({
      name: '',
      email: '',
      website: ''
    }),
    remember: false
  }),
  methods: {
    change ({ canvas }) {
      console.log(this.dataURLtoFile(canvas.toDataURL()))
    },
    uploadImage (event) {
      // Reference to the DOM input element
      var input = event.target
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader()
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.img = e.target.result
        }
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0])
      }
    },
    async save () {
      const resp = await this.form.post('/api/companies').catch(error => {
        console.log(error)
      })
      if (resp) {
        this.$refs.modalCrear.close()
        this.form.clear()
        this.form.reset()
        this.$emit('ok')
      }
    },
    dataURLtoFile (dataurl, filename) {
      var arr = dataurl.split(',')
      var mime = arr[0].match(/:(.*?);/)[1]
      var bstr = atob(arr[1])
      var n = bstr.length
      var u8arr = new Uint8Array(n)

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }

      return new File([u8arr], filename, { type: mime })
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
