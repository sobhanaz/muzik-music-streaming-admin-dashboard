<template>
  <router-view />
</template>

<script>
import { onMounted, onUnmounted, computed } from 'vue'
import { useStore } from 'vuex'
import { getQueryString } from './utilities/dom'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    store.dispatch('setting/setSetting')
    const sidebarType = computed(() => store.getters['setting/sidebar_type'])
    const resizePlugin = () => {
      const sidebarResponsive = document.querySelector('[data-sidebar="responsive"]')
      if (window.innerWidth < 1025) {
        if (sidebarResponsive !== null) {
          if (!sidebarResponsive.classList.contains('sidebar-mini')) {
            sidebarResponsive.classList.add('on-resize')
            store.dispatch('setting/sidebar_type', [...sidebarType.value, 'sidebar-mini'])
          }
        }
      } else {
        if (sidebarResponsive !== null) {
          if (sidebarResponsive.classList.contains('sidebar-mini') && sidebarResponsive.classList.contains('on-resize')) {
            sidebarResponsive.classList.remove('on-resize')
            store.dispatch(
              'setting/sidebar_type',
              sidebarType.value.filter((item) => item !== 'sidebar-mini')
            )
          }
        }
      }
    }
    onMounted(() => {
      window.addEventListener('resize', resizePlugin)
      setTimeout(() => {
        resizePlugin()
      }, 200)
      const layout = getQueryString('layout')
      switch (layout) {
        case 'dark':
          store.dispatch('setting/theme_scheme', 'dark')
          break
        case 'semi-dark':
          store.dispatch('setting/theme_scheme', 'light')
          store.dispatch('setting/sidebar_color', 'sidebar-dark')
          break
        case 'full-width':
          store.dispatch('setting/page_layout', 'container-fluid')
          break
        case 'mini':
          store.dispatch('setting/sidebar_type', ['sidebar-mini'])
          store.dispatch('setting/sidebar_menu_style', 'sidebar-default navs-rounded-all')
          store.dispatch('setting/page_layout', 'container-fluid')
          break
        case 'sidebar-pill-one':
          store.dispatch('setting/theme_color', {
            value: 'theme-color-pink',
            colors: {
              '--{{prefix}}primary': '#fa6aae'
            }
          })
          store.dispatch('setting/sidebar_menu_style', 'sidebar-default navs-pill')
          store.dispatch('setting/page_layout', 'container-fluid')
          break
        case 'sidebar-pill-all':
          store.dispatch('setting/theme_color', {
            value: 'theme-color-blue',
            colors: {
              '--{{prefix}}primary': '#2185F4'
            }
          })
          store.dispatch('setting/sidebar_menu_style', 'sidebar-default navs-pill-all')
          store.dispatch('setting/page_layout', 'container-fluid')
          break
        case 'sidebar-rounded-one':
          store.dispatch('setting/theme_color', {
            value: 'theme-color-green',
            colors: {
              '--{{prefix}}primary': '#34A853'
            }
          })
          store.dispatch('setting/sidebar_type', [])
          store.dispatch('setting/sidebar_menu_style', 'sidebar-default navs-rounded')
          store.dispatch('setting/page_layout', 'container-fluid')
          break
        case 'sidebar-rounded-all':
          store.dispatch('setting/theme_color', {
            value: 'theme-color-royal-blue',
            colors: {
              '--{{prefix}}primary': '#553AF9'
            }
          })
          store.dispatch('setting/sidebar_type', [])
          store.dispatch('setting/sidebar_menu_style', 'sidebar-default navs-rounded-all')
          store.dispatch('setting/page_layout', 'container-fluid')
          break
        case 'rtl':
          store.dispatch('setting/theme_scheme_direction', 'rtl')
          break
        case 'dark-rtl':
          store.dispatch('setting/theme_scheme', 'dark')
          store.dispatch('setting/theme_scheme_direction', 'rtl')
          break

        default:
          break
      }
    })
    onUnmounted(() => {
      window.removeEventListener('resize', resizePlugin)
    })
  }
}
</script>
<style lang="scss">
@import '../src/assets/custom-vue/scss/styles.scss';
</style>
