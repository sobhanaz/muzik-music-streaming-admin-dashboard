<template>
  <b-card no-body>
    <b-card-header class="d-flex align-items-center justify-content-between">
      <div class="header-title">
        <h4 class="card-title">Gallery</h4>
      </div>
      <span>132 pics</span>
    </b-card-header>
    <b-card-body>
      <div class="d-grid gap-card grid-cols-3">
        <a v-for="(item, index) in list" :key="index" data-fslightbox="gallery" href="#" @click="($event) => toggler = !toggler  ">
          <img :src="item.image" alt="product-details" class="img-fluid bg-soft-info rounded" loading="lazy" />
        </a>
      </div>
    </b-card-body>
  </b-card>
  <FsLightbox
:toggler="toggler" :sources="[
'assets/images/dashboard/04.png',
'assets/images/dashboard/02.png',
'assets/images/dashboard/08.png',
'assets/images/dashboard/04.png',
'assets/images/dashboard/03.png',
'assets/images/dashboard/06.png',
'assets/images/dashboard/05.png',
'assets/images/dashboard/04.png',
'assets/images/dashboard/01.png']" />
</template>
<script>
import FsLightbox from 'fslightbox-vue/v3'
export default {
  components:{FsLightbox},
  props: {
    list: { type: String, required: true },
    image: { type: String, required: true }
  },
  data(){
    return {
      toggler : false
    }
  }
}
</script>
