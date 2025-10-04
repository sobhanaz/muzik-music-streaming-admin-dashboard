<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <div class="d-flex flex-wrap align-items-center">
            <div class="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
              <h4 class="me-2 h4">{{ $t('sidebar.quill') }}</h4>
            </div>
          </div>
          <small
            >For more Information regarding quill Plugin refer
            <a href="https://dev.to/anjolaogunmefun/using-vuequill-editor-in-vue-js3-1cpd#:~:text=VueQuill%20is%20a%20Vue%20component%20used%20to%20create,can%20be%20easily%20used%20in%20Vue%203%20applications">Documentation</a>
          </small>
        </div>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="12">
      <b-card>
        <b-card-title class="card-title">{{ $t('sidebar.intro') }}</b-card-title>
        <b-card-text>Quill allows several ways to customize it to suit your needs. This section is dedicated to tweaking existing functionality.</b-card-text>
        <b-card-body>
          <quill-editor theme="snow" style="height: 200px" />
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
export default {
  name: 'QuillView',
  components: {
    QuillEditor
  }
}
</script>
