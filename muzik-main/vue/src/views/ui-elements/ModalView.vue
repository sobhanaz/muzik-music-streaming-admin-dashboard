<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Modal components</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-1">Below is a <em>static</em> modal example (meaning its <code>position</code> and <code>display</code> have been overridden). Included are the modal header, modal body (required for <code>padding</code>), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.</p>
          <!-- Button trigger modal -->
          <b-button variant="primary me-2 btn btn-primary mt-2" @click="modal = true">Launch demo modal</b-button>
          <b-modal v-model="modal" title="Modal title"> ... </b-modal>
          <b-modal v-model="modalstatic" title="Modal title" no-close-on-backdrop><p>I will not close if you click outside me. Don't even try to press escape key.</p></b-modal>
          <b-modal v-model="modalscroll" scrollable title="Modal title">
            <p v-for="i in 20" :key="i">This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
          </b-modal>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Modal Scrolling</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-1">When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>
          <!-- Button trigger modal -->
          <b-button variant="primary me-2 btn btn-primary mt-2" @click="modalscroll = true">Launch Demo Modal</b-button>
          <b-modal v-model="modal" title="Modal title"> ... </b-modal>
          <b-modal v-model="modalstatic" title="Modal title" no-close-on-backdrop><p>I will not close if you click outside me. Don't even try to press escape key.</p></b-modal>
          <b-modal v-model="modalscroll" scrollable title="Modal title">
            <p v-for="i in 20" :key="i">This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
          </b-modal>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Optional sizes</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="mt-2 d-flex flex-wrap gap-1">
            <p class="mb-1">Modals have three optional sizes, available via modifier classes to be placed on a .modal-dialog. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.</p>
            <!-- Extra large modal -->
            <b-button variant=" primary me-2 btn btn-primary mt-2" @click="modalextralarge = true">Extra Large Modal</b-button>
            <b-modal v-model="modalextralarge" size="xl" title="Modal title"> ... </b-modal>

            <!-- Large modal -->
            <b-button variant=" primary me-2 btn btn-primary mt-2" @click="modallarge = true">Extra Large Modal</b-button>
            <b-modal v-model="modallarge" size="lg" title="Modal title"> ... </b-modal>

            <!-- Small modal -->
            <b-button variant=" primary me-2 btn btn-primary mt-2" @click="modalsmall = true">Small Modal</b-button>
            <b-modal v-model="modalsmall" size="sm" title="Modal title"> ... </b-modal>
          </div>
        </b-card-body>
      </b-card>
    </b-col>

    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Scrolling long content</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p class="mb-1">When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>
          <!-- Button trigger modal -->
          <b-button variant="primary me-2 primary me-2 btn btn-primary mt-2" @click="modalscroll = true">Launch Demo Modal</b-button>
          <b-modal v-model="modalscroll" scrollable title="Modal title">
            <p v-for="i in 20" :key="i">This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
          </b-modal>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Vertically centered</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="mt-1 d-flex flex-wrap gap-1">
            <p class="mb-1">Add <code class="highlighter-rouge">.modal-dialog-centered</code> to <code class="highlighter-rouge">.modal-dialog</code> to vertically center the modal.</p>
            <!-- Button trigger modal -->
            <b-button variant="primary me-2 btn btn-primary mt-2" @click="modal = true">Launch demo modal</b-button>
            <b-modal v-model="modal" title="Modal title"> ... </b-modal>
            <b-modal v-model="modalstatic" title="Modal title" no-close-on-backdrop><p>I will not close if you click outside me. Don't even try to press escape key.</p></b-modal>
            <b-modal v-model="modalscroll" scrollable title="Modal title">
              <p v-for="i in 20" :key="i">This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
            </b-modal>
            <b-button variant="primary me-2 primary me-2 btn btn-primary mt-2" @click="modalscroll = true">Vertically centerded scrollable modal</b-button>
            <b-modal v-model="modalscroll" scrollable title="Modal title">
              <p v-for="i in 20" :key="i">This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
            </b-modal>
          </div>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Using the grid</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="mt-2 d-flex flex-wrap gap-1">
            <p class="mb-1">
              Utilize the Bootstrap grid system within a modal by nesting
              <code>.container-fluid</code> within the <code>.modal-body</code>. Then, use the normal grid system classes as you would anywhere else.
            </p>
            <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#gridSystemModal">Launch demo modal</button>
          </div>
        </b-card-body>
      </b-card>
    </b-col>

    <b-col sm="12" lg="12">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Fullscreen Modal</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="mt-2 d-flex flex-wrap gap-1">
            <b-button variant="primary" class="btn btn-primary mb-2" @click="modalfullscreen = true">Full screen</b-button>
            <b-modal v-model="modalfullscreen" fullscreen dialog-class="testt" title="Full screen modal">
              <p class="my-4">.....</p>
            </b-modal>
            <b-button variant="primary me-1 btn btn-primary mb-2" @click="modal = true">Full screen below sm</b-button>
            <b-modal v-model="modal" title="Modal title"> ... </b-modal>
            <b-button variant="primary me-1 btn btn-primary mb-2" @click="modal = true">Full screen below md</b-button>
            <b-modal v-model="modal" title="Modal title"> ... </b-modal>
            <b-button variant="primary me-1 btn btn-primary mb-2" @click="modal = true">Full screen below lg</b-button>
            <b-modal v-model="modal" title="Modal title"> ... </b-modal>
            <b-button variant="primary me-1 btn btn-primary mb-2" @click="modal = true">Full screen below xl</b-button>
            <b-modal v-model="modal" title="Modal title"> ... </b-modal>
            <b-button variant="primary me-1 btn btn-primary mb-2" @click="modal = true">Full screen below xxl</b-button>
            <b-modal v-model="modal" title="Modal title"> ... </b-modal>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup>
import { ref } from 'vue'
const modal = ref(false)
const modalstatic = ref(false)
const modalscroll = ref(false)
const modalfullscreen = ref(false)
const modalextralarge = ref(false)
const modallarge = ref(false)
const modalsmall = ref(false)
</script>
