<template>
  <aside id="first-tour" :class="`sidebar sidebar-base ${sidebarColor} ${sidebarMenuStyle} ${sidebarType.join(' ')}`" data-toggle="main-sidebar" data-sidebar="responsive">
    <div class="sidebar-header d-flex align-items-center justify-content-center">
      <router-link :to="{ name: 'home.dashboard' }" class="navbar-brand">
        <brand-logo></brand-logo>
      </router-link>
      <div class="sidebar-toggle" @click="toggleSidebar">
        <i class="icon">
          <svg class="icon-10" width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.29853 8C7.11974 8 6.94002 7.93083 6.80335 7.79248L3.53927 4.50446C3.40728 4.37085 3.33333 4.18987 3.33333 4.00036C3.33333 3.81179 3.40728 3.63081 3.53927 3.4972L6.80335 0.207279C7.07762 -0.069408 7.52132 -0.069408 7.79558 0.209174C8.06892 0.487756 8.06798 0.937847 7.79371 1.21453L5.02949 4.00036L7.79371 6.78618C8.06798 7.06286 8.06892 7.51201 7.79558 7.79059C7.65892 7.93083 7.47826 8 7.29853 8Z" fill="white"></path>
            <path d="M3.96552 8C3.78673 8 3.60701 7.93083 3.47034 7.79248L0.206261 4.50446C0.0742745 4.37085 0.000325203 4.18987 0.000325203 4.00036C0.000325203 3.81179 0.0742745 3.63081 0.206261 3.4972L3.47034 0.207279C3.74461 -0.069408 4.18831 -0.069408 4.46258 0.209174C4.73591 0.487756 4.73497 0.937847 4.4607 1.21453L1.69649 4.00036L4.4607 6.78618C4.73497 7.06286 4.73591 7.51201 4.46258 7.79059C4.32591 7.93083 4.14525 8 3.96552 8Z" fill="white"></path>
          </svg>
        </i>
      </div>
    </div>
    <div class="sidebar-body pt-0 data-scrollbar">
      <slot name="profile-card"></slot>
      <div class="sidebar-list">
        <slot></slot>
      </div>
    </div>
    <div class="sidebar-footer"></div>
  </aside>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import Scrollbar from 'smooth-scrollbar'
export default {
  setup() {
    const store = useStore()
    const sidebarColor = computed(() => store.getters['setting/sidebar_color'])
    const sidebarType = computed(() => store.getters['setting/sidebar_type'])
    const sidebarMenuStyle = computed(() => store.getters['setting/sidebar_menu_style'])
    const toggleSidebar = () => {
      // Code Here
      if (sidebarType.value.includes('sidebar-mini')) {
        store.dispatch(
          'setting/sidebar_type',
          sidebarType.value.filter((item) => item !== 'sidebar-mini')
        )
      } else {
        store.dispatch('setting/sidebar_type', [...sidebarType.value, 'sidebar-mini'])
      }
    }
    onMounted(() => {
      Scrollbar.init(document.querySelector('.data-scrollbar'), { continuousScrolling: false })
    })
    return { sidebarColor, sidebarType, sidebarMenuStyle, toggleSidebar }
  }
}
</script>
