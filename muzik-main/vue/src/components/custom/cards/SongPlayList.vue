<template>
  <div :class="`position-relative  rounded-3 card-box ${bgColor}`">
    <img :id="id" :src="playImg" class="img-fluid mx-auto d-block" alt="play-img" />
    <div class="d-flex align-items-center play-list-icon">
      <svg :class="iconColor" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Play">
          <path id="Fill 1" opacity="0.4" d="M21.8334 11.0052C21.8334 16.9732 16.9709 21.8334 11 21.8334C5.02914 21.8334 0.166687 16.9732 0.166687 11.0052C0.166687 5.02679 5.02914 0.166687 11 0.166687C16.9709 0.166687 21.8334 5.02679 21.8334 11.0052Z" fill="currentColor" />
          <path id="Fill 4" d="M15.3333 11.0053C15.3333 11.2791 15.2472 11.5539 15.0748 11.774C15.0425 11.8172 14.8917 11.9952 14.7732 12.111L14.7086 12.1742C13.8037 13.1335 11.5524 14.5762 10.4106 15.0385C10.4106 15.049 9.73201 15.3239 9.40885 15.3334H9.36577C8.87027 15.3334 8.40708 15.0606 8.1701 14.6183C8.04084 14.3751 7.92235 13.6695 7.91158 13.66C7.81463 13.0272 7.75 12.0583 7.75 10.9948C7.75 9.87957 7.81463 8.86758 7.93312 8.24627C7.93312 8.23574 8.05161 7.66709 8.12701 7.47754C8.2455 7.2048 8.46094 6.97207 8.73023 6.82465C8.94567 6.72039 9.17188 6.66669 9.40885 6.66669C9.65661 6.67827 10.1198 6.83518 10.3029 6.90889C11.5094 7.37224 13.8145 8.88864 14.6978 9.81533C14.8486 9.96276 15.0102 10.1428 15.0533 10.1839C15.2364 10.4156 15.3333 10.6999 15.3333 11.0053Z" fill="currentColor" />
        </g>
      </svg>
      <span class="ms-2 fw-semibold text-capitalize">{{ playTrack }}</span>
    </div>
  </div>
  <router-link :to="{ name: 'home.music-player' }" class="mt-3 h5 text-capitalize">
    {{ titleHeading }}
  </router-link>
  <small class="fw-normal line-count-1 text-capitalize">{{ titleText }}</small>
</template>
<script setup>
defineProps({
  bgColor: { type: String, default: '' },
  iconColor: { type: String, default: '' },
  playImg: { type: String, default: '' },
  id: { type: String, default: '' },
  playTrack: { type: String, default: '' },
  titleHeading: { type: String, default: '' },
  titleText: { type: String, default: '' }
})
</script>
