<template>
  <b-row class="mb-5">
    <b-col md="12">
      <div class="card-header">
        <div class="header-title">
          <h4 class="card-title text-capitalize mb-3">playlist by artist</h4>
        </div>
      </div>
    </b-col>
    <b-col v-for="(data, index) in playListArr" :key="index + '-play-list-song'" class="mb-3" xl="3" md="6">
      <SongPlayList :id="data.id" :play-img="data.playImg" :icon-color="data.iconColor" :bg-color="data.bgColor" :play-track="data.playTrack" :title-heading="data.titleHeading" :title-text="data.titleText"></SongPlayList>
    </b-col>
  </b-row>
  <b-row class="mb-4">
    <div class="col-lg-12">
      <div class="card-header mb-3">
        <div class="header-title d-flex align-items-center justify-content-between">
          <h4 class="card-title text-capitalize">trending songs</h4>
          <router-link :to="{ name: 'home.release' }" class="small text-body"
            >View All
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
              <path d="M10.9375 4V9.6875C10.9375 9.80353 10.8914 9.91481 10.8094 9.99686C10.7273 10.0789 10.616 10.125 10.5 10.125C10.384 10.125 10.2727 10.0789 10.1906 9.99686C10.1086 9.91481 10.0625 9.80353 10.0625 9.6875V5.05602L3.80953 11.3095C3.72744 11.3916 3.6161 11.4377 3.5 11.4377C3.3839 11.4377 3.27256 11.3916 3.19047 11.3095C3.10838 11.2274 3.06226 11.1161 3.06226 11C3.06226 10.8839 3.10838 10.7726 3.19047 10.6905L9.44398 4.4375H4.8125C4.69647 4.4375 4.58519 4.39141 4.50314 4.30936C4.42109 4.22731 4.375 4.11603 4.375 4C4.375 3.88397 4.42109 3.77269 4.50314 3.69064C4.58519 3.60859 4.69647 3.5625 4.8125 3.5625H10.5C10.616 3.5625 10.7273 3.60859 10.8094 3.69064C10.8914 3.77269 10.9375 3.88397 10.9375 4Z" fill="#4A525F" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <ul class="row row-cols-lg-6 row-cols-md-4 row-cols-2 list-unstyled mb-0">
      <li v-for="(data, index) in trandingSongs" :key="index + '-tranding-song'" class="col">
        <div class="card">
          <div class="card-body">
            <SongList :id="data.id" :song-img="data.songImg" :title-heading="data.titleHeading" :title-text="data.titleText"></SongList>
          </div>
        </div>
      </li>
    </ul>
  </b-row>
  <b-row class="">
    <div class="col-lg-12 mb-4">
      <div class="card-header mb-3">
        <div class="header-title">
          <h4 class="card-title text-capitalize">recently played</h4>
        </div>
        <div class="common-album position-relative d-lg-block d-none">
          <div id="prev" class="swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
              <path d="M15.75 9.5C15.75 9.64918 15.6908 9.79226 15.5853 9.89775C15.4798 10.0032 15.3367 10.0625 15.1875 10.0625H4.17025L8.27298 14.1645C8.32525 14.2168 8.3667 14.2788 8.39499 14.3471C8.42327 14.4154 8.43783 14.4886 8.43783 14.5625C8.43783 14.6364 8.42327 14.7096 8.39499 14.7779C8.3667 14.8462 8.32525 14.9082 8.27298 14.9605C8.22072 15.0127 8.15868 15.0542 8.09039 15.0825C8.02211 15.1108 7.94893 15.1253 7.87502 15.1253C7.80111 15.1253 7.72792 15.1108 7.65964 15.0825C7.59135 15.0542 7.52931 15.0127 7.47705 14.9605L2.41455 9.89797C2.36225 9.84573 2.32076 9.78369 2.29245 9.7154C2.26414 9.64712 2.24957 9.57392 2.24957 9.5C2.24957 9.42608 2.26414 9.35288 2.29245 9.2846C2.32076 9.21631 2.36225 9.15427 2.41455 9.10203L7.47705 4.03953C7.58259 3.93398 7.72575 3.87469 7.87502 3.87469C8.02428 3.87469 8.16744 3.93398 8.27298 4.03953C8.37853 4.14508 8.43783 4.28823 8.43783 4.4375C8.43783 4.58677 8.37853 4.72992 8.27298 4.83547L4.17025 8.9375H15.1875C15.3367 8.9375 15.4798 8.99676 15.5853 9.10225C15.6908 9.20774 15.75 9.35082 15.75 9.5Z" fill="#4A525F" />
            </svg>
          </div>
          <div id="next" class="swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
              <path d="M15.5855 9.89797L10.523 14.9605C10.4174 15.066 10.2743 15.1253 10.125 15.1253C9.97573 15.1253 9.83258 15.066 9.72703 14.9605C9.62148 14.8549 9.56219 14.7118 9.56219 14.5625C9.56219 14.4132 9.62148 14.2701 9.72703 14.1645L13.8298 10.0625H2.8125C2.66332 10.0625 2.52024 10.0032 2.41475 9.89775C2.30926 9.79226 2.25 9.64918 2.25 9.5C2.25 9.35082 2.30926 9.20774 2.41475 9.10225C2.52024 8.99676 2.66332 8.9375 2.8125 8.9375H13.8298L9.72703 4.83547C9.62148 4.72992 9.56219 4.58677 9.56219 4.4375C9.56219 4.28823 9.62148 4.14508 9.72703 4.03953C9.83258 3.93398 9.97573 3.87469 10.125 3.87469C10.2743 3.87469 10.4174 3.93398 10.523 4.03953L15.5855 9.10203C15.6378 9.15427 15.6793 9.21631 15.7076 9.2846C15.7359 9.35288 15.7504 9.42608 15.7504 9.5C15.7504 9.57392 15.7359 9.64712 15.7076 9.7154C15.6793 9.78369 15.6378 9.84573 15.5855 9.89797Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
      <Swiper
        :modules="modules"
        :slides-per-view="6"
        :space-between="20"
        :navigation="{
          clickable: true,
          nextEl: '#next',
          prevEl: '#prev'
        }"
        :breakpoints="{
          0: { slidesPerView: 1 },
          320: { slidesPerView: 2 },
          767: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1400: { slidesPerView: 6 },
          1500: { slidesPerView: 6 }
        }"
        class="overflow-hidden"
      >
        <SwiperSlide v-for="(data, index) in recentlyPlayed" :key="index + '-recently-song'" class="card card-slide">
          <div class="card-body">
            <SongList :id="data.id" :song-img="data.songImg" :title-heading="data.titleHeading" :title-text="data.titleText"></SongList>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="col-lg-12 mb-5">
      <div class="card-header mb-3">
        <div class="header-title">
          <h4 class="card-title text-capitalize">top genres for you</h4>
        </div>
        <div class="common-album position-relative d-lg-block d-none">
          <div id="prev1" class="swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
              <path d="M15.75 9.5C15.75 9.64918 15.6908 9.79226 15.5853 9.89775C15.4798 10.0032 15.3367 10.0625 15.1875 10.0625H4.17025L8.27298 14.1645C8.32525 14.2168 8.3667 14.2788 8.39499 14.3471C8.42327 14.4154 8.43783 14.4886 8.43783 14.5625C8.43783 14.6364 8.42327 14.7096 8.39499 14.7779C8.3667 14.8462 8.32525 14.9082 8.27298 14.9605C8.22072 15.0127 8.15868 15.0542 8.09039 15.0825C8.02211 15.1108 7.94893 15.1253 7.87502 15.1253C7.80111 15.1253 7.72792 15.1108 7.65964 15.0825C7.59135 15.0542 7.52931 15.0127 7.47705 14.9605L2.41455 9.89797C2.36225 9.84573 2.32076 9.78369 2.29245 9.7154C2.26414 9.64712 2.24957 9.57392 2.24957 9.5C2.24957 9.42608 2.26414 9.35288 2.29245 9.2846C2.32076 9.21631 2.36225 9.15427 2.41455 9.10203L7.47705 4.03953C7.58259 3.93398 7.72575 3.87469 7.87502 3.87469C8.02428 3.87469 8.16744 3.93398 8.27298 4.03953C8.37853 4.14508 8.43783 4.28823 8.43783 4.4375C8.43783 4.58677 8.37853 4.72992 8.27298 4.83547L4.17025 8.9375H15.1875C15.3367 8.9375 15.4798 8.99676 15.5853 9.10225C15.6908 9.20774 15.75 9.35082 15.75 9.5Z" fill="#4A525F" />
            </svg>
          </div>
          <div id="next1" class="swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
              <path d="M15.5855 9.89797L10.523 14.9605C10.4174 15.066 10.2743 15.1253 10.125 15.1253C9.97573 15.1253 9.83258 15.066 9.72703 14.9605C9.62148 14.8549 9.56219 14.7118 9.56219 14.5625C9.56219 14.4132 9.62148 14.2701 9.72703 14.1645L13.8298 10.0625H2.8125C2.66332 10.0625 2.52024 10.0032 2.41475 9.89775C2.30926 9.79226 2.25 9.64918 2.25 9.5C2.25 9.35082 2.30926 9.20774 2.41475 9.10225C2.52024 8.99676 2.66332 8.9375 2.8125 8.9375H13.8298L9.72703 4.83547C9.62148 4.72992 9.56219 4.58677 9.56219 4.4375C9.56219 4.28823 9.62148 4.14508 9.72703 4.03953C9.83258 3.93398 9.97573 3.87469 10.125 3.87469C10.2743 3.87469 10.4174 3.93398 10.523 4.03953L15.5855 9.10203C15.6378 9.15427 15.6793 9.21631 15.7076 9.2846C15.7359 9.35288 15.7504 9.42608 15.7504 9.5C15.7504 9.57392 15.7359 9.64712 15.7076 9.7154C15.6793 9.78369 15.6378 9.84573 15.5855 9.89797Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
      <Swiper
        :modules="modules"
        :slides-per-view="5"
        :space-between="20"
        :navigation="{
          clickable: true,
          nextEl: '#next1',
          prevEl: '#prev1'
        }"
        :breakpoints="{
          0: { slidesPerView: 1 },
          320: { slidesPerView: 2 },
          767: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1400: { slidesPerView: 5 },
          1500: { slidesPerView: 5 }
        }"
        class="overflow-hidden"
      >
        <SwiperSlide v-for="(data, index) in topGeneras" :key="index + '-geners-song'" class="">
          <div class="card-body">
            <SongList :id="data.id" :song-img="data.songImg" :title-heading="data.titleHeading" :title-text="data.titleText"></SongList>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </b-row>
  <b-row class="mb-5">
    <div class="col-lg-12">
      <div class="card-header mb-3">
        <div class="header-title d-flex align-items-center justify-content-between">
          <h4 class="card-title text-capitalize">radio station songs</h4>
          <a href="#" class="small text-body"
            >View All
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
              <path d="M10.9375 4V9.6875C10.9375 9.80353 10.8914 9.91481 10.8094 9.99686C10.7273 10.0789 10.616 10.125 10.5 10.125C10.384 10.125 10.2727 10.0789 10.1906 9.99686C10.1086 9.91481 10.0625 9.80353 10.0625 9.6875V5.05602L3.80953 11.3095C3.72744 11.3916 3.6161 11.4377 3.5 11.4377C3.3839 11.4377 3.27256 11.3916 3.19047 11.3095C3.10838 11.2274 3.06226 11.1161 3.06226 11C3.06226 10.8839 3.10838 10.7726 3.19047 10.6905L9.44398 4.4375H4.8125C4.69647 4.4375 4.58519 4.39141 4.50314 4.30936C4.42109 4.22731 4.375 4.11603 4.375 4C4.375 3.88397 4.42109 3.77269 4.50314 3.69064C4.58519 3.60859 4.69647 3.5625 4.8125 3.5625H10.5C10.616 3.5625 10.7273 3.60859 10.8094 3.69064C10.8914 3.77269 10.9375 3.88397 10.9375 4Z" fill="#4A525F" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <ul class="row row-cols-lg-5 row-cols-md-4 row-cols-2 list-unstyled mb-0">
      <li v-for="(data, index) in radioStation" :key="index + '-radio-station'" class="col mb-3">
        <SongList :id="data.id" :song-img="data.songImg" :title-heading="data.titleHeading" :title-text="data.titleText"></SongList>
      </li>
    </ul>
  </b-row>
  <b-row class="mb-5">
    <div class="col-lg-12">
      <div class="card-header mb-3">
        <div class="header-title">
          <h4 class="card-title text-capitalize">our top listening songs</h4>
        </div>
      </div>
    </div>

    <div class="row">
      <div v-for="(data, index) in songs" :key="index + '-songs'" class="col-xl-3 col-lg-6 col-md-6 mb-3">
        <TopSongList :id="data.id" :list-img="data.listImg" :list-title="data.listTitle" :list-text="data.listText" :list-view="data.listView" :class="index !== songs.length - 4 && index !== songs.length - 3 && index !== songs.length - 2 && index !== songs.length - 1 ? 'pb-3 border-bottom' : ''"></TopSongList>
      </div>
    </div>
  </b-row>
  <b-row class="mb-5">
    <div class="col-lg-12">
      <div class="card-header mb-3">
        <div class="header-title">
          <h4 class="card-title text-capitalize">top artists</h4>
        </div>
        <div class="common-album position-relative d-lg-block d-none">
          <div id="prev2" class="swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
              <path d="M15.75 9.5C15.75 9.64918 15.6908 9.79226 15.5853 9.89775C15.4798 10.0032 15.3367 10.0625 15.1875 10.0625H4.17025L8.27298 14.1645C8.32525 14.2168 8.3667 14.2788 8.39499 14.3471C8.42327 14.4154 8.43783 14.4886 8.43783 14.5625C8.43783 14.6364 8.42327 14.7096 8.39499 14.7779C8.3667 14.8462 8.32525 14.9082 8.27298 14.9605C8.22072 15.0127 8.15868 15.0542 8.09039 15.0825C8.02211 15.1108 7.94893 15.1253 7.87502 15.1253C7.80111 15.1253 7.72792 15.1108 7.65964 15.0825C7.59135 15.0542 7.52931 15.0127 7.47705 14.9605L2.41455 9.89797C2.36225 9.84573 2.32076 9.78369 2.29245 9.7154C2.26414 9.64712 2.24957 9.57392 2.24957 9.5C2.24957 9.42608 2.26414 9.35288 2.29245 9.2846C2.32076 9.21631 2.36225 9.15427 2.41455 9.10203L7.47705 4.03953C7.58259 3.93398 7.72575 3.87469 7.87502 3.87469C8.02428 3.87469 8.16744 3.93398 8.27298 4.03953C8.37853 4.14508 8.43783 4.28823 8.43783 4.4375C8.43783 4.58677 8.37853 4.72992 8.27298 4.83547L4.17025 8.9375H15.1875C15.3367 8.9375 15.4798 8.99676 15.5853 9.10225C15.6908 9.20774 15.75 9.35082 15.75 9.5Z" fill="#4A525F" />
            </svg>
          </div>
          <div id="next2" class="swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
              <path d="M15.5855 9.89797L10.523 14.9605C10.4174 15.066 10.2743 15.1253 10.125 15.1253C9.97573 15.1253 9.83258 15.066 9.72703 14.9605C9.62148 14.8549 9.56219 14.7118 9.56219 14.5625C9.56219 14.4132 9.62148 14.2701 9.72703 14.1645L13.8298 10.0625H2.8125C2.66332 10.0625 2.52024 10.0032 2.41475 9.89775C2.30926 9.79226 2.25 9.64918 2.25 9.5C2.25 9.35082 2.30926 9.20774 2.41475 9.10225C2.52024 8.99676 2.66332 8.9375 2.8125 8.9375H13.8298L9.72703 4.83547C9.62148 4.72992 9.56219 4.58677 9.56219 4.4375C9.56219 4.28823 9.62148 4.14508 9.72703 4.03953C9.83258 3.93398 9.97573 3.87469 10.125 3.87469C10.2743 3.87469 10.4174 3.93398 10.523 4.03953L15.5855 9.10203C15.6378 9.15427 15.6793 9.21631 15.7076 9.2846C15.7359 9.35288 15.7504 9.42608 15.7504 9.5C15.7504 9.57392 15.7359 9.64712 15.7076 9.7154C15.6793 9.78369 15.6378 9.84573 15.5855 9.89797Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <Swiper
        :modules="modules"
        :slides-per-view="7"
        :space-between="20"
        :loop="true"
        :navigation="{
          clickable: true,
          nextEl: '#next2',
          prevEl: '#prev2'
        }"
        :breakpoints="{
          0: { slidesPerView: 1 },
          320: { slidesPerView: 2 },
          767: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
          1400: { slidesPerView: 7 },
          1500: { slidesPerView: 7 }
        }"
        class="overflow-hidden"
      >
        <SwiperSlide v-for="(data, index) in artistList" :key="index + '-artisat-song'" class="">
          <div class="card-body text-center">
            <SongList :id="data.id" :song-img="data.songImg" :title-heading="data.titleHeading" :title-text="data.titleText"></SongList>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </b-row>
