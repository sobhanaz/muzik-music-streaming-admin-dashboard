<template>
  <b-card>
    <b-card no-body>
      <div class="row">
        <b-col lg="4">
          <div class="d-flex align-items-center mb-4">
            <h5>19 May</h5>
            <div class="btn btn-info ms-3 btn-sm">Today</div>
          </div>
          <div class="p-2 show mb-4 h4 bg-soft-warning alert-left alert-warning d-inline-block rounded">
            <span> 5:30am Doctor Appointment</span>
          </div>
          <h6>Details</h6>
          <div class="d-flex align-items-center">
            <p class="pe-3 border-end">Time: 5:30 am</p>
            <p class="ms-3">Event: Doctor Appointment</p>
          </div>
          <h6 class="mb-3">More Events</h6>
          <div class="p-2 show mb-3 h6 bg-soft-success alert-left alert-success d-table rounded">
            <span> 5:30am Meeting</span>
          </div>
          <div class="p-2 show mb-3 h6 bg-soft-primary alert-left alert-primary d-inline-block rounded">
            <span>5:30am click for Google</span>
          </div>
        </b-col>
        <b-col lg="8">
          <button type="button" class="btn btn-primary ms-2 text-right float-end mb-lg-0 mb-3">
            <span>Edit Event</span>
            <svg width="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M16.9927 15.9531H11.2984C10.7429 15.9531 10.291 16.4121 10.291 16.9765C10.291 17.5419 10.7429 17.9999 11.2984 17.9999H16.9927C17.5483 17.9999 18.0001 17.5419 18.0001 16.9765C18.0001 16.4121 17.5483 15.9531 16.9927 15.9531Z" fill="white"></path>
              <path d="M7.30902 3.90361L12.7049 8.2637C12.835 8.36797 12.8573 8.55932 12.7557 8.69261L6.35874 17.028C5.95662 17.5429 5.36402 17.8342 4.72908 17.8449L1.23696 17.8879C1.05071 17.8901 0.887748 17.7611 0.845419 17.5762L0.0517547 14.1255C-0.0858138 13.4913 0.0517547 12.8356 0.453878 12.3303L6.88256 3.95521C6.98627 3.82083 7.1778 3.79719 7.30902 3.90361Z" fill="white"></path>
              <path opacity="0.4" d="M15.1203 5.66544L14.0801 6.96401C13.9753 7.09623 13.7869 7.11773 13.6568 7.01238C12.3922 5.98901 9.15405 3.36285 8.25563 2.63509C8.12441 2.52759 8.10642 2.33625 8.21224 2.20295L9.21543 0.957057C10.1255 -0.214663 11.7128 -0.322161 12.9933 0.699064L14.4642 1.87078C15.0674 2.34377 15.4695 2.96726 15.6071 3.62299C15.7658 4.3443 15.5965 5.0527 15.1203 5.66544Z" fill="white"></path>
            </svg>
          </button>
        </b-col>
      </div>
    </b-card>
  </b-card>
  <page-header title="Calender">
    <b-button variant="primary">Back</b-button>
    <b-button variant="primary ms-2" @click="show = true">
      <icon-component type="solid" icon-name="plus" :size="20"></icon-component>
      <span class="ms-1">New Event</span>
    </b-button>
  </page-header>
  <b-card>
    <full-calender :events="events" @on-date-select="dateSelected" @on-event-select="eventSelected"></full-calender>
  </b-card>
  <b-modal v-model="show" title="Add a events">
    <div class="d-flex flex-column align-items-start">
      <div id="v-pills-tab" class="nav me-3 form-group btn-group" role="tablist">
        <tab-button id="event" class="btn btn-primary" target="#event" :active="true">Event</tab-button>
        <tab-button id="task" class="btn btn-primary" target="#task">Task</tab-button>
        <tab-button id="reminder" class="btn btn-primary" target="#reminder">Reminder</tab-button>
      </div>
      <div id="v-pills-tabContent" class="tab-content w-100">
        <tab-pane id="event" tab-for="#event">
          <b-row>
            <b-col cols="12">
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">Title</label>
                </b-col>
                <b-col cols="10">
                  <input type="text" class="form-control" />
                </b-col>
              </b-row>
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">
                    <icon-component type="outlined" icon-name="calendar" :size="24"></icon-component>
                  </label>
                </b-col>
                <b-col cols="10">
                  <flat-picker v-model="date" class="form-control" :config="dateOption" placeholder="24 Jan 2022 to 23 Feb 2022"></flat-picker>
                </b-col>
              </b-row>
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">
                    <icon-component type="outlined" icon-name="clock-circle" :size="24"></icon-component>
                  </label>
                </b-col>
                <b-col cols="10" class="d-flex align-items-center justify-content-center">
                  <flat-picker v-model="startTime" class="form-control" :config="timeOption"></flat-picker>
                  <span class="mx-2">To</span>
                  <flat-picker v-model="endTime" class="form-control" :config="timeOption"></flat-picker>
                </b-col>
              </b-row>
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">
                    <icon-component type="outlined" icon-name="users" :size="24"></icon-component>
                  </label>
                </b-col>
                <b-col cols="10">
                  <select id="guest" name="guest" class="form-select">
                    <option value="">Select Guest</option>
                    <option value="anni">Anni</option>
                    <option value="bini">Bini</option>
                    <option value="chimpi">Chimpi</option>
                  </select>
                </b-col>
              </b-row>
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">
                    <icon-component type="outlined" icon-name="pencil-alt" :size="24"></icon-component>
                  </label>
                </b-col>
                <b-col cols="10">
                  <textarea id="description" name="description" class="form-control" rows="3" placeholder="Description" spellcheck="false"></textarea>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </tab-pane>
        <tab-pane id="task" tab-for="#task">
          <b-row>
            <b-col md="12">
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">Title</label>
                </b-col>
                <b-col cols="10">
                  <input type="text" class="form-control" />
                </b-col>
              </b-row>
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">
                    <icon-component type="outlined" icon-name="calendar" :size="24"></icon-component>
                  </label>
                </b-col>
                <b-col cols="10">
                  <flat-picker v-model="date" class="form-control" :config="dateOption"></flat-picker>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </tab-pane>
        <tab-pane id="reminder" tab-for="#reminder">
          <b-row>
            <b-col md="12">
              <b-row class="g-3 align-items-center form-group">
                <b-col cols="2">
                  <label class="col-form-label">Title</label>
                </b-col>
                <b-col cols="10">
                  <input type="text" class="form-control" />
                </b-col>
              </b-row>
              <div class="col-md-12">
                <b-row>
                  <b-col md="6">
                    <div class="row g-3 align-items-center form-group">
                      <b-col cols="2">
                        <label class="col-form-label">
                          <icon-component type="outlined" icon-name="calendar" :size="24"></icon-component>
                        </label>
                      </b-col>
                      <b-col cols="10">
                        <flat-picker v-model="date" class="form-control" :config="dateOption"></flat-picker>
                      </b-col>
                    </div>
                  </b-col>
                  <div class="col-md-6">
                    <b-row class="g-3 align-items-center form-group">
                      <b-col cols="2">
                        <icon-component type="outlined" icon-name="bell" :size="24"></icon-component>
                      </b-col>
                      <b-col cols="10">
                        <select class="form-select">
                          <option>Repeat</option>
                          <option>Every 4 Day</option>
                          <option>Every 7 Day</option>
                          <option>Every 10 Day</option>
                        </select>
                      </b-col>
                    </b-row>
                  </div>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </tab-pane>
      </div>
    </div>
  </b-modal>
