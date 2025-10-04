<template>
  <img :id="id" :src="songImg" class="img-fluid rounded-3" alt="song-img" />
  <router-link :to="{ name: 'home.music-player' }" class="mt-3 h5 text-capitalize line-count-1">{{ titleHeading }}</router-link>
  <small class="fw-normal text-capitalize line-count-1">{{ titleText }}</small>
</template>

<script setup>
defineProps({
  songImg: { type: String, default: '' },
  id: { type: String, default: '' },
  titleHeading: { type: String, default: '' },
  titleText: { type: String, default: '' }
})
</script>
