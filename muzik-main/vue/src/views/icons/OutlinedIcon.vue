<template>
  <b-row>
    <b-col cols="12">
      <b-card class="mb-4">
        <template #header>
          <div class="d-flex align-items-center justify-content-center">
            <h4 class="card-title mb-0 flex-grow-1">Out Lined {{ ArrIcons.length }}</h4>
            <div>
              <input
v-model="search" class="form-control" name="search" placeholder="Search Icon"
 @keyup="onSearchUpdate" />
            </div>
          </div>
        </template>
        <div class="icon-grid">
          <div v-for="(item, index) in iconLists" :key="index" class="icon-box">
            <div class="overlay">
              <button v-b-tooltip.hover class="btn btn-sm btn-soft-primary" :title="iconTitle" @click="copyIcon(item.name)">{{ iconTitle }}</button>
            </div>
            <icon-component type="outlined" :icon-name="item.name" :size="32" />
            <small>{{ item.title }}</small>
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup>
import { ref, computed } from 'vue'
import IconComponent from '@/components/icons/IconComponent.vue'
import ArrIcons from '@/assets/icons.json'
import { copyToClipboard } from '../../utilities/dom'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const search = ref(route.query.q ?? '')
const iconLists = computed(() => ArrIcons.filter((item) => item.name.toLowerCase().includes(search.value.toLowerCase())))
const iconTitle = ref('copy')
const copyIcon = (value) => {
  copyToClipboard(value)
}
const router = useRouter()
const onSearchUpdate = () => {
  router.push({ name: 'icons.solid', query: { q: search.value } })
}
</script>
