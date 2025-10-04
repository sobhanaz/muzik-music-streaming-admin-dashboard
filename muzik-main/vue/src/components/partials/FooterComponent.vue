<template>
  <!-- Footer Section Start -->
  <footer class="footer">
    <div class="footer-top">
      <div class="row">
        <div class="col-12">
          <input v-model="trackSlider" type="range" min="1" max="100" class="seek_slider" onchange="seekTo()" />
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container-fluid px-4">
        <div class="row align-items-center">
          <div class="col-xl-4 col-md-4 col-sm-6">
            <div class="details">
              <div class="footer-track-detail d-flex align-items-center gap-3 flex-wrap justify-content-sm-start justify-content-center">
                <div class="track-art" :style="`background-image: url(${track.image})`"></div>
                <div>
                  <h6 class="track-name text-white font-size-14 mb-1">{{ track.name }}</h6>
                  <p class="track-artist text-white small m-0">{{ track.artist }}</p>
                </div>
                <div class="like text-white flex-shrink-0 ms-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g>
                      <path d="M9 15.1875C9 15.1875 1.6875 11.25 1.6875 6.60938C1.6875 5.60238 2.08753 4.63663 2.79958 3.92458C3.51163 3.21253 4.47738 2.8125 5.48438 2.8125C7.07273 2.8125 8.43328 3.67805 9 5.0625C9.56672 3.67805 10.9273 2.8125 12.5156 2.8125C13.5226 2.8125 14.4884 3.21253 15.2004 3.92458C15.9125 4.63663 16.3125 5.60238 16.3125 6.60938C16.3125 11.25 9 15.1875 9 15.1875Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                    <defs>
                      <clipPath>
                        <rect width="18" height="18" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-3 col-sm-6 mt-sm-0 mt-3">
            <div class="d-flex align-items-center justify-content-md-center justify-content-sm-end justify-content-center gap-3">
              <div class="track-suffle text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <g>
                    <path d="M6.67969 6.358L5.69109 5.36941C5.30132 4.97784 4.83776 4.66747 4.32723 4.45626C3.81671 4.24505 3.26936 4.13719 2.71687 4.13894H0.849022C0.625246 4.13894 0.410634 4.22783 0.252401 4.38607C0.0941667 4.5443 0.00527191 4.75891 0.00527191 4.98269C0.00527191 5.20646 0.0941667 5.42107 0.252401 5.57931C0.410634 5.73754 0.625246 5.82644 0.849022 5.82644H2.71512C3.04606 5.82554 3.3739 5.89033 3.67962 6.01706C3.98535 6.14379 4.26288 6.32994 4.49613 6.56472L5.48437 7.5512C5.6426 7.70971 5.85732 7.79887 6.08128 7.79907C6.30525 7.79927 6.52012 7.71049 6.67863 7.55226C6.83714 7.39403 6.9263 7.17931 6.9265 6.95535C6.9267 6.73138 6.83791 6.51651 6.67969 6.358Z" fill="currentColor"></path>
                    <path d="M5.68336 12.6299L11.7506 6.56259C11.9839 6.32784 12.2614 6.14172 12.5672 6.01499C12.8729 5.88826 13.2007 5.82345 13.5316 5.82431H15.1281L14.1529 6.79954C14.0742 6.87793 14.0118 6.97107 13.9692 7.07363C13.9266 7.17619 13.9047 7.28615 13.9047 7.3972C13.9047 7.50825 13.9266 7.61821 13.9692 7.72076C14.0118 7.82332 14.0742 7.91647 14.1529 7.99486C14.3111 8.15308 14.5257 8.24196 14.7495 8.24196C14.9732 8.24196 15.1878 8.15308 15.3461 7.99486L17.7465 5.59579C17.8271 5.51525 17.8911 5.41961 17.9347 5.31435C17.9783 5.20909 18.0008 5.09626 18.0008 4.98232C18.0008 4.86837 17.9783 4.75555 17.9347 4.65028C17.8911 4.54502 17.8271 4.44938 17.7465 4.36884L15.3461 1.96872C15.1898 1.81251 14.9785 1.72382 14.7576 1.72172C14.5366 1.71961 14.3237 1.80426 14.1645 1.95747C13.8234 2.28548 13.8315 2.84095 14.1662 3.17564L15.127 4.13646H13.5316C12.9792 4.13475 12.4318 4.24263 11.9213 4.45383C11.4108 4.66504 10.9472 4.97539 10.5574 5.36693L4.49016 11.4363C4.2569 11.6711 3.97937 11.8572 3.67365 11.984C3.36792 12.1107 3.04009 12.1755 2.70914 12.1746H0.84375C0.619974 12.1746 0.405362 12.2635 0.247129 12.4217C0.0888948 12.5799 0 12.7946 0 13.0183C0 13.2421 0.0888948 13.4567 0.247129 13.615C0.405362 13.7732 0.619974 13.8621 0.84375 13.8621H2.70914C3.26174 13.8635 3.80913 13.7553 4.31965 13.5438C4.83016 13.3323 5.29367 13.0217 5.68336 12.6299Z" fill="currentColor"></path>
                    <path d="M15.3461 16.0311L17.7465 13.6317C17.8271 13.5512 17.891 13.4556 17.9347 13.3504C17.9783 13.2451 18.0007 13.1323 18.0007 13.0184C18.0007 12.9045 17.9783 12.7917 17.9347 12.6865C17.891 12.5812 17.8271 12.4856 17.7465 12.4051L15.3461 10.0053C15.1898 9.84913 14.9785 9.76044 14.7576 9.75834C14.5366 9.75624 14.3237 9.84088 14.1645 9.99409C13.8234 10.3221 13.8315 10.8776 14.1662 11.2123L15.127 12.1731H13.5376C13.2067 12.1739 12.8789 12.1091 12.5731 11.9824C12.2674 11.8557 11.9899 11.6695 11.7566 11.4348L10.6625 10.3407C10.5844 10.2613 10.4914 10.1982 10.3887 10.1549C10.2861 10.1117 10.1759 10.0892 10.0645 10.0887C9.95314 10.0883 9.84277 10.1099 9.73978 10.1523C9.63679 10.1947 9.54322 10.2571 9.46446 10.3359C9.3857 10.4146 9.32331 10.5082 9.2809 10.6112C9.23849 10.7142 9.21688 10.8245 9.21734 10.9359C9.21779 11.0473 9.24029 11.1575 9.28354 11.2601C9.32679 11.3628 9.38994 11.4558 9.46934 11.5339L10.5634 12.6284C10.9533 13.0198 11.4168 13.3301 11.9273 13.5413C12.4378 13.7525 12.9852 13.8604 13.5376 13.8588H15.1277L14.1529 14.8358C13.9946 14.994 13.9057 15.2086 13.9057 15.4324C13.9057 15.6562 13.9946 15.8708 14.1529 16.029C14.3108 16.1875 14.5253 16.2768 14.749 16.2772C14.9728 16.2776 15.1875 16.1891 15.3461 16.0311Z" fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath>
                      <rect width="18" height="18" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="prev-track text-white" @click="prevTrack()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g>
                    <path d="M13 2.9925V13.0075C12.9981 13.1848 12.9492 13.3584 12.8581 13.5105C12.767 13.6627 12.6372 13.7879 12.4818 13.8733C12.3264 13.9587 12.1511 14.0013 11.9739 13.9966C11.7966 13.992 11.6238 13.9403 11.4731 13.8469L4 9.17313V13.5C4 13.6326 3.94732 13.7598 3.85355 13.8536C3.75979 13.9473 3.63261 14 3.5 14C3.36739 14 3.24021 13.9473 3.14645 13.8536C3.05268 13.7598 3 13.6326 3 13.5V2.5C3 2.36739 3.05268 2.24021 3.14645 2.14645C3.24021 2.05268 3.36739 2 3.5 2C3.63261 2 3.75979 2.05268 3.85355 2.14645C3.94732 2.24021 4 2.36739 4 2.5V6.82688L11.4731 2.15313C11.6236 2.05865 11.7966 2.00612 11.9743 2.00097C12.1519 1.99582 12.3277 2.03825 12.4834 2.12385C12.6391 2.20946 12.7691 2.33513 12.8599 2.48785C12.9508 2.64058 12.9991 2.81481 13 2.9925Z" fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath>
                      <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="playpause-track" @click="playPauseTrack()">
                <span v-if="playButtonClass == 'play'" class="d-inline-block rounded-circle p-2 bg-primary text-white">
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M16.6308 13.131C16.5743 13.189 16.3609 13.437 16.1622 13.641C14.9971 14.924 11.9576 17.024 10.3668 17.665C10.1252 17.768 9.51437 17.986 9.18802 18C8.8753 18 8.5772 17.928 8.29274 17.782C7.93814 17.578 7.65368 17.257 7.49781 16.878C7.39747 16.615 7.2416 15.828 7.2416 15.814C7.08573 14.953 7 13.554 7 12.008C7 10.535 7.08573 9.193 7.21335 8.319C7.22796 8.305 7.38383 7.327 7.55431 6.992C7.86702 6.38 8.47784 6 9.13151 6H9.18802C9.61374 6.015 10.509 6.395 10.509 6.409C12.0141 7.051 14.9834 9.048 16.1768 10.375C16.1768 10.375 16.5129 10.716 16.659 10.929C16.887 11.235 17 11.614 17 11.993C17 12.416 16.8724 12.81 16.6308 13.131Z" fill="currentColor"></path>
                  </svg>
                </span>
                <span v-else class="d-inline-block rounded-circle p-2 bg-primary text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 10 14" fill="none"><path d="M0 1.5C0 0.671573 0.671573 0 1.5 0V0C2.32843 0 3 0.671573 3 1.5V12.5C3 13.3284 2.32843 14 1.5 14V14C0.671573 14 0 13.3284 0 12.5V1.5Z" fill="currentColor"></path><path d="M7 1.5C7 0.671573 7.67157 0 8.5 0C9.32843 0 10 0.671573 10 1.5V12.5C10 13.3284 9.32843 14 8.5 14C7.67157 14 7 13.3284 7 12.5V1.5Z" fill="currentColor"></path></svg>
                </span>
              </div>
              <div class="next-track text-white" @click="nextTrack()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g>
                    <path d="M13 2.5V13.5C13 13.6326 12.9473 13.7598 12.8536 13.8536C12.7598 13.9473 12.6326 14 12.5 14C12.3674 14 12.2402 13.9473 12.1464 13.8536C12.0527 13.7598 12 13.6326 12 13.5V9.17313L4.52688 13.8469C4.37638 13.9414 4.20336 13.9939 4.02574 13.999C3.84811 14.0042 3.67235 13.9618 3.51663 13.8761C3.36091 13.7905 3.23091 13.6649 3.14007 13.5121C3.04924 13.3594 3.00088 13.1852 3 13.0075V2.9925C3.00088 2.81481 3.04924 2.64058 3.14007 2.48785C3.23091 2.33513 3.36091 2.20946 3.51663 2.12385C3.67235 2.03825 3.84811 1.99582 4.02574 2.00097C4.20336 2.00612 4.37638 2.05865 4.52688 2.15313L12 6.82688V2.5C12 2.36739 12.0527 2.24021 12.1464 2.14645C12.2402 2.05268 12.3674 2 12.5 2C12.6326 2 12.7598 2.05268 12.8536 2.14645C12.9473 2.24021 13 2.36739 13 2.5Z" fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath>
                      <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="track-replay text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g>
                    <path d="M15.3762 9.55705C15.6487 7.4768 15.0562 5.53405 13.909 4.0368C13.7607 3.8433 13.4937 3.78655 13.2827 3.90855L12.2672 4.49555C12.009 4.6448 11.9535 4.98655 12.141 5.2188C13.0152 6.30055 13.4742 7.7303 13.2757 9.26405C12.965 11.6633 11.0062 13.5823 8.60125 13.8473C5.397 14.2001 2.678 11.6906 2.678 8.5568C2.678 5.6228 5.064 3.23505 7.99975 3.23505V3.86855C7.99975 4.23805 8.3995 4.4688 8.7195 4.28405L11.6535 2.59005C11.9732 2.4053 11.9732 1.9438 11.6535 1.75905L8.71975 0.0650508C8.4 -0.119699 8 0.111051 8 0.480551V1.11455C3.89675 1.11455 0.557999 4.45305 0.557999 8.55655C0.557999 12.9438 4.37125 16.4553 8.85575 15.9518C12.2132 15.5753 14.9377 12.9066 15.3762 9.55705Z" fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath>
                      <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-5 mt-md-0 mt-3">
            <div class="row align-items-center gx-xl-5 justify-content-md-end justify-content-center">
              <div class="col-lg-2 d-lg-block d-none"></div>
              <div class="col-lg-4 col-md-5 col-sm-4 col-4">
                <div class="track-volumne d-flex align-items-center justify-content-md-end justify-content-sm-start justify-content-center">
                  <div class="flex-shrink-0 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g>
                        <path d="M6.25 13.125H2.5C2.33424 13.125 2.17527 13.0592 2.05806 12.9419C1.94085 12.8247 1.875 12.6658 1.875 12.5V7.5C1.875 7.33424 1.94085 7.17527 2.05806 7.05806C2.17527 6.94085 2.33424 6.875 2.5 6.875H6.25L11.875 2.5V17.5L6.25 13.125Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M15 8.125V11.875" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath>
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <input v-model="trackVolume" type="range" min="1" max="100" class="volume_slider" @change="setVolume()" />
                </div>
              </div>
              <div class="col-lg-4 col-md-5 col-sm-4 col-5">
                <div class="track-time text-center">
                  <span class="current-time text-white small">{{ currentTime }}</span>
                  <span class="mx-1 text-white">
                    <svg width="6" height="16" viewBox="0 0 4 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.73047 0.392578H3.62109L0.890625 9H0L2.73047 0.392578Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <span class="total-duration text-white small">{{ totalDuration }}</span>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-4 col-3">
                <ul class="list-unstyled m-0 p-0 d-flex align-items-center justify-content-sm-end justify-content-center">
                  <li>
                    <svg class="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g>
                        <path d="M3.125 5H16.875" stroke="#AAAAAA" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M3.125 10H10.625" stroke="#AAAAAA" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M3.125 15H10.625" stroke="#AAAAAA" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M18.75 12.5L13.75 15.625V9.375L18.75 12.5Z" stroke="#AAAAAA" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath>
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </li>
                  <li id="fullscreen-item" class="nav-item iq-full-screen d-none d-xl-block ms-3">
                    <a id="btnFullscreen" href="#" class="nav-link" data-bs-toggle="dropdown">
                      <span class="btn-inner">
                        <svg class="normal-screen icon-24" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.5528 5.99656L13.8595 10.8961" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M14.8016 5.97618L18.5524 5.99629L18.5176 9.96906" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M5.8574 18.896L10.5507 13.9964" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M9.60852 18.9164L5.85775 18.8963L5.89258 14.9235" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <svg class="full-normal-screen icon-32 d-none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.7542 10.1932L18.1867 5.79319" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M17.2976 10.212L13.7547 10.1934L13.7871 6.62518" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M10.4224 13.5726L5.82149 18.1398" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M6.74391 13.5535L10.4209 13.5723L10.3867 17.2755" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Footer Section End -->
  <b-offcanvas v-model="shareOffcanvas" placement="bottom" title="Share" @hide="hideShareOffcanvas">
    <share-offcanvas></share-offcanvas>
  </b-offcanvas>
