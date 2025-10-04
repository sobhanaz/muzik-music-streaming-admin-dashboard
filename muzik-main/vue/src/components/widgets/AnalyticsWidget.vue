<template>
  <b-card class="card-block card-stretch card-height">
    <div class="mb-2 d-flex justify-content-between align-items-center">
      <span class="text-dark">{{ title }}</span>
      <b-badge tag="a" variant=" bg-soft-primary" pill :href="buttonLink"> {{ buttonText }} </b-badge>
    </div>
    <h2 class="counter">${{ amount }}</h2>
    <small>{{ description }}</small>
  </b-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: ''
    },
    buttonLink: {
      type: String,
      default: 'javascript:void(0);'
    },
    amount: {
      type: [String, Number],
      default: '0'
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
