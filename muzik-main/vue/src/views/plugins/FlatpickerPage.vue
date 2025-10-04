<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <div class="d-flex flex-wrap align-items-center">
            <div class="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
              <h4 class="me-2 h4">{{ $t('sidebar.flatpickr') }}</h4>
            </div>
          </div>
          <small
            >For more Information regarding Flatpickr Plugin refer
            <a href="https://www.npmjs.com/package/vue-flatpickr-component">Documentation</a>
          </small>
        </div>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.basic-date') }}</b-card-title>
        <b-card-text>flatpickr without any config</b-card-text>
        <flat-picker v-model="form.dateTime" :data="configs.dateTimePicker" class-name="form-control" type="text" placeholder="Select Date time.." readonly="readonly" />
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.multiple-dates') }}</b-card-title>
        <b-card-text>It is possible to select multiple dates.</b-card-text>
        <flat-picker id="multidate-input" v-model="form.multiDate" :data="configs.multiDatePicker" class-name="form-control" placeholder="Select Date"> </flat-picker>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.mindate') }}</b-card-title>
        <b-card-text>minDate option specifies the minimum/earliest date (inclusively) allowed for selection.</b-card-text>
        <flat-picker id="minDate-input" v-model="form.minDatte" :data="configs.minDatePicker" class-name="form-control" placeholder="Select Date"> </flat-picker>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.maxdate') }}</b-card-title>
        <b-card-text>maxDate option specifies the maximum/latest date (inclusively) allowed for selection.</b-card-text>
        <flat-picker id="maxDate-input" v-model="form.maxDate" :data="configs.maxDatePicker" class-name="form-control" placeholder="Select Date"> </flat-picker>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.disable-date') }}</b-card-title>
        <b-card-text>If you’d like to make certain dates unavailable for selection</b-card-text>
        <flat-picker id="specificdisable-input" v-model="form.specificDisable" :data="configs.specificDisablePicker" class-name="form-control" placeholder="Select Date"> </flat-picker>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.timepicker') }}</b-card-title>
        <b-card-text>Time pickers allow users to enter a specific Time value .</b-card-text>
        <div class="form-group">
          <flat-picker v-model="form.time" :data="configs.timePicker" class-name="form-control" placeholder="Select Time"></flat-picker>
        </div>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.disable-all') }}</b-card-title>
        <b-card-text>This is the enable option, which takes in an array of date strings, date ranges and functions. Essentially the same as the disable option above, but reversed.</b-card-text>
        <flat-picker v-model="form.disablEexcept" :data="configs.disableExceptPicker" class-name="form-control" placeholder="Select Time"></flat-picker>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.human-friendly') }}</b-card-title>
        <b-card-text>Upon date selection, the original input will contain a Y-m-d... string, while the altInput will display the date in a more legible, customizable format.</b-card-text>
        <flat-picker v-model="form.humanDate" :data="configs.humanDatePicker" class-name="form-control" placeholder="Select Time"></flat-picker>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.range-calendar') }}</b-card-title>
        <b-card-text>Select a range of dates using the range calendar.</b-card-text>
        <div class="form-group">
          <flat-picker v-model="form.range" :data="configs.rangePicker" class-name="form-control" placeholder="Select Time"></flat-picker>
        </div>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.datepicker') }}</b-card-title>
        <b-card-text>Date pickers allow users to enter a specific date .</b-card-text>
        <div class="form-group">
          <flat-picker v-model="form.dateBasic" class-name="form-control" :data="configs.basic" placeholder="Select Date..."></flat-picker>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import { ref, reactive } from 'vue'
import FlatPicker from 'vue-flatpickr-component'
export default {
  components: {
    FlatPicker
  },
  setup() {
    const form = ref({
      dateBasic: null,
      dateTime: null,
      time: null,
      date: '2017-01-01',
      dateLocale: null,
      dateInline: +new Date(),
      dateConfirm: null,
      allowInput: null,
      dateStart: null,
      dateEnd: null,
      monthSelect: null
    })
    const configs = reactive({
      basic: {},
      dateTimePicker: {
        enableTime: true,
        dateFormat: 'd-m-Y H:i'
      },
      multiDatePicker: {
        mode: 'multiple',
        dateFormat: 'Y-m-d'
      },
      minDatePicker: {
        minDate: '2020-01'
      },
      maxDatePicker: {
        dateFormat: 'd.m.Y',
        maxDate: '15.12.2017'
      },
      specificDisablePicker: {
        disable: ['2025-01-30', '2025-02-21', '2025-03-08', new Date(2025, 4, 9)],
        dateFormat: 'Y-m-d'
      },
      timePicker: {
        wrap: true,
        enableTime: true,
        enableSeconds: true,
        noCalendar: true
      },
      disableExceptPicker: {
        enable: ['2025-03-30', '2025-05-21', '2025-06-08', new Date(2025, 8, 9)]
      },
      humanDatePicker: {
        altInput: true,
        altFormat: 'F j, Y',
        dateFormat: 'Y-m-d'
      },
      rangePicker: {
        mode: 'range',
        minDate: 'today',
        dateFormat: 'Y-m-d'
      }
    })
    return {
      configs,
      form
    }
  }
}
</script>
