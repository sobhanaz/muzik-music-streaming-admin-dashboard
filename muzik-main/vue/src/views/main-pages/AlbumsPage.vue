<template>
  <div class="row mb-4">
    <div class="col-lg-12">
      <div class="card-header mb-3">
        <div class="header-title">
          <h4 class="card-title text-capitalize">albums</h4>
        </div>
      </div>
    </div>
    <ul class="row list-unstyled mb-0">
      <li v-for="(data, index) in albums" :key="index + '-album'" class="col-lg-2 col-md-4">
        <div class="card">
          <div class="card-body">
            <SongList :id="data.id" :song-img="data.songImg" :title-heading="data.titleHeading" :title-text="data.titleText"></SongList>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="row mb-5">
    <div class="col-lg-12">
      <div class="card-header mb-3">
        <div class="header-title">
          <h4 class="card-title text-capitalize">our top releasing listening songs</h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-for="(data, index) in songs" :key="index + '-songs'" class="col-xl-3 col-lg-6 col-md-6 mb-3">
        <TopSongList :id="data.id" :list-img="data.listImg" :list-title="data.listTitle" :list-text="data.listText" :list-view="data.listView" :class="index !== songs.length - 4 && index !== songs.length - 3 && index !== songs.length - 2 && index !== songs.length - 1 ? 'pb-3 border-bottom' : ''"></TopSongList>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TopSongList from '../../components/custom/cards/TopSongList.vue'
import SongList from '../../components/custom/cards/SongList.vue'
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path
}
const albums = ref([
  {
    songImg: generateImgPath('/assets/images/dashboard/11.png'),
    id: '11',
    titleHeading: 'way of right',
    titleTtext: 'by king sing'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/12.png'),
    id: '12',
    titleHeading: 'years of hundred',
    titleTtext: 'by Helena illation'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/13.png'),
    id: '13',
    titleHeading: 'you are mine',
    titleTtext: 'you are mine'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/14.png'),
    id: '14',
    titleHeading: 'heart is beating',
    titleTtext: 'snoods smith jonas '
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/15.png'),
    id: '15',
    titleHeading: 'my crying eyes',
    titleTtext: 'snoods smith jonas '
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/16.png'),
    id: '16',
    titleHeading: 'my lovely dad',
    titleTtext: 'snoods smith jonas'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/37.png'),
    id: '17',
    titleHeading: 'travel mix',
    titleTtext: 'by Alex Williams'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/28.png'),
    id: '28',
    titleHeading: 'romantic songs',
    titleTtext: 'by Eliana d’cruz'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/29.png'),
    id: '29',
    titleHeading: 'rocking party',
    titleTtext: 'by omen smith'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/15.png'),
    id: '15',
    titleHeading: 'peace of mind',
    titleTtext: 'by mainours Kian'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/30.png'),
    id: '30',
    titleHeading: 'rap songs',
    titleTtext: 'by koruna truss'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/32.png'),
    id: '32',
    titleHeading: 'retro albums',
    titleTtext: 'retro albums'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/05.png'),
    id: '06',
    titleHeading: 'the girl',
    titleTtext: 'by snoods smith Jonas '
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/07.png'),
    id: '07',
    titleHeading: 'the silent one',
    titleTtext: 'by Alex Williams '
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/09.png'),
    id: '09',
    titleHeading: 'everything i want',
    titleTtext: 'by Neha arena'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/10.png'),
    id: '10',
    titleHeading: 'infinity',
    titleTtext: 'by nil ana meet nagak'
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
