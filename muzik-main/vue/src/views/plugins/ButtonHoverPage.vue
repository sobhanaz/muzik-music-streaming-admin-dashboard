<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <div class="d-flex flex-wrap align-items-center">
            <div class="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
              <h4 class="me-2 h4">{{ $t('sidebar.hover-button') }}</h4>
            </div>
          </div>
          <small
            >For more Information regarding hover button Plugin refer
            <a href="https://ianlunn.github.io/Hover/#effects">Documentation</a>
          </small>
        </div>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="12">
      <b-card>
        <b-card->{{ $t('sidebar.2d-transition') }}</b-card->
        <b-card-text> In this method, selecting only one option from a lots of options while only using up as much space as a single option excepted. </b-card-text>
        <b-card-body class="text-center">
          <div class="iq-plugins-btn">
            <a v-for="(transclassname, index) in transitions2Ds" :key="index" href="#" :class="`me-4 btn btn-primary ${transclassname}`">{{ transclassname }}</a>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="12">
      <b-card>
        <b-card->{{ $t('sidebar.background-transition') }}</b-card->
        <b-card-text> In this method, selecting only one option from a lots of options while only using up as much space as a single option excepted. </b-card-text>
        <b-card-body class="text-center">
          <div class="iq-plugins-btn">
            <a v-for="(backtransdata, index) in backtransitions" :key="index" href="#" :class="`me-4 btn btn-primary ${backtransdata.classname}`">{{ backtransdata.name }}</a>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="12">
      <b-card>
        <b-card->{{ $t('sidebar.icons') }}</b-card->
        <b-card-text>
          <small>Demo font icons courtesy of <a href="https://fortawesome.github.io/Font-Awesome/">FontAwesome</a>. <a href="https://github.com/IanLunn/Hover/#using-icon-effects">How to use icons</a> with Hover.css.</small>
        </b-card-text>
        <b-card-body class="text-center">
          <div class="iq-plugins-btn">
            <a v-for="(icondata, index) in icons" :key="index" href="#" :class="`me-4 btn btn-primary ${icondata.classname}`">
              <icon-component type="solid" class="hvr-icon" :icon-name="icondata.iconname" :size="22"></icon-component>
              {{ icondata.name }}
            </a>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="12">
      <b-card>
        <b-card->{{ $t('sidebar.border-transition') }}</b-card->
        <b-card-text> In this method, selecting only one option from a lots of options while only using up as much space as a single option excepted. </b-card-text>
        <b-card-body class="text-center">
          <div class="iq-plugins-btn">
            <a v-for="(bordertransdata, index) in bordertransitions" :key="index" href="#" :class="`me-4 btn btn-primary ${bordertransdata.classname}`">{{ bordertransdata.name }}</a>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="12">
      <b-card>
        <b-card->{{ $t('sidebar.shadow') }}</b-card->
        <b-card-text> In this method, selecting only one option from a lots of options while only using up as much space as a single option excepted. </b-card-text>
        <b-card-body class="text-center">
          <div class="iq-plugins-btn">
            <a v-for="(growshadowdata, index) in growshadowtransitions" :key="index" href="#" :class="`me-4 btn btn-primary ${growshadowdata.classname}`">{{ growshadowdata.name }}</a>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="12">
      <b-card>
        <b-card->{{ $t('sidebar.speech-bubble') }}</b-card->
        <b-card-text> In this method, selecting only one option from a lots of options while only using up as much space as a single option excepted. </b-card-text>
        <b-card-body class="text-center">
          <a v-for="(bubbledata, index) in bubbles" :key="index" href="#" :class="`me-4 btn btn-primary ${bubbledata.classname}`">{{ bubbledata.name }}</a>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="12">
      <b-card>
        <b-card->{{ $t('sidebar.curls') }}</b-card->
        <b-card-text> In this method, selecting only one option from a lots of options while only using up as much space as a single option excepted. </b-card-text>
        <b-card-body class="text-center">
          <a v-for="(curldata, index) in curls" :key="index" href="#" :class="`me-4 btn btn-primary ${curldata.classname}`">{{ curldata.name }}</a>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'ButtonHover',
  setup() {
    const transitions2Ds = ref(['hvr-grow', 'hvr-shrink', 'hvr-wobble-to-bottom-right', 'hvr-pulse', 'hvr-pulse-grow', 'hvr-push', 'hvr-grow-rotate', 'hvr-pop', ' hvr-wobble-to-top-right', 'hvr-bounce-in', 'hvr-bounce-out', 'hvr-rotate', 'hvr-wobble-bottom', 'hvr-wobble-vertical', 'hvr-skew-forward', 'hvr-skew-backward', 'hvr-bob', 'hvr-hang', 'hvr-wobble-horizontal', 'hvr-skew', 'hvr-wobble-skew', 'hvr-buzz', 'hvr-wobble-top', 'hvr-float', 'hvr-sink', 'hvr-buzz-out', 'hvr-forward', 'hvr-backward', 'hvr-grow', 'hvr-shrink', 'hvr-wobble-to-bottom-right', 'hvr-pulse', 'hvr-pulse-grow', 'hvr-push'])
    const backtransitions = ref([
      { classname: 'hvr-fade', name: 'Fade' },
      { classname: 'hvr-sweep-to-right', name: 'Sweep To Right' },
      { classname: 'hvr-sweep-to-left', name: 'Sweep To Left' },
      { classname: 'hvr-sweep-to-bottom', name: 'Sweep To Bottom' },
      { classname: 'hvr-sweep-to-top', name: 'Sweep To Top' },
      { classname: 'hvr-bounce-to-right', name: 'Bounce To Right' },
      { classname: 'hvr-bounce-to-left', name: 'Bounce To Left' },
      { classname: 'hvr-bounce-to-bottom', name: 'Bounce To Bottom' },
      { classname: 'hvr-bounce-to-top', name: 'Bounce To Top' },
      { classname: 'hvr-rectangle-out', name: 'Rectangle Out' },
      { classname: 'hvr-radial-out', name: 'Radial Out' },
      { classname: 'hvr-shutter-out-horizontal', name: 'Shutter Out Horizontal' },
      { classname: 'hvr-shutter-out-vertical', name: 'hvr-shutter-out-vertical' }
    ])
    const icons = ref([
      { classname: 'hvr-icon-back', name: 'Icon Back', iconname: 'arrow-circle-left' },
      { classname: 'hvr-icon-forward', name: 'Icon Forward', iconname: 'arrow-circle-right' },
      { classname: 'hvr-icon-down', name: 'Icon Down', iconname: 'arrow-circle-down' },
      { classname: 'hvr-icon-up', name: 'Icon Up', iconname: 'arrow-circle-up' },
      { classname: 'hvr-icon-spin', name: 'Icon Spin', iconname: 'setting' },
      { classname: 'hvr-icon-drop', name: 'Icon Drop', iconname: 'save' },
      { classname: 'hvr-icon-fade', name: 'Icon Fade', iconname: 'home' },
      { classname: 'hvr-icon-float-away', name: 'Icon Float Away', iconname: 'star' },
      { classname: 'hvr-icon-sink-away', name: 'Icon Sink Away', iconname: 'square-plus' },
      { classname: 'hvr-icon-wobble-vertical', name: 'Icon Wobble Vertical', iconname: 'chevron-arrow-up' },
      { classname: 'hvr-icon-grow', name: 'Icon Grow', iconname: 'file-invoice' },
      { classname: 'hvr-icon-shrink', name: 'Icon Shrink', iconname: 'lock-closed' },
      { classname: 'hvr-icon-pulse', name: 'Icon Pulse', iconname: 'square-tick' },
      { classname: 'hvr-icon-pulse-grow', name: 'Icon Pulse Grow', iconname: 'shield-check' },
      { classname: 'hvr-wobble-horizontal', name: 'Icon Wobble Horizontal', iconname: 'chevron-arrow-right' },
      { classname: 'hvr-icon-pulse-shrink', name: 'Icon Pulse Shrink', iconname: 'shield-check' },
      { classname: 'hvr-icon-push', name: 'Icon Push', iconname: 'users' },
      { classname: 'hvr-icon-pop', name: 'Icon Pop', iconname: 'badge' },
      { classname: 'hvr-icon-bounce', name: 'Icon Bounce', iconname: 'chevron-up' },
      { classname: 'hvr-icon-rotate', name: 'Icon Rotate', iconname: 'call' },
      { classname: 'hvr-icon-grow-rotate', name: ' Icon Grow Rotate', iconname: 'arrow-up' },
      { classname: 'hvr-icon-float', name: 'Icon Float', iconname: 'brief-case' },
      { classname: 'hvr-icon-sink', name: 'Icon Sink', iconname: 'chevron-arrow-right' },
      { classname: 'hvr-icon-bob', name: 'Icon Bob', iconname: 'bag' },
      { classname: 'hvr-icon-hang', name: 'Icon Hang', iconname: 'brief-case' },
      { classname: 'hvr-icon-buzz', name: 'Icon Buzz', iconname: 'circle-direction' },
      { classname: 'hvr-icon-buzz-out', name: 'Icon Buzz Out', iconname: 'eye' }
    ])
    const bordertransitions = ref([
      { classname: 'hvr-border-fade', name: 'Border Fade' },
      { classname: 'hvr-hollow', name: 'Hollow' },
      { classname: 'hvr-trim', name: 'Trim' },
      { classname: 'hvr-ripple-out', name: 'Ripple Out' },
      { classname: 'hvr-ripple-in', name: 'Ripple In' },
      { classname: 'hvr-outline-out', name: 'Outline Out' },
      { classname: 'hvr-outline-in', name: 'Outline In' },
      { classname: 'hvr-round-corners', name: 'Round Corners' },
      { classname: 'hvr-underline-from-left', name: 'Underline From Left' },
      { classname: 'hvr-underline-from-center', name: 'Underline From Center' },
      { classname: 'hvr-underline-from-right', name: 'Underline From Right' },
      { classname: 'hvr-reveal', name: 'Reveal' },
      { classname: 'hvr-underline-reveal', name: 'Underline Reveal' },
      { classname: 'hvr-overline-reveal', name: 'Overline Reveal' },
      { classname: 'hvr-overline-from-left', name: 'Overline From Left' },
      { classname: 'hvr-overline-from-center', name: 'Overline From Center' },
      { classname: 'hvr-overline-from-right', name: 'Overline From Right' }
    ])
    const growshadowtransitions = ref([
      { classname: 'hvr-shadow', name: 'Shadow' },
      { classname: 'hvr-grow-shadow', name: 'Grow Shadow' },
      { classname: 'hvr-float-shadow', name: 'Float Shadow' },
      { classname: 'hvr-glow', name: 'Glow' },
      { classname: 'hvr-shadow-radial', name: 'Shadow Radial' },
      { classname: 'hvr-box-shadow-outset', name: 'Box Shadow Outset' },
      { classname: 'hvr-box-shadow-inset', name: 'Box Shadow Inset' }
    ])
    const bubbles = ref([
      { classname: 'hvr-bubble-top', name: 'Bubble Top' },
      { classname: 'hvr-bubble-right', name: 'Bubble Right' },
      { classname: 'hvr-bubble-bottom', name: 'Bubble Bottom' },
      { classname: 'hvr-bubble-left', name: 'Bubble Left' },
      { classname: 'hvr-bubble-float-top', name: 'Bubble Float Top' },
      { classname: 'hvr-bubble-float-right', name: 'Bubble Float Right' },
      { classname: 'hvr-bubble-float-bottom', name: 'Bubble Float Bottom' },
      { classname: 'hvr-bubble-float-left', name: 'Bubble Float Left' }
    ])
    const curls = ref([
      { classname: 'hvr-curl-top-left', name: 'Curl Top Left' },
      { classname: 'hvr-curl-top-right', name: 'Curl Top Right' },
      { classname: 'hvr-curl-bottom-right', name: 'Curl Bottom Right' },
      { classname: 'hvr-curl-bottom-left', name: 'Curl Bottom Left' }
    ])
    return {
      transitions2Ds,
      backtransitions,
      icons,
      bordertransitions,
      growshadowtransitions,
      bubbles,
      curls
    }
  }
}
</script>
