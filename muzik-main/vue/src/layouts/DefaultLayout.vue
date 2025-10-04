<template>
  <loader-component :show="isLoader"></loader-component>
  <!-- Sidebar Component Start Here-->
  <sidebar-component></sidebar-component>
  <!-- Sidebar Component End Here-->
  <main class="main-content">
    <div class="position-relative">
      <!-- Header Component Start Here -->
      <header-component></header-component>
      <!-- Header Component End Here -->
    </div>

    <!-- Main Content Start Here -->
    <main-content-component>
      <!-- Router View For Pages -->
      <router-view></router-view>
      <div class="card border-top mb-0">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between flex-md-row flex-column gap-3">
            <div class="">
              <ul class="list-unstyled p-0 m-0 mb-3 text-capitalize d-flex gap-3 flex-md-nowrap flex-wrap">
                <li>about</li>
                <li>|</li>
                <li>terms of use</li>
                <li>|</li>
                <li>privacy policy</li>
                <li>|</li>
                <li>support</li>
                <li>|</li>
                <li>feedback</li>
                <li>|</li>
              </ul>
              <small>Copyright 2023. Made with love by Iqonic Design.</small>
            </div>
            <div>
              <ul class="list-unstyled m-0 p-0 d-flex align-items-center gap-3">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.026 15C11.064 15 14.367 9.99702 14.367 5.66602C14.367 5.52602 14.367 5.38402 14.361 5.24402C15.0041 4.77851 15.5591 4.20217 16 3.54202C15.3993 3.80687 14.7628 3.98143 14.111 4.06002C14.7975 3.64966 15.3117 3.00399 15.558 2.24302C14.913 2.62515 14.207 2.8934 13.471 3.03602C12.9762 2.50905 12.3214 2.15994 11.6081 2.04278C10.8948 1.92562 10.1627 2.04694 9.52534 2.38796C8.88796 2.72897 8.38081 3.27065 8.08245 3.92908C7.78409 4.58751 7.71118 5.32595 7.875 6.03002C6.56974 5.96457 5.29282 5.62549 4.12704 5.03476C2.96127 4.44404 1.93268 3.61487 1.108 2.60102C0.68934 3.3241 0.561574 4.17942 0.750646 4.99329C0.939718 5.80715 1.43145 6.51855 2.126 6.98302C1.60554 6.96534 1.09652 6.82558 0.64 6.57502V6.62002C0.640897 7.3775 0.903307 8.11144 1.38287 8.69778C1.86244 9.28412 2.52975 9.68689 3.272 9.83802C2.99026 9.91564 2.69923 9.95433 2.407 9.95302C2.20098 9.95365 1.99538 9.93456 1.793 9.89602C2.00279 10.5481 2.41127 11.1182 2.96125 11.5265C3.51122 11.9348 4.17513 12.1609 4.86 12.173C3.69656 13.0868 2.2594 13.5824 0.78 13.58C0.519321 13.5811 0.258823 13.5661 0 13.535C1.50151 14.4923 3.2453 15.0006 5.026 15Z" fill="#4A525F"></path>
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_389_2574)">
                      <path d="M0 1.146C0 0.513 0.526 0 1.175 0H14.825C15.474 0 16 0.513 16 1.146V14.854C16 15.487 15.474 16 14.825 16H1.175C0.526 16 0 15.487 0 14.854V1.146ZM4.943 13.394V6.169H2.542V13.394H4.943ZM3.743 5.182C4.58 5.182 5.101 4.628 5.101 3.934C5.086 3.225 4.581 2.686 3.759 2.686C2.937 2.686 2.4 3.226 2.4 3.934C2.4 4.628 2.921 5.182 3.727 5.182H3.743ZM8.651 13.394V9.359C8.651 9.143 8.667 8.927 8.731 8.773C8.904 8.342 9.299 7.895 9.963 7.895C10.832 7.895 11.179 8.557 11.179 9.529V13.394H13.58V9.25C13.58 7.03 12.396 5.998 10.816 5.998C9.542 5.998 8.971 6.698 8.651 7.191V7.216H8.635C8.64031 7.20765 8.64564 7.19932 8.651 7.191V6.169H6.251C6.281 6.847 6.251 13.394 6.251 13.394H8.651Z" fill="#4A525F"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_389_2574">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_389_2576)">
                      <path d="M16 8.04902C16 3.60302 12.418 -0.000976562 8.00005 -0.000976562C3.58005 2.34375e-05 -0.00195312 3.60302 -0.00195312 8.05002C-0.00195312 12.067 2.92405 15.397 6.74805 16.001V10.376H4.71805V8.05002H6.75005V6.27502C6.75005 4.25802 7.94505 3.14402 9.77205 3.14402C10.648 3.14402 11.563 3.30102 11.563 3.30102V5.28102H10.554C9.56105 5.28102 9.25105 5.90202 9.25105 6.53902V8.04902H11.469L11.115 10.375H9.25005V16C13.074 15.396 16 12.066 16 8.04902Z" fill="#FF4545"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_389_2576">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_389_2578)">
                      <path d="M8 0C5.829 0 5.556 0.01 4.703 0.048C3.85 0.088 3.269 0.222 2.76 0.42C2.22609 0.620819 1.74249 0.935826 1.343 1.343C0.936076 1.7427 0.621107 2.22624 0.42 2.76C0.222 3.268 0.087 3.85 0.048 4.7C0.01 5.555 0 5.827 0 8.001C0 10.173 0.01 10.445 0.048 11.298C0.088 12.15 0.222 12.731 0.42 13.24C0.625 13.766 0.898 14.212 1.343 14.657C1.787 15.102 2.233 15.376 2.759 15.58C3.269 15.778 3.849 15.913 4.701 15.952C5.555 15.99 5.827 16 8 16C10.173 16 10.444 15.99 11.298 15.952C12.149 15.912 12.732 15.778 13.241 15.58C13.7746 15.3791 14.2578 15.0641 14.657 14.657C15.102 14.212 15.375 13.766 15.58 13.24C15.777 12.731 15.912 12.15 15.952 11.298C15.99 10.445 16 10.173 16 8C16 5.827 15.99 5.555 15.952 4.701C15.912 3.85 15.777 3.268 15.58 2.76C15.3789 2.22623 15.0639 1.74268 14.657 1.343C14.2576 0.935676 13.774 0.620645 13.24 0.42C12.73 0.222 12.148 0.087 11.297 0.048C10.443 0.01 10.172 0 7.998 0H8.001H8ZM7.283 1.442H8.001C10.137 1.442 10.39 1.449 11.233 1.488C12.013 1.523 12.437 1.654 12.719 1.763C13.092 1.908 13.359 2.082 13.639 2.362C13.919 2.642 14.092 2.908 14.237 3.282C14.347 3.563 14.477 3.987 14.512 4.767C14.551 5.61 14.559 5.863 14.559 7.998C14.559 10.133 14.551 10.387 14.512 11.23C14.477 12.01 14.346 12.433 14.237 12.715C14.1087 13.0624 13.904 13.3764 13.638 13.634C13.358 13.914 13.092 14.087 12.718 14.232C12.438 14.342 12.014 14.472 11.233 14.508C10.39 14.546 10.137 14.555 8.001 14.555C5.865 14.555 5.611 14.546 4.768 14.508C3.988 14.472 3.565 14.342 3.283 14.232C2.9355 14.1039 2.62113 13.8996 2.363 13.634C2.09675 13.376 1.89172 13.0617 1.763 12.714C1.654 12.433 1.523 12.009 1.488 11.229C1.45 10.386 1.442 10.133 1.442 7.996C1.442 5.86 1.45 5.608 1.488 4.765C1.524 3.985 1.654 3.561 1.764 3.279C1.909 2.906 2.083 2.639 2.363 2.359C2.643 2.079 2.909 1.906 3.283 1.761C3.565 1.651 3.988 1.521 4.768 1.485C5.506 1.451 5.792 1.441 7.283 1.44V1.442ZM12.271 2.77C12.1449 2.77 12.0201 2.79483 11.9036 2.84308C11.7872 2.89132 11.6813 2.96203 11.5922 3.05118C11.503 3.14032 11.4323 3.24615 11.3841 3.36262C11.3358 3.4791 11.311 3.60393 11.311 3.73C11.311 3.85607 11.3358 3.9809 11.3841 4.09738C11.4323 4.21385 11.503 4.31968 11.5922 4.40882C11.6813 4.49797 11.7872 4.56868 11.9036 4.61692C12.0201 4.66517 12.1449 4.69 12.271 4.69C12.5256 4.69 12.7698 4.58886 12.9498 4.40882C13.1299 4.22879 13.231 3.98461 13.231 3.73C13.231 3.47539 13.1299 3.23121 12.9498 3.05118C12.7698 2.87114 12.5256 2.77 12.271 2.77ZM8.001 3.892C7.45607 3.8835 6.91489 3.98349 6.40898 4.18614C5.90306 4.3888 5.44251 4.69007 5.05415 5.07242C4.66579 5.45478 4.35736 5.91057 4.14684 6.41326C3.93632 6.91595 3.8279 7.4555 3.8279 8.0005C3.8279 8.5455 3.93632 9.08505 4.14684 9.58774C4.35736 10.0904 4.66579 10.5462 5.05415 10.9286C5.44251 11.3109 5.90306 11.6122 6.40898 11.8149C6.91489 12.0175 7.45607 12.1175 8.001 12.109C9.07954 12.0922 10.1082 11.6519 10.865 10.8833C11.6217 10.1146 12.0459 9.07917 12.0459 8.0005C12.0459 6.92183 11.6217 5.88641 10.865 5.11775C10.1082 4.34909 9.07954 3.90883 8.001 3.892ZM8.001 5.333C8.70833 5.333 9.38669 5.61399 9.88685 6.11415C10.387 6.61431 10.668 7.29267 10.668 8C10.668 8.70733 10.387 9.38569 9.88685 9.88585C9.38669 10.386 8.70833 10.667 8.001 10.667C7.29367 10.667 6.61531 10.386 6.11515 9.88585C5.61499 9.38569 5.334 8.70733 5.334 8C5.334 7.29267 5.61499 6.61431 6.11515 6.11415C6.61531 5.61399 7.29367 5.333 8.001 5.333Z" fill="#4A525F"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_389_2578">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main-content-component>
    <!-- Main Content Start Here -->
  </main>
  <!-- Footer Component Start Here -->
  <footer-component></footer-component>
  <!-- Footer Component End Here -->
  <!-- Live Customizer Component Start Here -->
  <setting-offcanvas></setting-offcanvas>
  <!-- Live Customizer Component End Here-->
