<template>
  <ul class="iq-nav-menu list-unstyled">
    <li v-for="(mainMenu, mainKey) in menuOptions" :key="mainKey" :class="`nav-item ${mainMenu.active ? 'active' : ''}`">
      <a :class="`nav-link menu-arrow justify-content-start ${mainMenu.active ? 'active' : ''}`" data-bs-toggle="collapse" :href="`#${mainMenu.name}`" role="button" aria-expanded="false" aria-controls="homeData">
        <icon-component v-if="mainMenu.icon" type="dual-tone" :icon-name="mainMenu.icon" :size="20"></icon-component>
        <span class="item-name">{{ mainMenu.name }}</span>
      </a>
      <template v-if="mainMenu.children">
        <ul :id="mainMenu.name" class="iq-header-sub-menu list-unstyled collapse">
          <li v-for="(first, firstKey) in mainMenu.children" :key="firstKey" class="nav-item">
            <template v-if="!checkArrLength(first.children)">
              <router-link class="nav-link" :to="first.route">{{ first.name }}</router-link>
            </template>
            <template v-else>
              <a class="nav-link menu-arrow" data-bs-toggle="collapse" :href="`#${first.name}`" role="button" aria-expanded="true" aria-controls="menuStyles">
                {{ first.name }}
                <i class="right-icon">
                  <icon-component type="outlined" icon-name="chevron-right" :size="20"></icon-component>
                </i>
              </a>
              <ul :id="first.name" aria-expanded="false" class="iq-header-sub-menu left list-unstyled collapse">
                <li v-for="(second, secondKey) in first.children" :key="secondKey" class="nav-item">
                  <template v-if="!checkArrLength(second.children)">
                    <router-link class="nav-link" :to="second.route">{{ second.name }}</router-link>
                  </template>
                  <template v-else>
                    <a class="nav-link menu-arrow" data-bs-toggle="collapse" :href="`#${second.name}`" role="button" aria-expanded="true" aria-controls="menuStyles">
                      {{ second.name }}
                      <i class="right-icon">
                        <icon-component type="outlined" icon-name="chevron-right" :size="20"></icon-component>
                      </i>
                    </a>
                    <ul :id="second.name" aria-expanded="false" class="iq-header-sub-menu left list-unstyled collapse">
                      <li v-for="(three, threeKey) in second.children" :key="threeKey" class="nav-item">
                        <template v-if="!checkArrLength(three.children)">
                          <template v-if="three.type && three.type == 'modal'">
                            <a class="nav-link" @click="showPopup(three.route)">{{ three.name }}</a>
                          </template>
                          <template v-else>
                            <router-link class="nav-link" :to="three.route">{{ three.name }}</router-link>
                          </template>
                        </template>
                      </li>
                    </ul>
                  </template>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </template>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import _ from 'lodash'
const menuOptions = ref([
  {
    active: true,
    name: 'Home',
    route: { name: 'default.ui-color' }
  },
  {
    name: 'Release',
    route: { name: 'default.ui-color' }
  },
  {
    name: 'Albums',
    route: { name: 'default.ui-color' }
  }
])
const checkArrLength = (arr) => {
  if (_.isArray(arr)) {
    return true
  }
  return false
}
</script>

<style lang="scss" scoped></style>
