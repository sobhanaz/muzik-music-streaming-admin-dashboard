<template>
  <div class="row mb-5">
    <div class="col-lg-12">
      <div class="card-header mb-3">
        <div class="header-title">
          <h4 class="card-title text-capitalize">release</h4>
        </div>
      </div>
    </div>
    <b-tabs>
      <b-tab title="Featured">
        <ul class="row list-unstyled mb-0">
          <li v-for="(data, index) in featuredSongs" :key="index + 'featured'" class="col-lg-2 col-md-4">
            <div class="card">
              <div class="card-body">
                <SongList :id="data.id" :song-img="data.songImg" :title-heading="data.titleHeading" :title-text="data.titleTtext"></SongList>
              </div>
            </div>
          </li>
        </ul>
      </b-tab>
      <b-tab title="Popular">
        <ul class="row list-unstyled mb-0">
          <li v-for="(data, index) in popularSongs" :key="index + 'popular'" class="col-lg-2 col-md-4">
            <div class="card">
              <div class="card-body">
                <SongList :id="data.id" :song-img="data.songImg" :title-heading="data.titleHeading" :title-text="data.titleTtext"></SongList>
              </div>
            </div>
          </li>
        </ul>
      </b-tab>
      <b-tab title="Newest">
        <ul class="row list-unstyled mb-0">
          <li v-for="(data, index) in newestSongs" :key="index + 'newest'" class="col-lg-2 col-md-4">
            <div class="card">
              <div class="card-body">
                <SongList :id="data.id" :song-img="data.songImg" :title-heading="data.titleHeading" :title-text="data.titleTtext"></SongList>
              </div>
            </div>
          </li>
        </ul>
      </b-tab>
    </b-tabs>
  </div>
  <div class="row mb-5">
    <div class="col-lg-6 mb-3">
      <div class="card-header mb-3">
        <div class="header-title">
          <h4 class="card-title text-capitalize">our top releasing listening songs</h4>
        </div>
      </div>
      <div class="row">
        <div v-for="(data, index) in songs" :key="index + '-songs'" class="col-lg-6 mb-3">
          <TopSongList :id="data.id" :list-img="data.listImg" :list-title="data.listTitle" :list-text="data.listText" :list-view="data.listView" :class="index !== songs.length - 4 && index !== songs.length - 3 && index !== songs.length - 2 && index !== songs.length - 1 ? 'pb-3 border-bottom' : ''"></TopSongList>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-3">
      <div class="card-header mb-3">
        <div class="header-title">
          <h4 class="card-title text-capitalize">amazing playlist release by artist</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <SongPlayList id="03" :play-img="generateImgPath('/assets/images/dashboard/02.png')" icon-color="text-warning" bg-color="bg-soft-warning" play-track="18 tracks" title-heading="omen smith playlist" title-text="top 16 songs from Alexa and most of the relax songs." />
        </div>
        <div class="col-lg-6 mt-lg-0 mt-4">
          <SongPlayList id="04" :play-img="generateImgPath('/assets/images/dashboard/03.png')" icon-color="text-info" bg-color="bg-soft-info" play-track="16 tracks" title-heading="Alexa Jonas" title-text="top 22 songs from vibrato and all type of songs." />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SongPlayList from '../../components/custom/cards/SongPlayList.vue'
import TopSongList from '../../components/custom/cards/TopSongList.vue'
import SongList from '../../components/custom/cards/SongList.vue'
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path
}
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
  }
])

const featuredSongs = ref([
  {
    songImg: generateImgPath('/assets/images/dashboard/05.png'),
    id: '05',
    titleHeading: 'the girl',
    titleTtext: 'by snoods smith Jonas '
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/06.png'),
    id: '06',
    titleHeading: 'masinc party album',
    titleTtext: 'by kerana euc veena'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/07.png'),
    id: '07',
    titleHeading: 'the silent one',
    titleTtext: 'by Alex Williams '
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/08.png'),
    id: '08',
    titleHeading: 'just perfect',
    titleTtext: 'by karuna truss'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/09.png'),
    id: '09',
    titleHeading: 'everything i want',
    titleTtext: 'by Neha arena '
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/10.png'),
    id: '10',
    titleHeading: 'infinity',
    titleTtext: 'by nil ana meet nagak'
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
    songImg: generateImgPath('/assets/images/dashboard/61.png'),
    id: '06',
    titleHeading: 'way of right',
    titleTtext: 'by king sing'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/62.png'),
    id: '07',
    titleHeading: 'you are mine',
    titleTtext: 'by meet and Karena Jonas'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/15.png'),
    id: '09',
    titleHeading: 'my crying eyes',
    titleTtext: 'by snoods smith Jonas'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/16.png'),
    id: '10',
    titleHeading: 'my lovely dad',
    titleTtext: 'by snoods smith Jonas'
  }
])

const popularSongs = ref([
  {
    songImg: generateImgPath('/assets/images/dashboard/05.png'),
    id: '05',
    titleHeading: 'the girl',
    titleTtext: 'by snoods smith Jonas '
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/06.png'),
    id: '06',
    titleHeading: 'masinc party album',
    titleTtext: 'by kerana euc veena'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/07.png'),
    id: '07',
    titleHeading: 'the silent one',
    titleTtext: 'by Alex Williams '
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/08.png'),
    id: '08',
    titleHeading: 'just perfect',
    titleTtext: 'by karuna truss'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/09.png'),
    id: '09',
    titleHeading: 'everything i want',
    titleTtext: 'by Neha arena '
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
    songImg: generateImgPath('/assets/images/dashboard/61.png'),
    id: '06',
    titleHeading: 'way of right',
    titleTtext: 'by king sing'
  }
])

const newestSongs = ref([
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
    songImg: generateImgPath('/assets/images/dashboard/61.png'),
    id: '06',
    titleHeading: 'way of right',
    titleTtext: 'by king sing'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/61.png'),
    id: '06',
    titleHeading: 'way of right',
    titleTtext: 'by king sing'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/62.png'),
    id: '07',
    titleHeading: 'you are mine',
    titleTtext: 'by meet and Karena Jonas'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/15.png'),
    id: '09',
    titleHeading: 'my crying eyes',
    titleTtext: 'by snoods smith Jonas'
  },
  {
    songImg: generateImgPath('/assets/images/dashboard/16.png'),
    id: '10',
    titleHeading: 'my lovely dad',
    titleTtext: 'by snoods smith Jonas '
  }
])
</script>