</template>

<script setup>
import { ref } from 'vue'
import SongPlayList from '../../components/custom/cards/SongPlayList.vue'
import SongList from '../../components/custom/cards/SongList.vue'
import TopSongList from '../../components/custom/cards/TopSongList.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
const modules = [Navigation]

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path
}

const playListArr = ref([
  {
    playImg: generateImgPath('/assets/images/dashboard/01.png'),
    iconColor: 'text-danger',
    bgColor: 'bg-soft-danger',
    id: '01',
    playTrack: '12 tracks',
    titleHeading: 'Eliana d’cruz playlist',
    titleText: 'top 12 songs from Eliana and all type of songs.'
  },
  {
    playImg: generateImgPath('/assets/images/dashboard/02.png'),
    iconColor: 'text-warning',
    bgColor: 'bg-soft-warning',
    id: '02',
    playTrack: '18 tracks',
    titleHeading: 'omen smith playlist',
    titleText: 'top 18 songs from omen and mainly party song.'
  },
  {
    playImg: generateImgPath('/assets/images/dashboard/03.png'),
    iconColor: 'text-info',
    bgColor: 'bg-soft-info',
    id: '03',
    playTrack: '16 tracks',
    titleHeading: 'Alexa Jonas',
    titleText: 'top 16 songs from Alexa and most of the relax songs.'
  },
  {
    playImg: generateImgPath('/assets/images/dashboard/04.png'),
    iconColor: 'text-success',
    bgColor: 'bg-soft-success',
    id: '04',
    playTrack: '22 tracks',
    titleHeading: 'vibrato eruct',
    titleText: 'top 22 songs from vibrato and all types of songs.'
  }
])

