<template>
  <default-navbar @menu-open="showOffcanvas" @menu-close="hideOffcanvas">
    <template #navbar-buttons-start>
      <!-- Extra Actions -->
    </template>
    <a href="#" class="navbar-brand">
      <brand-logo :color="true" />
    </a>
    <div class="sidebar-toggle" data-toggle="sidebar" data-active="true" @click="toggleSidebar">
      <i>
        <svg class="icon-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.00159 1.00005C2.51175 1.00005 3.02458 1.1887 3.41455 1.566L12.7284 10.5334C13.105 10.8977 13.316 11.3913 13.316 11.9082C13.316 12.4224 13.105 12.916 12.7284 13.2804L3.41455 22.2529C2.63195 23.0075 1.36589 23.0075 0.583285 22.2478C-0.196649 21.488 -0.193978 20.2605 0.588627 19.5059L8.47611 11.9082L0.588627 4.31048C-0.193978 3.55588 -0.196649 2.33095 0.583285 1.57118C0.973252 1.18871 1.48876 1.00005 2.00159 1.00005" fill="currentColor" />
          <path d="M12.6854 1.00005C13.1956 1.00005 13.7084 1.1887 14.0984 1.566L23.4122 10.5334C23.7888 10.8977 23.9998 11.3913 23.9998 11.9082C23.9998 12.4224 23.7888 12.916 23.4122 13.2804L14.0984 22.2529C13.3158 23.0075 12.0497 23.0075 11.2671 22.2478C10.4872 21.488 10.4899 20.2605 11.2725 19.5059L19.1599 11.9082L11.2725 4.31048C10.4899 3.55588 10.4872 2.33095 11.2671 1.57118C11.6571 1.18871 12.1726 1.00005 12.6854 1.00005" fill="currentColor" />
        </svg>
      </i>
    </div>
    <div class="d-flex align-items-center justify-content-between product-offcanvas">
      <!-- Horizontal Nav Start Here -->
      <b-offcanvas v-model="responsiveNav" :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'" title="" class="shadow-none iq-product-menu-responsive">
        <horizontal-nav></horizontal-nav>
      </b-offcanvas>
      <!-- Horizontal Nav End Here -->
      <slot></slot>
    </div>
  </default-navbar>
</template>
<script>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import DefaultNavbar from '../custom/navbar/DefaultNavbar.vue'
import HorizontalNav from './HorizontalNav.vue'
export default {
  components: {
    DefaultNavbar,
    HorizontalNav
  },
  props: {
    fullsidebar: { type: Boolean, default: false }
  },
  setup() {
    const store = useStore()
    const carts = computed(() => store.getters.carts)
    const headerNavbar = computed(() => store.getters['setting/header_navbar'])
    const fontSize = computed(() => store.getters['setting/theme_font_size'])
    const sidebarType = computed(() => store.getters['setting/sidebar_type'])
    const themeSchemeDirection = computed(() => store.getters['setting/theme_scheme_direction'])
    const fullScreen = ref(false)
    const isHidden = ref(false)
    const responsiveNav = ref(false)

    const showOffcanvas = () => {
      responsiveNav.value = true
    }

    const hideOffcanvas = () => {
      responsiveNav.value = false
    }

    const openFullScreen = () => {
      if (fullScreen.value) {
        fullScreen.value = false
        document.exitFullscreen()
      } else {
        fullScreen.value = true
        document.documentElement.requestFullscreen()
      }
    }

    const onscroll = () => {
      const yOffset = document.documentElement.scrollTop
      const navbar = document.querySelector('.navs-sticky')
      if (navbar !== null) {
        if (yOffset >= 100) {
          navbar.classList.add('menu-sticky')
        } else {
          navbar.classList.remove('menu-sticky')
        }
      }
    }

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
      window.addEventListener('scroll', onscroll())
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', onscroll())
    })

    const updateRadio = (size) => {
      store.dispatch('setting/theme_font_size', size)
    }
    return {
      headerNavbar,
      openFullScreen,
      updateRadio,
      toggleSidebar,
      fontSize,
      fullScreen,
      isHidden,
      carts,
      themeSchemeDirection,
      responsiveNav,
      showOffcanvas,
      hideOffcanvas
    }
  }
}
</script>
<style>
.iq-product-menu-responsive .offcanvas-header {
  display: none;
}
</style>