</template>

<script setup>
// Library
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Custom Utility Functions
import { useShepherd } from '@/utilities/shepherd'
import { addClass, getQueryString } from '@/utilities/dom'

// Components
import HeaderComponent from '@/components/partials/HeaderComponent.vue'
import SidebarComponent from '@/components/partials/SidebarComponent.vue'
import MainContentComponent from '@/components/partials/MainContentComponent.vue'
import FooterComponent from '@/components/partials/FooterComponent.vue'
import SettingOffcanvas from '@/components/setting/SettingOffcanvas.vue'
import LoaderComponent from '@/components/custom/loader/LoaderComponent.vue'

const route = useRoute()
const isLoader = ref(true)

const checkTour = () => {
  const liveCustomizer = getQueryString('live-customizer')
  const tour = window.sessionStorage.getItem('tour')
  if (liveCustomizer !== 'open' && route.name === 'default.dashboard') {
    if (tour !== 'true') {
      return true
    }
  }
}
onMounted(() => {
  useShepherd(
    [
      {
        title: `<h4>Menu</h4>`,
        text: `<p class="mb-0">Check the content under Menu Style. Click to view all oavailable Menu Style options for you. </p>`,
        attachTo: {
          element: '#first-tour',
          on: 'right'
        },
        buttons: [
          {
            action() {
              return this.next()
            },
            text: 'Next'
          }
        ],
        id: 'first-tour'
      },
      {
        title: `<h4>Profile Setting</h4>`,
        text: `<p class="mb-0">Configure your Profile using Profile Settings. Edit, save and update your profile from here.</p>`,
        attachTo: {
          element: '#itemdropdown1',
          on: 'bottom'
        },
        buttons: [
          {
            action() {
              return this.back()
            },
            classes: 'shepherd-button-secondary',
            text: 'Back'
          },
          {
            action() {
              return this.next()
            },
            text: 'Next'
          }
        ],
        id: 'dropdown1'
      },
      {
        title: `<h4>Live Customizer</h4>`,
        text: `<p class="mb-0">Transform the entire look, color, style and appearance of using Live Customizer settings. Change and copy the settings from here. </p>`,
        attachTo: {
          element: '#settingbutton',
          on: 'right'
        },
        buttons: [
          {
            action() {
              return this.back()
            },
            classes: 'shepherd-button-secondary',
            text: 'Back'
          },
          {
            action() {
              window.sessionStorage.setItem('tour', 'true')
              return this.next()
            },
            text: 'Done'
          }
        ],
        id: 'title'
      }
    ],
    checkTour(),
    () => addClass('.shepherd-modal-overlay-container', 'shepherd-modal-is-visible')
  )
  setTimeout(() => {
    isLoader.value = false
  }, 300)
})
</script>

<style>
@import 'swiper/css';
@import 'swiper/css/navigation';
</style>