const trandingSongs = ref([
  {
    songImg: generateImgPath('/assets/images/dashboard/05.png'),
    id: '05',
    titleHeading: 'the girl',
    titleText: 'by snoods smith Jonas'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/06.png'),
    id: '06',
    titleHeading: 'masinc party album',
    titleText: 'by kerana euc veena'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/07.png'),
    id: '07',
    titleHeading: 'the silent one',
    titleText: 'by Alex Williams'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/08.png'),
    id: '08',
    titleHeading: 'just perfect',
    titleText: 'by karuna truss'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/09.png'),
    id: '09',
    titleHeading: 'everything i want',
    titleText: 'by Neha arena'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/10.png'),
    id: '10',
    titleHeading: 'infinity',
    titleText: 'by nil ana meet nagak'
  }
])

const recentlyPlayed = ref([
  {
    songImg: generateImgPath('/assets/images/dashboard/11.png'),
    id: '11',
    titleHeading: 'way of right',
    titleText: 'by king sing'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/12.png'),
    id: '12',
    titleHeading: 'years of hundred',
    titleText: 'by Helena illation'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/13.png'),
    id: '13',
    titleHeading: 'you are mine',
    titleText: 'you are mine'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/14.png'),
    id: '14',
    titleHeading: 'heart is beating',
    titleText: 'snoods smith jonas'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/15.png'),
    id: '15',
    titleHeading: 'my crying eyes',
    titleText: 'snoods smith jonas'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/16.png'),
    id: '16',
    titleHeading: 'my lovely dad',
    titleText: 'snoods smith jonas'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/11.png'),
    id: '17',
    titleHeading: 'the girl',
    titleText: 'by snoods smith Jonas'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/12.png'),
    id: '18',
    titleHeading: 'way of right',
    titleText: 'by king sing'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/13.png'),
    id: '19',
    titleHeading: 'years of hundred',
    titleText: 'by Helena illation'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/14.png'),
    id: '20',
    titleHeading: 'you are mine',
    titleText: 'you are mine'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/15.png'),
    id: '21',
    titleHeading: 'heart is beating',
    titleText: 'snoods smith jonas'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/16.png'),
    id: '22',
    titleHeading: 'my crying eyes',
    titleText: 'snoods smith jonas'
  }
])
const topGeneras = ref([
  {
    songImg: generateImgPath('/assets/images/dashboard/17.png'),
    id: '23',
    titleHeading: 'sorrow',
    titleText: 'top 12 songs from travels and'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/18.png'),
    id: '24',
    titleHeading: 'relax',
    titleText: 'top 12 songs from travels and'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/19.png'),
    id: '25',
    titleHeading: 'travel',
    titleText: 'top 12 songs from travels and'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/20.png'),
    Id: '26',
    titleHeading: 'party',
    titleText: 'top 12 songs from travels and'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/21.png'),
    Id: '27',
    titleHeading: '19’s retro song',
    titleText: 'top 12 songs from travels and'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/18.png'),
    id: '29',
    titleHeading: 'relax',
    titleText: 'top 12 songs from travels and'
  }
])

