// Initial Setting State
export const initialState = {
  saveLocal: 'sessionStorage',
  storeKey: 'muziksetting-vue',
  setting: {
    app_name: {
      value: 'Muzik'
    },
    theme_scheme_direction: {
      value: 'ltr'
    },
    theme_scheme: {
      value: 'light'
    },
    theme_color: {
      colors: {
        '--{{prefix}}primary': '#ff4545',
        '--{{prefix}}secondary': '#aca4bc',
        '--{{prefix}}tertiray': '#8545DC',
        '--{{prefix}}success': '#1B8142',
        '--{{prefix}}danger': '#DB2F63',
        '--{{prefix}}warning': '#FD9C02',
        '--{{prefix}}info': '#405EDA'
      },
      value: 'theme-color-default'
    },
    theme_font_size: {
      value: 'theme-fs-md'
    },
    page_layout: {
      value: 'container-fluid'
    },
    sidebar_color: {
      value: 'sidebar-white'
    },
    sidebar_type: {
      value: []
    },
    sidebar_menu_style: {
      value: 'sidebar-default'
    }
  }
}

// Default Setting State
export const defaultState = {
  saveLocal: 'sessionStorage',
  storeKey: 'muziksetting-vue',
  setting: {
    app_name: {
      target: '[data-setting="app_name"]',
      choices: [],
      type: 'text',
      value: 'Muzik'
    },
    theme_scheme_direction: {
      target: 'html',
      choices: ['ltr', 'rtl'],
      type: 'layout_design',
      value: 'ltr'
    },
    theme_scheme: {
      target: 'body',
      choices: ['light', 'dark', 'auto'],
      type: 'layout_design',
      value: 'light'
    },
    theme_color: {
      target: 'body',
      choices: ['theme-color-blue', 'theme-color-gray', 'theme-color-red', 'theme-color-yellow', 'theme-color-pink', 'theme-color-default'],
      type: 'default',
      colors: {
        '--{{prefix}}primary': '#7016d0',
        '--{{prefix}}secondary': '#aca4bc',
        '--{{prefix}}tertiray': '#3FF0B9',
        '--{{prefix}}success': '#1AA053',
        '--{{prefix}}danger': '#C03221',
        '--{{prefix}}warning': '#F16A1B'
      },
      value: 'theme-color-default'
    },
    theme_font_size: {
      target: 'html',
      choices: ['theme-fs-sm', 'theme-fs-md', 'theme-fs-lg'],
      type: 'layout_design',
      value: 'theme-fs-sm'
    },
    page_layout: {
      target: '#page_layout',
      choices: ['container', 'container-fluid'],
      type: 'layout_design',
      value: 'container-fluid'
    },
    sidebar_color: {
      target: '[data-toggle="main-sidebar"]',
      choices: ['sidebar-white', 'sidebar-dark', 'sidebar-color'],
      type: 'layout_design',
      value: 'sidebar-white'
    },
    sidebar_type: {
      target: '[data-toggle="main-sidebar"]',
      choices: ['sidebar-hover', 'sidebar-mini', 'sidebar-soft'],
      type: 'layout_design',
      value: []
    },
    sidebar_menu_style: {
      target: '[data-toggle="main-sidebar"]',
      choices: ['sidebar-default navs-rounded', 'sidebar-default navs-rounded-all', 'sidebar-default navs-pill', 'sidebar-default navs-pill-all'],
      type: 'layout_design',
      value: 'sidebar-default navs-rounded-all'
    }
  }
}
