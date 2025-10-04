<template>
  <div :id="id" :class="'tab-content' + ' ' + extraclass">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'TabContent',
  props: {
    id: { type: String, default: 'myTabContent' },
    extraclass: { type: String, default: 'null' }
  }
}
</script>
