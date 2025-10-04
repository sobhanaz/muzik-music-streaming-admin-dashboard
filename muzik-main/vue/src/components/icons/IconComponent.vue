<template>
  <component :is="checkTypeComponent(type)" :icon-name="iconName" :size="size" />
</template>
<script>
import SolidIcon from './solid/SolidIcon.vue'
import OutlinedIcon from './outlined/OutlinedIcon.vue'
import DualToneIcon from './dual-tone/DualToneIcon.vue'
import MuzikIcon from './muzik/MuzikIcon.vue'
export default {
  name: 'IconComponent',
  components: {
    SolidIcon,
    OutlinedIcon,
    DualToneIcon,
    MuzikIcon
  },
  props: {
    type: { type: String, required: true },
    iconName: { type: String, required: true },
    size: { type: Number, default: 24 }
  },
  setup() {
    const checkTypeComponent = (name) => {
      return name + '-icon'
    }
    return {
      checkTypeComponent
    }
  }
}
</script>
