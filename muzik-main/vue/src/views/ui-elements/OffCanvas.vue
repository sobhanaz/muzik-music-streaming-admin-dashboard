<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Offcanvas components</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the .show class on an element with the .offcanvas class.</p>
          <ul class="list-inline p-0 m-0 mb-2">
            <li><code>.offcanvas</code> hides content (default)</li>
            <li><code>.offcanvas.show</code> shows content</li>
          </ul>
          <b-button variant="primary mt-2" type="button" @click="offcanvasStart = true">Toggle offcanvas</b-button>
          <b-offcanvas v-model="offcanvasStart" class="offcanvasleft" placement="start" title="Offcanvas left">...</b-offcanvas>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Offcanvas components</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Scrolling the element is disabled when an offcanvas and its backdrop are visible. Use the data-bs-scroll attribute to toggle scrolling and data-bs-backdrop to toggle the backdrop.</p>
          <div class="mt-2 d-flex flex-wrap gap-2">
            <b-button variant="primary mt-2" type="button" @click="offcanvaswithoutbackdrop = true">Enable body scrolling</b-button>
            <b-button variant="primary mt-2" type="button" @click="offcanvasStart = true">Enable backdrop (default)</b-button>
            <b-button variant="primary mt-2" type="button" @click="offcanvasScroll = true">Enable both scrolling & backdrop</b-button>
          </div>

          <b-offcanvas v-model="offcanvaswithoutbackdrop" class="offcanvasscroll" placement="start" title="Offcanvas Scroll" :backdrop="false" :body-scrolling="true">...</b-offcanvas>
          <b-offcanvas v-model="offcanvasScroll" class="offcanvasscroll" placement="start" title="Offcanvas Scroll" :body-scrolling="true">...</b-offcanvas>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Offcanvas components</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>There’s no default placement for offcanvas components, so you must add one of the modifier classes below;</p>
          <ul class="list-inline p-0">
            <li><code>.offcanvas-start</code> places offcanvas on the left of the viewport (shown above)</li>
            <li><code>.offcanvas.end</code> places offcanvas on the right of the viewport</li>
            <li><code>.offcanvas.top</code> places offcanvas on the top of the viewport</li>
            <li><code>.offcanvas.bottom</code> places offcanvas on the bottom of the viewport</li>
          </ul>
          <div class="mt-2 d-flex flex-wrap gap-2">
            <b-button variant="primary" type="button" @click="offcanvasTop = true">Toggle top offcanvas</b-button>

            <b-button variant="primary" type="button" @click="offcanvasEnd = true">Toggle right offcanvas</b-button>

            <b-button variant="primary" type="button" @click="offcanvasBottom = true">Toggle bottom offcanvas</b-button>

            <b-button variant="primary" type="button" @click="offcanvasStart = true">Toggle left offcanvas</b-button>
          </div>

          <b-offcanvas v-model="offcanvasTop" class="offcanvastop" placement="top" title="Offcanvas top">...</b-offcanvas>
          <b-offcanvas v-model="offcanvasEnd" class="offcanvasright" placement="end" title="Offcanvas right">...</b-offcanvas>
          <b-offcanvas v-model="offcanvasBottom" class="offcanvasbottom" placement="bottom" title="Offcanvas bottom">...</b-offcanvas>
          <b-offcanvas v-model="offcanvasStart" class="offcanvasleft" placement="start" title="Offcanvas left">...</b-offcanvas>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup>
import { ref } from 'vue'
const offcanvasTop = ref(false)
const offcanvasStart = ref(false)
const offcanvasEnd = ref(false)
const offcanvasBottom = ref(false)
const offcanvasScroll = ref(false)
const offcanvaswithoutbackdrop = ref(false)
</script>
