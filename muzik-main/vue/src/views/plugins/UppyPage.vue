<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <div class="d-flex flex-wrap align-items-center">
            <div class="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
              <h4 class="me-2 h4">{{ $t('sidebar.uppy') }}</h4>
            </div>
          </div>
          <small
            >For more Information regarding Uppy Plugin refer
            <a href="https://uppy.io/docs/vue/">Documentation</a>
          </small>
        </div>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="12">
      <b-card>
        <b-card-title>{{ $t('sidebar.intro') }}</b-card-title>
        <b-card-text>Uppy is a sleek and modular file uploader. It fetches files from local disk, Google Drive, Instagram, remote urls, cameras etc, and then uploads them to the final destination. It’s fast, has a comprehensible API and lets you worry about more important problems than building a file uploader.</b-card-text>
        <b-card-body class="text-center">
          <uppy-dashboard id="drag-drop-area" />
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import UppyDashboard from '@/components/custom/uppy/UppyDashboard.vue'
export default {
  name: 'UppyPage',
  components: {
    UppyDashboard
  }
}
</script>
