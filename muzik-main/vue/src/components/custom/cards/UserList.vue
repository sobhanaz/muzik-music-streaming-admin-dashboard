<template>
  <div class="d-flex align-items-center justify-content-between flex-wrap">
    <div class="d-flex align-items-center">
      <img :id="id" :src="userImg" class="img-fluid rounded-3 avatar-52" alt="user-img" />
      <div class="ms-4">
        <h6 class="text-capitalize">{{ userTitle }}</h6>
        <small class="text-capitalize">{{ userText }}</small>
      </div>
    </div>
    <p class="mb-0 custom-icon">{{ userTime }}</p>
  </div>
</template>

<script setup>
defineProps({
  id: { type: String, default: '' },
  userImg: { type: String, default: '' },
  userTitle: { type: String, default: '' },
  userText: { type: String, default: '' },
  userTime: { type: String, default: '' }
})
</script>
