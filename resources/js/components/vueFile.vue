<template>
  <div id="app">
    <file-pond
      ref="pond"
      v-model="myFiles"
      name="test"
      label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
      :allow-multiple="false"
      accepted-file-types="image/jpeg, image/png"
    />
  </div>
</template>

<script>
// Import Vue FilePond
import vueFilePond from 'vue-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
)
export default {
  name: 'VueFile',
  components: {
    FilePond
  },
  computed: {
    myFiles: {
      get () {
        return []
      },
      set (val) {
        let input =  (val.length>0) ? val[0].file : val
          this.$emit('input', input)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