const radioStation = ref([
  {
    songImg: generateImgPath('/assets/images/dashboard/45.png'),
    id: '30',
    titleHeading: 'music hits',
    titleText: 'music hits by rj karuna'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/46.png'),
    id: '31',
    titleHeading: '8917 radio hits',
    titleText: '897 radio hits by rj Nina'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/47.png'),
    id: '32',
    titleHeading: 'country music',
    titleText: 'country music by rj angel'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/48.png'),
    id: '33',
    titleHeading: 'winter thunders',
    titleText: 'winter thunders by rj myoma'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/49.png'),
    id: '34',
    titleHeading: 'radio with rive',
    titleText: 'radio with rive from rj rive'
  }
])

const artistList = ref([
  {
    songImg: generateImgPath('/assets/images/dashboard/38.png'),
    id: '52',
    SongList: 'true',
    titleHeading: 'Eliana d’Cruz',
    titleText: 'playback singer'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/39.png'),
    id: '53',
    SongList: 'true',
    titleHeading: 'Alex Williams',
    titleText: 'composer'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/40.png'),
    id: '54',
    SongList: 'true',
    titleHeading: 'omen smith',
    titleText: 'playback singer'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/41.png'),
    id: '55',
    SongList: 'true',
    titleHeading: 'Alexa Jonas',
    titleText: 'music player'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/42.png'),
    id: '56',
    SongList: 'true',
    titleHeading: 'koruna truss',
    titleText: 'playback singer'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/43.png'),
    id: '57',
    SongList: 'true',
    titleHeading: 'vibrato eruct',
    titleText: 'playback singer'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/38.png'),
    id: '52',
    SongList: 'true',
    titleHeading: 'Eliana d’Cruz',
    titleText: 'playback singer'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/39.png'),
    id: '53',
    SongList: 'true',
    titleHeading: 'Alex Williams',
    titleText: 'composer'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/40.png'),
    id: '54',
    SongList: 'true',
    titleHeading: 'omen smith',
    titleText: 'playback singer'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/41.png'),
    id: '55',
    SongList: 'true',
    titleHeading: 'Alexa Jonas',
    titleText: 'music player'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/42.png'),
    id: '56',
    SongList: 'true',
    titleHeading: 'koruna truss',
    titleText: 'playback singer'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/43.png'),
    id: '57',
    SongList: 'true',
    titleHeading: 'vibrato eruct',
    titleText: 'playback singer'
  }
])