</template>

<script>
import { computed, watch, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import ShareOffcanvas from '@/components/widgets/ShareOffcanvasNew.vue'
export default {
  components: { ShareOffcanvas },
  setup() {
    const generateImgPath = (path) => {
      return window.origin + import.meta.env.BASE_URL + path
    }
    const store = useStore()
    const footerStyle = computed(() => store.getters['setting/footer_style'])

    // Bottom Canvas
    const shareOffcanvas = ref(false)
    watch(
      () => store.getters.shareOffcanvas,
      (newValue) => {
        shareOffcanvas.value = newValue
      }
    )

    const hideShareOffcanvas = () => {
      store.dispatch('openBottomCanvasAction', { name: 'shareOffcanvas', value: false })
    }

    function footerHeightCount() {
      let is_footer = document.querySelector('.footer')
      if (is_footer !== null) {
        let footerHeight = document.querySelector('.footer')?.getBoundingClientRect().height
        document.querySelector(':root').style.setProperty('--footer-height', footerHeight + 'px')
      }
    }
    setTimeout(() => {
      footerHeightCount()
    }, 0)
    window.addEventListener('resize', function () {
      footerHeightCount()
    })

    const musicDuration = ref(0);
    const track = ref({
      name: '',
      artist: '',
      image: '',
      path: ''
    });

    const totalDuration = ref('00:00');
    const currentTime = ref('00:00');
    const trackVolume = ref(100);
    const isPlaying = ref(false);
    const playButtonClass = ref('play');
    const audio = new Audio();
    const trackSlider = ref(0);

    const loadTrack = () => {
      audio.pause();
      resetValues();
      audio.src = track.value.path;

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadeddata', function () {
        musicDuration.value = this.duration;
      });

      setTimeout(() => {
        updateTime();
      }, 500);
    };

    const resetValues = () => {
      totalDuration.value = '00:00';
      currentTime.value = '00:00';
      playButtonClass.value = 'play';
      isPlaying.value = false;
    };

    const playPauseTrack = () => {
      if (isPlaying.value) {
        audio.pause();
        playButtonClass.value = 'play';
        currentTime.value = audio.currentTime;
      } else {
        playButtonClass.value = 'pause';
        audio.play();
      }
      isPlaying.value = !isPlaying.value;
    };

    const seekTo = (e) => {
      audio.currentTime = musicDuration.value * (e.target.value / 100);
    };

    const updateTime = () => {
      trackSlider.value = audio.currentTime * (100 / musicDuration.value);
      if (Number.isNaN(trackSlider.value)) {
        trackSlider.value = 0;
      }

      let currentMinutes = Math.floor(audio.currentTime / 60);
      let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(musicDuration.value / 60);
      let durationSeconds = Math.floor(musicDuration.value - durationMinutes * 60);

      if (currentSeconds < 10) {
        currentSeconds = '0' + currentSeconds;
      }
      if (durationSeconds < 10) {
        durationSeconds = '0' + durationSeconds;
      }
      if (currentMinutes < 10) {
        currentMinutes = '0' + currentMinutes;
      }
      if (durationMinutes < 10) {
        durationMinutes = '0' + durationMinutes;
      }

      currentTime.value = currentMinutes + ':' + currentSeconds;
      totalDuration.value = durationMinutes + ':' + durationSeconds;
    };

    const beforePrevTrackLoad = () => {
      track.value = musics.value[0]
    }
    
    const beforeNextTrackLoad = () => {
      track.value = musics.value[1]
    }
    
    const prevTrack = () => {
      beforePrevTrackLoad();
      loadTrack();
    };
    
    const nextTrack = () => {
      beforeNextTrackLoad();
      audio.pause();
      loadTrack();
    };

    const setVolume = (e) => {
      audio.volume = e.target.value / 100;
    };

    onMounted(() => {
      isPlaying.value = false;
    });

    const musics = ref([
      {
        name: 'Pop Smoke',
        artist: 'Cascada',
        image: generateImgPath('assets/images/dashboard/audio/01.png'),
        path: generateImgPath('assets/images/dashboard/audio/audio.mp3')
      },
      {
        name: 'Gabby Barrett',
        artist: 'Emeli Sande',
        image: generateImgPath('assets/images/dashboard/audio/02.png'),
        path: generateImgPath('assets/images/dashboard/audio/audio.mp3')
      },
      {
        name: 'Megan Thee',
        artist: 'Jessie J',
        image: generateImgPath('assets/images/dashboard/audio/03.png'),
        path: generateImgPath('assets/images/dashboard/audio/audio.mp3')
      }
    ])

    track.value = musics.value[0]

    loadTrack()

    return {
      footerStyle,
      shareOffcanvas,
      hideShareOffcanvas,
      generateImgPath,
      track,
      totalDuration,
      currentTime,
      trackVolume,
      isPlaying,
      playButtonClass,
      trackSlider,
      loadTrack,
      resetValues,
      playPauseTrack,
      seekTo,
      seekUpdate: () => {},
      updateTime,
      prevTrack,
      beforePrevTrackLoad,
      nextTrack,
      beforeNextTrackLoad,
      setVolume
    }
  },
  data() {
    return {}
  }
}
</script>
