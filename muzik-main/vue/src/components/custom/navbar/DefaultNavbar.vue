<template>
  <nav :class="`nav navbar navbar-expand-xl navbar-light iq-navbar ${headerNavbar}`">
    <div class="container-fluid navbar-inner">
      <slot></slot>
      <div class="d-flex align-items-center">
        <button id="navbar-toggle" v-b-toggle.navbarSupportedContent class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
            <span class="navbar-toggler-bar bar1 mt-1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </span>
        </button>
      </div>
      <b-collapse id="navbarSupportedContent" class="collapse navbar-collapse" @show="emit('menuOpen')" @hide="emit('menuClose')">
        <div class="search-box d-xl-block d-none">
          <div class="dropdown">
            <div id="search-box-drop" class="search-box-drop" data-bs-toggle="dropdown">
              <div class="d-flex align-items-center justify-content-between gap-2">
                <div class="search-box-inner">
                  <button type="submit" class="search-box-drop-submit">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                      <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                  <input type="text" placeholder="Search Here..." />
                </div>
                <div class="flex-shrink-0 search-box-btn">
                  <a class="btn text-capitalize"> clt + k </a>
                </div>
              </div>
            </div>
            <ul class="p-0 sub-drop dropdown-menu dropdown-menu-end" aria-labelledby="search-drop">
              <li class="">
                <div class="p-0 card-body all-notification">
                  <div class="d-flex align-items-center border-bottom search-hover py-2 px-3">
                    <div class="flex-shrink-0">
                      <img src="/assets/images/dashboard/64.jpg" class="align-self-center img-fluid avatar-50 rounded-pill" alt="#" />
                    </div>
                    <div class="d-flex flex-column ms-3 w-100">
                      <a href="javascript:void(0);" class="h5">Paige Turner</a>
                      <span>Paige001</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center border-bottom search-hover py-2 px-3">
                    <div class="flex-shrink-0">
                      <img src="/assets/images/dashboard/02.png" class="align-self-center img-fluid avatar-50 rounded-pill" alt="#" />
                    </div>
                    <div class="d-flex flex-column ms-3 w-100">
                      <a href="javascript:void(0);" class="h5">Monty Carlo</a>
                      <span>Carlo.m</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center search-hover py-2 px-3 border-bottom">
                    <div class="flex-shrink-0">
                      <img src="/assets/images/dashboard/03.png" class="align-self-center img-fluid avatar-50 rounded-pill" alt="#" />
                    </div>
                    <div class="d-flex flex-column ms-3 w-100">
                      <a href="javascript:void(0);" class="h5">Paul Molive</a>
                      <span>Paul.45</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center border-bottom search-hover py-2 px-3">
                    <div class="flex-shrink-0">
                      <img src="/assets/images/dashboard/04.png" class="align-self-center img-fluid avatar-50 rounded-pill" alt="#" />
                    </div>
                    <div class="d-flex flex-column ms-3 w-100">
                      <a href="javascript:void(0);" class="h5">Monty Carlo</a>
                      <span>Carlo.m</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <ul class="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0">
          <slot name="navbar-buttons-start"></slot>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_549_1300)">
                <path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10.1601 16.1023C10.0555 16.1023 9.94999 16.1023 9.84765 16.1023L7.34374 17.5C6.36899 17.1721 5.46489 16.6632 4.6789 16L4.66952 13.1875C4.61405 13.1 4.56171 13.0117 4.51327 12.9211L2.02343 11.5031C1.82731 10.5112 1.82731 9.4904 2.02343 8.49844L4.51093 7.08438C4.56171 6.99453 4.61405 6.90547 4.66718 6.81797L4.67968 4.00547C5.46496 3.34035 6.36883 2.82957 7.34374 2.5L9.84374 3.89766C9.94843 3.89766 10.0539 3.89766 10.1562 3.89766L12.6562 2.5C13.631 2.82788 14.5351 3.33679 15.3211 4L15.3305 6.8125C15.3859 6.9 15.4383 6.98828 15.4867 7.07891L17.975 8.49609C18.1711 9.48806 18.1711 10.5088 17.975 11.5008L15.4875 12.9148C15.4367 13.0047 15.3844 13.0938 15.3312 13.1813L15.3187 15.9938C14.534 16.659 13.6307 17.17 12.6562 17.5L10.1601 16.1023Z" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
              <defs>
                <clipPath id="clip0_549_1300">
                  <rect width="20" height="20" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </li>

          <li class="nav-item dropdown iq-responsive-menu d-block d-xl-none">
            <div id="navbarDropdown-search-11" class="btn btn-sm bg-body" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <icon-component type="outlined" icon-name="search" :size="20"></icon-component>
            </div>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown-search-11" style="width: 25rem">
              <li class="px-3 py-0">
                <div class="form-group input-group mb-0">
                  <input type="text" class="form-control" placeholder="Search..." />
                  <span class="input-group-text">
                    <icon-component type="outlined" icon-name="search" :size="20"></icon-component>
                  </span>
                </div>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a id="notification-drop" href="#" class="nav-link p-0 ps-3" data-bs-toggle="dropdown">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_549_1304)">
                  <path d="M7.5 15C7.5 15.663 7.76339 16.2989 8.23223 16.7678C8.70107 17.2366 9.33696 17.5 10 17.5C10.663 17.5 11.2989 17.2366 11.7678 16.7678C12.2366 16.2989 12.5 15.663 12.5 15" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M4.37502 8.125C4.37502 6.63316 4.96766 5.20242 6.02255 4.14752C7.07744 3.09263 8.50818 2.5 10 2.5C11.4919 2.5 12.9226 3.09263 13.9775 4.14752C15.0324 5.20242 15.625 6.63316 15.625 8.125C15.625 10.9234 16.2735 13.1719 16.7891 14.0625C16.8439 14.1574 16.8727 14.2649 16.8728 14.3744C16.8729 14.484 16.8442 14.5916 16.7896 14.6865C16.735 14.7815 16.6565 14.8604 16.5618 14.9154C16.467 14.9705 16.3595 14.9996 16.25 15H3.75002C3.64063 14.9993 3.53333 14.97 3.43884 14.9149C3.34435 14.8597 3.26599 14.7808 3.21158 14.6859C3.15717 14.591 3.12862 14.4835 3.12878 14.3741C3.12895 14.2647 3.15783 14.1572 3.21252 14.0625C3.72737 13.1719 4.37502 10.9227 4.37502 8.125Z" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <circle cx="14.2803" cy="2.91665" r="2.58333" fill="#EF3E36" stroke="white"></circle>
                </g>
                <defs>
                  <clipPath id="clip0_549_1304">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <div class="p-0 sub-drop dropdown-menu dropdown-menu-end" aria-labelledby="notification-drop" data-bs-popper="none">
              <div class="m-0 shadow-none card">
                <div class="py-3 card-header d-flex justify-content-between bg-primary">
                  <div class="header-title">
                    <h5 class="mb-0 text-white">All Notifictaion</h5>
                  </div>
                </div>
                <div class="p-0 card-body max-17 scroll-thin">
                  <div v-for="(item, index) in carts" :key="index" class="iq-sub-card">
                    <div class="d-flex align-items-center">
                      <img class="p-1 avatar-40 rounded-pill bg-soft-primary" :src="item.image" alt="" loading="lazy" />
                      <div class="ms-3 flex-grow-1">
                        <h6 class="mb-0">{{ item.product_name }}</h6>
                        <div class="d-flex justify-content-between align-items-center">
                          <p class="mb-0">{{ item.price }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-footer p-0 text-center">
                  <div class="d-grid"></div>
                </div>
              </div>
            </div>
          </li>
          <li id="itemdropdown1" class="nav-item dropdown">
            <a id="navbarDropdown" class="p-0 ps-3 nav-link d-flex align-items-center position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="/assets/images/dashboard/64.jpg" alt="User-Profile" class="theme-color-default-img img-fluid avatar avatar-40 avatar-rounded" loading="lazy" />
              <div class="iq-profile-badge bg-success"></div>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item">Profile</a></li>
              <li><a class="dropdown-item">Privacy Setting</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item">Logout</a></li>
            </ul>
          </li>
          <slot name="navbar-buttons-end"></slot>
        </ul>
      </b-collapse>
    </div>
  </nav>
</template>
<script>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {},
  props: {
    fullsidebar: { type: Boolean, default: false }
  },
  setup(props, { emit }) {
    const store = useStore()
    const headerNavbar = computed(() => store.getters['setting/header_navbar'])
    const fontSize = computed(() => store.getters['setting/theme_font_size'])
    const themeScheme = computed(() => store.getters['setting/theme_scheme'])
    const themeSchemeDirection = computed(() => store.getters['setting/sheme_scheme_direction'])
    const fullScreen = ref(false)
    const isHidden = ref(false)

    const updateThemeRadio = (value) => {
      store.dispatch(`setting/theme_scheme`, value)
    }

    const updateThemeDirRadio = (value) => {
      store.dispatch(`setting/theme_scheme_direction`, value)
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

    const carts = computed(() => store.getters.carts)

    onMounted(() => {
      window.addEventListener('scroll', onscroll())
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', onscroll())
    })
    return {
      headerNavbar,
      openFullScreen,
      fontSize,
      fullScreen,
      isHidden,
      carts,
      emit,
      themeScheme,
      themeSchemeDirection,
      updateThemeRadio,
      updateThemeDirRadio
    }
  }
}
</script>
