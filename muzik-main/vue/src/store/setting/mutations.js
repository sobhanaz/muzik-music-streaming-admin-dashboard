import { defaultState } from './state'
import { updateBodyClass, updateHtmlClass, updateHtmlAttr, updateTitle, updateColorRootVar, updateStorage, updateDomValueBySetting, getStorage } from '../../utilities/setting'
import _ from 'lodash'

const DefaultSetting = defaultState.setting

const Choices = {
  SchemeChoice: DefaultSetting.theme_scheme.choices,
  ColorChoice: DefaultSetting.theme_color.choices,
  FSChoice: DefaultSetting.theme_font_size.choices
}

const createSettingObj = (state) => {
  return {
    saveLocal: state.saveLocal,
    storeKey: state.storeKey,
    setting: _.cloneDeep(state.setting)
  }
}

export default {
  setSetting: (state) => {
    const json = getStorage(state.storeKey)
    if (json === 'none') state.saveLocal = 'none'
    if (json !== null && json !== 'none') {
      state.saveLocal = json.saveLocal
      state.setting = json.setting
    }
    updateDomValueBySetting(_.cloneDeep(state.setting), Choices)
    updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
  },
  reset_state: (state) => {
    state.setting = defaultState.setting
    updateDomValueBySetting(state.setting, Choices)
    updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
  },
  app_name: (state, payload) => {
    if (typeof payload !== typeof undefined) {
      state.setting.app_name.value = payload
    }
    updateTitle(state.setting.app_name.value)
    updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
  },
  theme_scheme_direction: (state, payload) => {
    if (typeof payload !== typeof undefined) {
      state.setting.theme_scheme_direction.value = payload
    }
    updateHtmlAttr({ prop: 'dir', value: state.setting.theme_scheme_direction.value })
    updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
  },
  theme_scheme: (state, payload) => {
    if (typeof payload !== typeof undefined) {
      state.setting.theme_scheme.value = payload
    }
    updateBodyClass(Choices.SchemeChoice, state.setting.theme_scheme.value)
    updateColorRootVar(state.setting.theme_scheme.value, state.setting.theme_color, Choices.ColorChoice)
    updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
  },
  theme_color: (state, payload) => {
    if (typeof payload !== typeof undefined) {
      _.forEach(payload.colors, (value, key) => {
        state.setting.theme_color.colors[key] = value
      })
      state.setting.theme_color.value = payload.value
    }
    updateColorRootVar(state.setting.theme_scheme.value, state.setting.theme_color, Choices.ColorChoice)
    updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
  },
  theme_font_size: (state, payload) => {
    if (typeof payload !== typeof undefined) {
      state.setting.theme_font_size.value = payload
    }
    updateHtmlClass(Choices.FSChoice, state.setting.theme_font_size.value)
    updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
  },
  page_layout: (state, payload) => {
    state.setting.page_layout.value = payload
    updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
  },
  sidebar_color: (state, payload) => {
    state.setting.sidebar_color.value = payload
    updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
  },
  sidebar_type: (state, payload) => {
    state.setting.sidebar_type.value = payload
    updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
  },
  sidebar_menu_style: (state, payload) => {
    state.setting.sidebar_menu_style.value = payload
    updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
  }
}