</template>

<script setup>
// Library
import { ref } from 'vue'
import moment from 'moment'

// Library Components
import FlatPicker from 'vue-flatpickr-component'

// Components
import PageHeader from '@/components/custom/header/PageHeader.vue'
import FullCalender from '@/components/custom/calender/FullCalender.vue'

// Variables
const date = ref('')
const startTime = ref('')
const endTime = ref('')
const show = ref(false)
const dateOption = ref({
  mode: 'range'
})
const timeOption = ref({
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i'
})
const events = ref([
  {
    title: 'Click for Google',
    url: 'http://google.com/',
    start: moment(new Date(), 'YYYY-MM-DD').add(-20, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    title: 'Long Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(-18, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    color: 'green'
  },
  {
    title: 'Long Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(-16, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    end: moment(new Date(), 'YYYY-MM-DD').add(-13, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(8,130,12,0.2)',
    textColor: 'rgba(8,130,12,1)',
    borderColor: 'rgba(8,130,12,1)'
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(-14, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    color: '#047685',
    backgroundColor: 'rgba(4,118,133,0.2)',
    textColor: 'rgba(4,118,133,1)',
    borderColor: 'rgba(4,118,133,1)'
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(-12, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(235,153,27,0.2)',
    textColor: 'rgba(235,153,27,1)',
    borderColor: 'rgba(235,153,27,1)'
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(-10, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(206,32,20,0.2)',
    textColor: 'rgba(206,32,20,1)',
    borderColor: 'rgba(206,32,20,1)'
  },
  {
    title: 'Birthday Party',
    start: moment(new Date(), 'YYYY-MM-DD').add(-8, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    title: 'Meeting',
    start: moment(new Date(), 'YYYY-MM-DD').add(-6, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    title: 'Birthday Party',
    start: moment(new Date(), 'YYYY-MM-DD').add(-5, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(235,153,27,0.2)',
    textColor: 'rgba(235,153,27,1)',
    borderColor: 'rgba(235,153,27,1)'
  },
  {
    title: 'Birthday Party',
    start: moment(new Date(), 'YYYY-MM-DD').add(-2, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(235,153,27,0.2)',
    textColor: 'rgba(235,153,27,1)',
    borderColor: 'rgba(235,153,27,1)'
  },

  {
    title: 'Meeting',
    start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    title: 'Click for Google',
    url: 'http://google.com/',
    start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T06:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T07:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    title: 'Birthday Party',
    start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T08:30:00.000Z',
    backgroundColor: 'rgba(235,153,27,0.2)',
    textColor: 'rgba(235,153,27,1)',
    borderColor: 'rgba(235,153,27,1)'
  },
  {
    title: 'Doctor Meeting',
    start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(235,153,27,0.2)',
    textColor: 'rgba(235,153,27,1)',
    borderColor: 'rgba(235,153,27,1)'
  },
  {
    title: 'All Day Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(8, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: moment(new Date(), 'YYYY-MM-DD').add(10, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
    backgroundColor: 'rgba(58,87,232,0.2)',
    textColor: 'rgba(58,87,232,1)',
    borderColor: 'rgba(58,87,232,1)'
  }
])
// Functions
const dateSelected = () => {
  // console.log(e)
  show.value = true
}
const eventSelected = () => {
  // console.log(e)
  show.value = true
}
</script>
