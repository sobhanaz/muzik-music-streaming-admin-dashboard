<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <div class="d-flex flex-wrap align-items-center">
            <div class="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
              <h4 class="me-2 h4">{{ $t('sidebar.multi') }}</h4>
            </div>
          </div>
          <small
            >For more Information regarding Multi-select Plugin refer
            <a href="https://www.npmjs.com/package/@vueform/multiselect">Documentation</a>
          </small>
        </div>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.a-basic') }}</b-card-title>
        <b-card-text>In this method, selecting only one option from a lots of options while only using up as much space as a single option excepted.</b-card-text>
        <select-component v-model="value" :options="options" class="form-control"></select-component>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.multiple-choice') }}</b-card-title>
        <b-card-text>when the multiple attribute is used with the select element, we can enable the selection of multiple options from the list.</b-card-text>
        <select-component v-model="multivalue" mode="tags" :options="multioptions" class="form-control" :close-on-select="false"></select-component>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.dropdown') }}</b-card-title>
        <b-card-text>A dropdown allows a user to select a value from a series of options. A selection dropdown can allow multiple search selections.</b-card-text>
        <select-component v-model="value" :options="dropdownoptions" class="form-control"></select-component>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.items-input') }}</b-card-title>
        <b-card-text>A dropdown allows a user to select a value from a series of options(Limit is 5 items).</b-card-text>
        <select-component v-model="multivalue" mode="tags" :options="inputoptions" class="form-control" :max="max"></select-component>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'MultiSelect',
  setup() {
    const value = ref(1)
    const max = ref(5)
    const multivalue = ref(['choise1'])
    const options = ref([1, 2, 3, 4, 5])
    const multioptions = ref(['choise1', 'choise2', 'choise3', 'choise4', 'choise5'])
    const dropdownoptions = ref(['Dropdown item 1', 'Dropdown item 2', 'Dropdown item 3', 'Dropdown item 4', 'Dropdown item 5', 'Dropdown item 6', 'Dropdown item 7', 'Dropdown item 8'])
    const inputoptions = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'])
    return {
      value,
      max,
      multivalue,
      options,
      multioptions,
      dropdownoptions,
      inputoptions
    }
  }
}
</script>
