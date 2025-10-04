<template>
  <div class="d-flex">
    <img :id="id" :src="reviewImg" class="img-fluid rounded-3 avatar-52" alt="review-img" />
    <div class="ms-4">
      <h6 class="text-capitalize mb-2">{{ reviewText }}</h6>
      <div class="d-flex align-items-center justify-content-between flex-wrap">
        <small class="text-capitalize">{{ reviewSmall }}</small>
        <small class="text-capitalize custom-icon">{{ reviewTime }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  reviewImg: { type: String, default: '' },
  id: { type: String, default: ''  },
  reviewText: { type: String, default: ''  },
  reviewSmall: { type: String, default: ''  },
  reviewTime: { type: String, default: ''  }
})
</script>
