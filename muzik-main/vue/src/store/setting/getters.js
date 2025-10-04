// Getters
export default {
  saveLocal: (state) => state.saveLocal,
  theme_scheme: (state) => state.setting.theme_scheme.value,
  theme_scheme_direction: (state) => state.setting.theme_scheme_direction.value,
  theme_style_appearance: (state) => state.setting.theme_style_appearance.value,
  theme_color: (state) => state.setting.theme_color,
  theme_transition: (state) => state.setting.theme_transition.value,
  theme_font_size: (state) => state.setting.theme_font_size.value,
  page_layout: (state) => state.setting.page_layout.value,
  sidebar_color: (state) => state.setting.sidebar_color.value,
  sidebar_type: (state) => state.setting.sidebar_type.value,
  sidebar_menu_style: (state) => state.setting.sidebar_menu_style.value,
  settingObj: (state) => state
}
