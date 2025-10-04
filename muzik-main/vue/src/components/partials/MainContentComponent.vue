<template>
  <div id="page_layout" :class="`content-inner pb-0 ${pageLayout}`">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const pageLayout = computed(() => store.getters['setting/page_layout'])
    return {
      pageLayout
    }
  }
}
</script>
