<template>
  <component :is="checkIconComponent(iconName)" :class="`icon-${size}`" />
</template>
<script>
import BellIcon from './svg-icons/BellIcon.vue'
import BoxIcon from './svg-icons/BoxIcon.vue'
import BranchIcon from './svg-icons/BranchIcon.vue'
import FilesIcon from './svg-icons/FilesIcon.vue'
import HomeIcon from './svg-icons/HomeIcon.vue'
import InfoIcon from './svg-icons/InfoIcon.vue'
import LocationIcon from './svg-icons/LocationIcon.vue'
import NotepadIcon from './svg-icons/NotepadIcon.vue'
import PluginIcon from './svg-icons/PluginIcon.vue'
import SettingIcon from './svg-icons/SettingIcon.vue'
import TableIcon from './svg-icons/TableIcon.vue'
import UnlockIcon from './svg-icons/UnlockIcon.vue'
import UserIcon from './svg-icons/UserIcon.vue'
import UserSettingIcon from './svg-icons/UserSettingIcon.vue'
import WifiIcon from './svg-icons/WifiIcon.vue'
export default {
  components: {
    BellIcon,
    BoxIcon,
    BranchIcon,
    FilesIcon,
    HomeIcon,
    InfoIcon,
    LocationIcon,
    NotepadIcon,
    PluginIcon,
    SettingIcon,
    TableIcon,
    UnlockIcon,
    UserIcon,
    UserSettingIcon,
    WifiIcon
  },
  props: {
    iconName: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 20
    }
  },
  setup() {
    const checkIconComponent = (name) => {
      return name + '-icon'
    }
    return {
      checkIconComponent
    }
  }
}
</script>
