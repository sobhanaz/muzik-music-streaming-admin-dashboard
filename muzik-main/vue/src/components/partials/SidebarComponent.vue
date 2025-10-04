<template>
  <!-- Sidebar Component Start Here-->
  <default-sidebar>
    <ul id="sidebar-menu" class="navbar-nav iq-main-menu">
      <side-menu title="Main" class="nav-item static-item mt-5" :static-item="true"></side-menu>
      <side-menu title="Home" icon-type="muzik" icon="home" toggle-id="home" :caret-icon="true" :route="{ popup: 'false', to: 'home' }" :active="currentRoute.includes('home')" @on-click="toggle">
        <b-collapse id="home" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('home')">
          <side-menu title="Dashboard" icon="circle" :icon-size="10" icon-type="solid" mini-title="D" :route="{ to: 'home.dashboard' }"></side-menu>
          <side-menu title="Release" icon="circle" :icon-size="10" icon-type="solid" mini-title="R" :route="{ to: 'home.release' }"></side-menu>
          <side-menu title="Albums" icon="circle" :icon-size="10" icon-type="solid" mini-title="A" :route="{ to: 'home.albums' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Admin" icon-type="muzik" icon="user-setting" toggle-id="admin" :caret-icon="true" :route="{ popup: 'false', to: 'admin' }" :active="currentRoute.includes('admin')" @on-click="toggle">
        <b-collapse id="admin" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('admin')">
          <side-menu is-tag="router-link" title="Admin" icon="circle" :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'admin.dashboard' }"></side-menu>
          <side-menu is-tag="router-link" title="Category" icon="circle" :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'admin.category' }"></side-menu>
          <side-menu is-tag="router-link" title="Writer" icon="circle" :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'admin.writer' }"></side-menu>
          <side-menu is-tag="router-link" title="Singer" icon="circle" :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'admin.singer' }"></side-menu>
          <side-menu is-tag="router-link" title="Music" icon="circle" :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'admin.muzic' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Special Pages" icon-type="muzik" icon="files" toggle-id="special-pages" :caret-icon="true" :route="{ popup: 'false', to: 'special-pages' }" :active="currentRoute.includes('special-pages')" @on-click="toggle">
        <b-collapse id="special-pages" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('special-pages')">
          <side-menu is-tag="router-link" title="Billing" icon="circle" :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'special-pages.billing' }"></side-menu>
          <side-menu is-tag="router-link" title="Calender" icon="circle" :icon-size="10" icon-type="solid" mini-title="C" :route="{ to: 'special-pages.calender' }"></side-menu>
          <side-menu is-tag="router-link" title="Kanban" icon="circle" :icon-size="10" icon-type="solid" mini-title="K" :route="{ to: 'special-pages.kanban' }"></side-menu>
          <side-menu is-tag="router-link" title="Pricing" icon="circle" :icon-size="10" icon-type="solid" mini-title="P" :route="{ to: 'special-pages.pricing' }"></side-menu>
          <side-menu is-tag="router-link" title="Timeline" icon="circle" :icon-size="10" icon-type="solid" mini-title="T" :route="{ to: 'special-pages.timeline' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Auth Skins" icon-type="muzik" icon="unlock" toggle-id="auth-skins" :caret-icon="true" :route="{ popup: 'false', to: 'auth' }" :active="currentRoute.includes('auth')" @on-click="toggle">
        <b-collapse id="auth-skins" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('auth')">
          <side-menu is-tag="router-link" title="Login" icon="circle" :icon-size="10" icon-type="solid" mini-title="L" :route="{ to: 'auth.login' }"></side-menu>
          <side-menu is-tag="router-link" title="Register" icon="circle" :icon-size="10" icon-type="solid" mini-title="R" :route="{ to: 'auth.register' }"></side-menu>
          <side-menu is-tag="router-link" title="Confirm Mail" icon="circle" :icon-size="10" icon-type="solid" mini-title="CM" :route="{ to: 'auth.varify-email' }"></side-menu>
          <side-menu is-tag="router-link" title="Lock Screen" icon="circle" :icon-size="10" icon-type="solid" mini-title="LS" :route="{ to: 'auth.lock-screen' }"></side-menu>
          <side-menu is-tag="router-link" title="Recover Password" icon="circle" :icon-size="10" icon-type="solid" mini-title="RP" :route="{ to: 'auth.reset-password' }"></side-menu>
          <side-menu is-tag="router-link" title="Two Factor" icon="circle" :icon-size="10" icon-type="solid" mini-title="TF" :route="{ to: 'auth.two-factor' }"></side-menu>
          <side-menu is-tag="router-link" title="Account Deactivate" icon="circle" :icon-size="10" icon-type="solid" mini-title="AD" :route="{ to: 'auth.account-deactivated' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Users" icon-type="muzik" icon="user" toggle-id="users" :caret-icon="true" :route="{ popup: 'false', to: 'user' }" :active="currentRoute.includes('user')" @on-click="toggle">
        <b-collapse id="users" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('user')">
          <side-menu is-tag="router-link" title="User Profile" icon="circle" :icon-size="10" icon-type="solid" mini-title="UP" :route="{ to: 'user.user-profile' }"></side-menu>
          <side-menu is-tag="router-link" title="User Add" icon="circle" :icon-size="10" icon-type="solid" mini-title="UA" :route="{ to: 'user.user-add' }"></side-menu>
          <side-menu is-tag="router-link" title="User List" icon="circle" :icon-size="10" icon-type="solid" mini-title="UL" :route="{ to: 'user.user-list' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Utilities" icon-type="muzik" icon="wifi" toggle-id="utilities" :caret-icon="true" :route="{ popup: 'false', to: 'errors' }" :active="currentRoute.includes('errors')" @on-click="toggle">
        <b-collapse id="utilities" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('errors')">
          <side-menu title="Error 404" icon="circle" :icon-size="10" icon-type="solid" mini-title="404" :route="{ to: 'errors.404' }"></side-menu>
          <side-menu title="Error 500" icon="circle" :icon-size="10" icon-type="solid" mini-title="500" :route="{ to: 'errors.500' }"></side-menu>
          <side-menu title="Maintenance" icon="circle" :icon-size="10" icon-type="solid" mini-title="M" :route="{ to: 'errors.maintenance' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Plugins" icon-type="muzik" icon="plugin" toggle-id="plugins" :caret-icon="true" :route="{ popup: 'false', to: 'plugins' }" :active="currentRoute.includes('plugins')" @on-click="toggle">
        <b-collapse id="plugins" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('plugins')">
          <side-menu is-tag="router-link" title="Apexcharts" icon="circle" :icon-size="10" icon-type="solid" mini-title="AX" :route="{ to: 'plugins.apexcharts' }"></side-menu>
          <side-menu is-tag="router-link" title="Button Hover" icon="circle" :icon-size="10" icon-type="solid" mini-title="BH" :route="{ to: 'plugins.button-hover' }"></side-menu>
          <!-- <side-menu isTag="router-link" title="Choice JS" icon="circle" :icon-size="10" icon-type="solid" miniTitle="CJ" :route="{ to: 'plugins.' }"></side-menu> -->
          <side-menu is-tag="router-link" title="Flatpicker" icon="circle" :icon-size="10" icon-type="solid" mini-title="FL" :route="{ to: 'plugins.flatpicker' }"></side-menu>
          <side-menu is-tag="router-link" title="FSLightbox" icon="circle" :icon-size="10" icon-type="solid" mini-title="FS" :route="{ to: 'plugins.fslightbox' }"></side-menu>
          <side-menu is-tag="router-link" title="Gallery Hover" icon="circle" :icon-size="10" icon-type="solid" mini-title="GH" :route="{ to: 'plugins.gallery-hover' }"></side-menu>
          <side-menu is-tag="router-link" title="Image Croper" icon="circle" :icon-size="10" icon-type="solid" mini-title="IC" :route="{ to: 'plugins.image-cropper' }"></side-menu>
          <side-menu is-tag="router-link" title="Loader" icon="circle" :icon-size="10" icon-type="solid" mini-title="L" :route="{ to: 'plugins.loader' }"></side-menu>
          <!-- <side-menu isTag="router-link" title="Rating" icon="circle" :icon-size="10" icon-type="solid" miniTitle="R" :route="{ to: 'plugins.' }"></side-menu> -->
          <side-menu is-tag="router-link" title="Multi Select" icon="circle" :icon-size="10" icon-type="solid" mini-title="MS" :route="{ to: 'plugins.multi-select' }"></side-menu>
          <side-menu is-tag="router-link" title="Sweetalert 2" icon="circle" :icon-size="10" icon-type="solid" mini-title="SW" :route="{ to: 'plugins.sweetalert' }"></side-menu>
          <side-menu is-tag="router-link" title="Quill" icon="circle" :icon-size="10" icon-type="solid" mini-title="Q" :route="{ to: 'plugins.quill' }"></side-menu>
          <!-- <side-menu isTag="router-link" title="Tour" icon="circle" :icon-size="10" icon-type="solid" miniTitle="U" :route="{ to: 'plugins.tour' }"></side-menu> -->
          <side-menu is-tag="router-link" title="Uppy" icon="circle" :icon-size="10" icon-type="solid" mini-title="U" :route="{ to: 'plugins.uppy' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu is-tag="router-link" title="Blank Page" icon-type="muzik" icon="files" :route="{ to: 'default.blank-page' }"></side-menu>
      <side-menu title="UI-Elements" icon-type="muzik" icon="branch" toggle-id="ui-elements" :caret-icon="true" :route="{ popup: 'false', to: 'ui-elements' }" :active="currentRoute.includes('ui-elements')" @on-click="toggle">
        <b-collapse id="ui-elements" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('ui-elements')">
          <side-menu is-tag="router-link" title="Avatars" icon="circle" :icon-size="10" icon-type="solid" mini-title="A" :route="{ to: 'ui-elements.avatars' }"></side-menu>
          <side-menu is-tag="router-link" title="Alerts" icon="circle" :icon-size="10" icon-type="solid" mini-title="A" :route="{ to: 'ui-elements.alerts' }"></side-menu>
          <side-menu is-tag="router-link" title="Badge" icon="circle" :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'ui-elements.badge' }"></side-menu>
          <side-menu is-tag="router-link" title="Bread Crumb" icon="circle" :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'ui-elements.breadcrumb' }"></side-menu>
          <side-menu is-tag="router-link" title="Buttons" icon="circle" :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'ui-elements.buttons' }"></side-menu>
          <side-menu is-tag="router-link" title="Buttons Group" icon="circle" :icon-size="10" icon-type="solid" mini-title="B" :route="{ to: 'ui-elements.buttonsgroup' }"></side-menu>
          <side-menu is-tag="router-link" title="Off Canvas" icon="circle" :icon-size="10" icon-type="solid" mini-title="O" :route="{ to: 'ui-elements.offcanvas' }"></side-menu>
          <side-menu is-tag="router-link" title="Colors" icon="circle" :icon-size="10" icon-type="solid" mini-title="C" :route="{ to: 'ui-elements.colors' }"></side-menu>
          <side-menu is-tag="router-link" title="Cards" icon="circle" :icon-size="10" icon-type="solid" mini-title="C" :route="{ to: 'ui-elements.cards' }"></side-menu>
          <side-menu is-tag="router-link" title="Carousel" icon="circle" :icon-size="10" icon-type="solid" mini-title="C" :route="{ to: 'ui-elements.carousel' }"></side-menu>
          <side-menu is-tag="router-link" title="Grid" icon="circle" :icon-size="10" icon-type="solid" mini-title="G" :route="{ to: 'ui-elements.grid' }"></side-menu>
          <side-menu is-tag="router-link" title="Images" icon="circle" :icon-size="10" icon-type="solid" mini-title="I" :route="{ to: 'ui-elements.images' }"></side-menu>
          <side-menu is-tag="router-link" title="List Group" icon="circle" :icon-size="10" icon-type="solid" mini-title="L" :route="{ to: 'ui-elements.listgroup' }"></side-menu>
          <side-menu is-tag="router-link" title="Modal" icon="circle" :icon-size="10" icon-type="solid" mini-title="M" :route="{ to: 'ui-elements.modal' }"></side-menu>
          <side-menu is-tag="router-link" title="Notifications" icon="circle" :icon-size="10" icon-type="solid" mini-title="N" :route="{ to: 'ui-elements.notifications' }"></side-menu>
          <side-menu is-tag="router-link" title="Pagination" icon="circle" :icon-size="10" icon-type="solid" mini-title="P" :route="{ to: 'ui-elements.pagination' }"></side-menu>
          <side-menu is-tag="router-link" title="Popovers" icon="circle" :icon-size="10" icon-type="solid" mini-title="P" :route="{ to: 'ui-elements.popovers' }"></side-menu>
          <side-menu is-tag="router-link" title="Typography" icon="circle" :icon-size="10" icon-type="solid" mini-title="T" :route="{ to: 'ui-elements.typography' }"></side-menu>
          <side-menu is-tag="router-link" title="Tooltips" icon="circle" :icon-size="10" icon-type="solid" mini-title="T" :route="{ to: 'ui-elements.tooltips' }"></side-menu>
          <side-menu is-tag="router-link" title="Tabs" icon="circle" :icon-size="10" icon-type="solid" mini-title="T" :route="{ to: 'ui-elements.tabs' }"></side-menu>
          <side-menu is-tag="router-link" title="Video" icon="circle" :icon-size="10" icon-type="solid" mini-title="V" :route="{ to: 'ui-elements.video' }"></side-menu>
        </b-collapse>
      </side-menu>
      <!-- <side-menu is-tag="router-link" title="Colors" icon="ticket" :route="{ to: 'default.ui-color' }"></side-menu> -->
      <side-menu title="Widgets" icon-type="muzik" icon="box" toggle-id="widget" :caret-icon="true" :route="{ popup: 'false', to: 'widget' }" :active="currentRoute.includes('widget')" @on-click="toggle">
        <b-collapse id="widgets" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('widget')">
          <side-menu is-tag="router-link" title="Widgets Basic" icon="circle" :icon-size="10" icon-type="solid" mini-title="WB" :route="{ to: 'widget.widget-basic' }"></side-menu>
          <side-menu is-tag="router-link" title="Widgets Chart" icon="circle" :icon-size="10" icon-type="solid" mini-title="WC" :route="{ to: 'widget.widget-chart' }"></side-menu>
          <side-menu is-tag="router-link" title="Widgets Card" icon="circle" :icon-size="10" icon-type="solid" mini-title="WC" :route="{ to: 'widget.widget-card' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Maps" icon-type="muzik" icon="location" toggle-id="maps" :caret-icon="true" :route="{ popup: 'false', to: 'maps' }" :active="currentRoute.includes('maps')" @on-click="toggle">
        <b-collapse id="maps" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('maps')">
          <side-menu is-tag="router-link" title="Google" icon="circle" :icon-size="10" icon-type="solid" mini-title="G" :route="{ to: 'maps.map-google' }"></side-menu>
          <!-- <side-menu title="Vector" icon="circle" :icon-size="10" icon-type="solid" miniTitle="V" :route="{ to: 'default.map-vector' }"></side-menu> -->
        </b-collapse>
      </side-menu>
      <side-menu title="Form" icon-type="muzik" icon="notepad" toggle-id="form" :caret-icon="true" :route="{ popup: 'false', to: 'form' }" :active="currentRoute.includes('form')" @on-click="toggle">
        <b-collapse id="form" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('form')">
          <side-menu is-tag="router-link" title="Elements" icon="circle" :icon-size="10" icon-type="solid" mini-title="E" :route="{ to: 'form.elements' }"></side-menu>
          <side-menu is-tag="router-link" title="Wizard" icon="circle" :icon-size="10" icon-type="solid" mini-title="W" :route="{ to: 'form.wizard' }"></side-menu>
          <side-menu is-tag="router-link" title="Validation" icon="circle" :icon-size="10" icon-type="solid" mini-title="V" :route="{ to: 'form.validation' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Table" icon-type="muzik" icon="table" toggle-id="table" :caret-icon="true" :route="{ popup: 'false', to: 'table' }" :active="currentRoute.includes('table')" @on-click="toggle">
        <b-collapse id="table" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('table')">
          <side-menu is-tag="router-link" title="Bootstrap Table" icon="circle" :icon-size="10" icon-type="solid" mini-title="BS" :route="{ to: 'table.bootstrap-table' }"></side-menu>
          <side-menu is-tag="router-link" title="Bordered Table" icon="circle" :icon-size="10" icon-type="solid" mini-title="BO" :route="{ to: 'table.border-table' }"></side-menu>
          <side-menu is-tag="router-link" title="Fancy Table" icon="circle" :icon-size="10" icon-type="solid" mini-title="FT" :route="{ to: 'table.fancy-table' }"></side-menu>
          <side-menu is-tag="router-link" title="Fixed Table" icon="circle" :icon-size="10" icon-type="solid" mini-title="FT" :route="{ to: 'table.fixed-table' }"></side-menu>
        </b-collapse>
      </side-menu>
      <side-menu title="Icons" icon-type="muzik" icon="info" toggle-id="icons" :caret-icon="true" :route="{ popup: 'false', to: 'icons' }" :active="currentRoute.includes('icons')" @on-click="toggle">
        <b-collapse id="icons" tag="ul" class="sub-nav" accordion="sidebar-menu" :visible="currentRoute.includes('icons')">
          <side-menu is-tag="router-link" title="Solid" icon="circle" :icon-size="10" icon-type="solid" mini-title="S" :route="{ to: 'icons.solid' }"></side-menu>
          <side-menu is-tag="router-link" title="Outlined" icon="circle" :icon-size="10" icon-type="solid" mini-title="O" :route="{ to: 'icons.outlined' }"></side-menu>
          <side-menu is-tag="router-link" title="Dual Tone" icon="circle" :icon-size="10" icon-type="solid" mini-title="DT" :route="{ to: 'icons.dual-tone' }"></side-menu>
        </b-collapse>
      </side-menu>
    </ul>
  </default-sidebar>
  <!-- Sidebar Component End Here-->
</template>

<script setup>
import DefaultSidebar from '@/components/custom/sidebar/DefaultSidebar.vue'
import SideMenu from '@/components/custom/nav/SideMenu.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const currentRoute = ref('')
const route = useRoute()
const toggle = (route) => {
  if (route === currentRoute.value && route.includes('.')) {
    const menu = currentRoute.value.split('.')
    return (currentRoute.value = menu[menu.length - 2])
  }
  if (route !== currentRoute.value && currentRoute.value.includes(route)) {
    return (currentRoute.value = '')
  }
  if (route !== currentRoute.value) {
    return (currentRoute.value = route)
  }
  if (route === currentRoute.value) {
    return (currentRoute.value = '')
  }
  return (currentRoute.value = '')
}
toggle(route.name)
</script>