const songs = ref([
  {
    listImg: generateImgPath('/assets/images/dashboard/22.png'),
    id: '60',
    listTitle: 'Saturday party',
    listText: 'john deo',
    listView: '8.6k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/23.png'),
    id: '61',
    listTitle: 'Saturday party',
    listText: 'angle wings',
    listView: '8.2k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/24.png'),
    id: '62',
    listTitle: 'Ferrari',
    listText: 'smith euc',
    listView: '8.0k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/25.png'),
    id: '63',
    listTitle: 'my bike',
    listText: 'karuna Williams',
    listView: '7.6k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/26.png'),
    id: '64',
    listTitle: 'my way of music',
    listText: 'winy sling',
    listView: '7.4k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/27.png'),
    id: '65',
    listTitle: 'hits of beats',
    listText: 'Alina smith',
    listView: '7.2k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/28.png'),
    id: '66',
    listTitle: 'hole world',
    listText: 'mitten raj',
    listView: '6.9k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/29.png'),
    id: '67',
    listTitle: 'passion of work',
    listText: 'haul josh',
    listView: '6.4k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/30.png'),
    id: '68',
    listTitle: 'my lovely doll',
    listText: 'king of rape',
    listView: '6.2k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/31.png'),
    id: '69',
    listTitle: 'my yellow car',
    listText: 'Alina kuru',
    listView: '5.9k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/32.png'),
    id: '70',
    listTitle: 'retro lo-fi',
    listText: 'mitral luff',
    listView: '5.4k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/33.png'),
    id: '71',
    listTitle: 'party nights',
    listText: 'john deo',
    listView: '5.1k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/34.png'),
    id: '72',
    listTitle: 'my little world',
    listText: 'john and smith jonas',
    listView: '4.6k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/35.png'),
    id: '73',
    listTitle: 'party nights',
    listText: 'Alina Jonas',
    listView: '4.2k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/36.png'),
    id: '74',
    listTitle: 'first concert',
    listText: 'kimono dictum',
    listView: '3.9k'
  },
  {
    listImg: generateImgPath('/assets/images/dashboard/37.png'),
    id: '75',
    listTitle: 'mountain road',
    listText: 'john deo',
    listView: '3.4k'
  }
])
</script>
