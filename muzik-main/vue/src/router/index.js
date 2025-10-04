import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'

// Auth Default Routes
const authChildRoutes = (prefix) => [
  {
    path: 'login',
    name: prefix + '.login',
    meta: { auth: false, name: 'Login' },
    component: () => import('@/views/auth/default/SignIn.vue')
  },
  {
    path: 'register',
    name: prefix + '.register',
    meta: { auth: false, name: 'Register' },
    component: () => import('@/views/auth/default/SignUp.vue')
  },
  {
    path: 'reset-password',
    name: prefix + '.reset-password',
    meta: { auth: false, name: 'Reset Password' },
    component: () => import('@/views/auth/default/ResetPassword.vue')
  },
  {
    path: 'varify-email',
    name: prefix + '.varify-email',
    meta: { auth: false, name: 'Varify Email' },
    component: () => import('@/views/auth/default/VarifyEmail.vue')
  },
  {
    path: 'two-factor',
    name: prefix + '.two-factor',
    meta: { auth: false, name: 'TwoFactor' },
    component: () => import('@/views/auth/default/TwoFactor.vue')
  },
  {
    path: 'account-deactivated',
    name: prefix + '.account-deactivated',
    meta: { auth: false, name: 'AccountDeactivated' },
    component: () => import('@/views/auth/default/AccountDeactivated.vue')
  },
  {
    path: 'lock-screen',
    name: prefix + '.lock-screen',
    meta: { auth: false, name: 'Lock Screen' },
    component: () => import('@/views/auth/default/LockScreen.vue')
  }
]
// Default routes
const defaultChildRoutes = (prefix) => [
  {
    path: '',
    name: 'home.dashboard',
    meta: { auth: true, name: 'Home', isBanner: false },
    component: () => import('@/views/main-pages/IndexPage.vue')
  },
  {
    path: 'music-player',
    name: 'home.music-player',
    meta: { auth: true, name: 'MusicPlayer', isBanner: false },
    component: () => import('@/views/main-pages/MusicPlayer.vue')
  },
  {
    path: 'release',
    name: 'home.release',
    meta: { auth: true, name: 'Release', isBanner: false },
    component: () => import('@/views/main-pages/ReleasePage.vue')
  },
  {
    path: 'albums',
    name: 'home.albums',
    meta: { auth: true, name: 'Albums', isBanner: false },
    component: () => import('@/views/main-pages/AlbumsPage.vue')
  },
  {
    path: 'admin-dashboard',
    name: 'admin.dashboard',
    meta: { auth: true, name: 'Admin Dashboard', isBanner: false },
    component: () => import('@/views/main-pages/admin/DashboardPage.vue')
  },
  {
    path: 'admin-category',
    name: 'admin.category',
    meta: { auth: true, name: 'Admin Category', isBanner: false },
    component: () => import('@/views/main-pages/admin/CategoryPage.vue')
  },
  {
    path: 'admin-muzic',
    name: 'admin.muzic',
    meta: { auth: true, name: 'Admin Muzic', isBanner: false },
    component: () => import('@/views/main-pages/admin/MuzicPage.vue')
  },
  {
    path: 'admin-singer',
    name: 'admin.singer',
    meta: { auth: true, name: 'Admin Singer', isBanner: false },
    component: () => import('@/views/main-pages/admin/SingerPage.vue')
  },
  {
    path: 'admin-writer',
    name: 'admin.writer',
    meta: { auth: true, name: 'Admin Writer', isBanner: false },
    component: () => import('@/views/main-pages/admin/WriterPage.vue')
  },
  {
    path: '/blank-page',
    name: prefix + '.blank-page',
    meta: { auth: true, name: 'Blank Page', isBanner: true },
    component: () => import('@/views/BlankPage.vue')
  },
  {
    path: '/alerts',
    name: 'ui-elements.alerts',
    meta: { auth: true, name: 'Alerts', isBanner: true },
    component: () => import('@/views/ui-elements/AlertsView.vue')
  },
  {
    path: '/avatars',
    name: 'ui-elements.avatars',
    meta: { auth: true, name: 'Avatars', isBanner: true },
    component: () => import('@/views/ui-elements/AvatarsView.vue')
  },
  {
    path: '/badge',
    name: 'ui-elements.badge',
    meta: { auth: true, name: 'Badge', isBanner: true },
    component: () => import('@/views/ui-elements/BadgeView.vue')
  },
  {
    path: '/breadcrumb',
    name: 'ui-elements.breadcrumb',
    meta: { auth: true, name: 'BreadCrumb', isBanner: true },
    component: () => import('@/views/ui-elements/BreadCrumb.vue')
  },
  {
    path: '/buttons',
    name: 'ui-elements.buttons',
    meta: { auth: true, name: 'Buttons', isBanner: true },
    component: () => import('@/views/ui-elements/ButtonsView.vue')
  },
  {
    path: '/buttonsgroup',
    name: 'ui-elements.buttonsgroup',
    meta: { auth: true, name: 'ButtonsGroup', isBanner: true },
    component: () => import('@/views/ui-elements/ButtonsGroup.vue')
  },
  {
    path: '/offcanvas',
    name: 'ui-elements.offcanvas',
    meta: { auth: true, name: 'OffCanvas', isBanner: true },
    component: () => import('@/views/ui-elements/OffCanvas.vue')
  },
  {
    path: '/colors',
    name: 'ui-elements.colors',
    meta: { auth: true, name: 'Colors', isBanner: true },
    component: () => import('@/views/ui-elements/ColorsView.vue')
  },
  {
    path: '/cards',
    name: 'ui-elements.cards',
    meta: { auth: true, name: 'Cards', isBanner: true },
    component: () => import('@/views/ui-elements/CardsView.vue')
  },
  {
    path: '/carousel',
    name: 'ui-elements.carousel',
    meta: { auth: true, name: 'Carousel', isBanner: true },
    component: () => import('@/views/ui-elements/CarouselView.vue')
  },
  {
    path: '/grid',
    name: 'ui-elements.grid',
    meta: { auth: true, name: 'Grid', isBanner: true },
    component: () => import('@/views/ui-elements/GridView.vue')
  },
  {
    path: '/images',
    name: 'ui-elements.images',
    meta: { auth: true, name: 'Images', isBanner: true },
    component: () => import('@/views/ui-elements/ImagesView.vue')
  },
  {
    path: '/listgroup',
    name: 'ui-elements.listgroup',
    meta: { auth: true, name: 'ListGroup', isBanner: true },
    component: () => import('@/views/ui-elements/ListGroup.vue')
  },
  {
    path: '/modal',
    name: 'ui-elements.modal',
    meta: { auth: true, name: 'Modal', isBanner: true },
    component: () => import('@/views/ui-elements/ModalView.vue')
  },
  {
    path: '/notifications',
    name: 'ui-elements.notifications',
    meta: { auth: true, name: 'Notifications', isBanner: true },
    component: () => import('@/views/ui-elements/NotificationsView.vue')
  },
  {
    path: '/pagination',
    name: 'ui-elements.pagination',
    meta: { auth: true, name: 'Pagination', isBanner: true },
    component: () => import('@/views/ui-elements/PaginationView.vue')
  },
  {
    path: '/popovers',
    name: 'ui-elements.popovers',
    meta: { auth: true, name: 'Popovers', isBanner: true },
    component: () => import('@/views/ui-elements/PopoversView.vue')
  },
  {
    path: '/typography',
    name: 'ui-elements.typography',
    meta: { auth: true, name: 'Typography', isBanner: true },
    component: () => import('@/views/ui-elements/TypographyView.vue')
  },
  {
    path: '/tooltips',
    name: 'ui-elements.tooltips',
    meta: { auth: true, name: 'Tooltips', isBanner: true },
    component: () => import('@/views/ui-elements/TooltipsView.vue')
  },
  {
    path: '/tabs',
    name: 'ui-elements.tabs',
    meta: { auth: true, name: 'Tabs', isBanner: true },
    component: () => import('@/views/ui-elements/TabsView.vue')
  },
  {
    path: '/video',
    name: 'ui-elements.video',
    meta: { auth: true, name: 'Video', isBanner: true },
    component: () => import('@/views/ui-elements/VideoView.vue')
  },

  // Spacial Pages
  {
    path: '/billing',
    name: 'special-pages.billing',
    meta: { auth: true, name: 'Billing', isBanner: true },
    component: () => import('@/views/spacial-pages/BillingPage.vue')
  },
  {
    path: '/calender',
    name: 'special-pages.calender',
    meta: { auth: true, name: 'Calender', isBanner: true },
    component: () => import('@/views/spacial-pages/CalenderPage.vue')
  },
  {
    path: '/kanban',
    name: 'special-pages.kanban',
    meta: { auth: true, name: 'Kanban', isBanner: true },
    component: () => import('@/views/spacial-pages/KanbanPage.vue')
  },
  {
    path: '/pricing',
    name: 'special-pages.pricing',
    meta: { auth: true, name: 'Pricing', isBanner: true },
    component: () => import('@/views/spacial-pages/PricingPage.vue')
  },
  {
    path: '/timeline',
    name: 'special-pages.timeline',
    meta: { auth: true, name: 'Timeline', isBanner: true },
    component: () => import('@/views/spacial-pages/TimelinePage.vue')
  },
  // Users Pages
  {
    path: '/user-list',
    name: 'user.user-list',
    meta: { auth: true, name: 'User List', isBanner: true },
    component: () => import('@/views/user/ListPage.vue')
  },
  {
    path: '/user-add',
    name: 'user.user-add',
    meta: { auth: true, name: 'User Add', isBanner: true },
    component: () => import('@/views/user/AddPage.vue')
  },
  {
    path: '/user-profile',
    name: 'user.user-profile',
    meta: { auth: true, name: 'User Add', isBanner: true },
    component: () => import('@/views/user/ProfilePage.vue')
  },
  {
    path: '/privacy-setting',
    name: 'user.user-privacy-setting',
    meta: { auth: true, name: 'Privacy Setting', isBanner: true },
    component: () => import('@/views/user/PrivacySetting.vue')
  },

  // Widgets Pages
  {
    path: '/widget-basic',
    name: 'widget.widget-basic',
    meta: { auth: true, name: 'Widget Basic', isBanner: true },
    component: () => import('@/views/widgets/WidgetBasic.vue')
  },
  {
    path: '/widget-chart',
    name: 'widget.widget-chart',
    meta: { auth: true, name: 'Widget Chart', isBanner: true },
    component: () => import('@/views/widgets/WidgetChart.vue')
  },
  {
    path: '/widget-card',
    name: 'widget.widget-card',
    meta: { auth: true, name: 'Widget Card', isBanner: true },
    component: () => import('@/views/widgets/WidgetCard.vue')
  },
  // Map Pages
  {
    path: '/map-google',
    name: 'maps.map-google',
    meta: { auth: true, name: 'Google Map', isBanner: true },
    component: () => import('@/views/maps/GooglePage.vue')
  },
  // Form Pages
  {
    path: '/elements',
    name: 'form.elements',
    meta: { auth: true, name: 'Elements', isBanner: true },
    component: () => import('@/views/forms/ElementsPage.vue')
  },
  {
    path: '/validation',
    name: 'form.validation',
    meta: { auth: true, name: 'Validation', isBanner: true },
    component: () => import('@/views/forms/ValidationPage.vue')
  },
  {
    path: '/wizard',
    name: 'form.wizard',
    meta: { auth: true, name: 'Wizard', isBanner: true },
    component: () => import('@/views/forms/WizardPage.vue')
  },
  // Table Pages
  {
    path: '/bootstrap-table',
    name: 'table.bootstrap-table',
    meta: { auth: true, name: 'Botstrap Table', isBanner: true },
    component: () => import('@/views/tables/BootstrapTable.vue')
  },
  {
    path: '/border-table',
    name: 'table.border-table',
    meta: { auth: true, name: 'Border Table', isBanner: true },
    component: () => import('@/views/tables/BorderTable.vue')
  },
  {
    path: '/fancy-table',
    name: 'table.fancy-table',
    meta: { auth: true, name: 'Fancy Table', isBanner: true },
    component: () => import('@/views/tables/FancyTable.vue')
  },
  {
    path: '/fixed-table',
    name: 'table.fixed-table',
    meta: { auth: true, name: 'FixedTable Table', isBanner: true },
    component: () => import('@/views/tables/FixedTable.vue')
  },
  // Icons Pages
  {
    path: '/icons/solid',
    name: 'icons.solid',
    meta: { auth: true, name: 'Solid Icon', isBanner: true },
    component: () => import('@/views/icons/SolidIcon.vue')
  },
  {
    path: '/icons/outlined',
    name: 'icons.outlined',
    meta: { auth: true, name: 'Outlined Icon', isBanner: true },
    component: () => import('@/views/icons/OutlinedIcon.vue')
  },
  {
    path: '/icons/dual-tone',
    name: 'icons.dual-tone',
    meta: { auth: true, name: 'Dual Tone Icon', isBanner: true },
    component: () => import('@/views/icons/DualToneIcon.vue')
  },
  {
    path: '/ui-color',
    name: prefix + '.ui-color',
    meta: { auth: true, name: 'UI Color', isBanner: true },
    component: () => import('@/views/extra/UiColorPage.vue')
  },
  {
    path: '/privacy-policy',
    name: prefix + '.privacy-policy',
    meta: { auth: true, name: 'Privacy Policy', isBanner: true },
    component: () => import('@/views/extra/PrivacyPolicy.vue')
  },
  {
    path: '/terms-and-conditions',
    name: prefix + '.terms-and-conditions',
    meta: { auth: true, name: 'Terms and Conditions', isBanner: true },
    component: () => import('@/views/extra/TermsAndConditions.vue')
  }
]

// Plugins Routes
const pluginsChildRoutes = (prefix) => [
  {
    path: 'apexcharts',
    name: prefix + '.apexcharts',
    meta: { auth: true, name: 'Apexcharts', isBanner: true },
    component: () => import('@/views/plugins/ApexchartPage.vue')
  },
  {
    path: 'button-hover',
    name: prefix + '.button-hover',
    meta: { auth: true, name: 'Button Hover', isBanner: true },
    component: () => import('@/views/plugins/ButtonHoverPage.vue')
  },
  {
    path: 'flatpicker',
    name: prefix + '.flatpicker',
    meta: { auth: true, name: 'Flatpicker', isBanner: true },
    component: () => import('@/views/plugins/FlatpickerPage.vue')
  },
  {
    path: 'fslightbox',
    name: prefix + '.fslightbox',
    meta: { auth: true, name: 'Fslightbox', isBanner: true },
    component: () => import('@/views/plugins/FsLightBoxPage.vue')
  },
  {
    path: 'gallery-hover',
    name: prefix + '.gallery-hover',
    meta: { auth: true, name: 'Gallery Hover', isBanner: true },
    component: () => import('@/views/plugins/GalleryHover.vue')
  },
  {
    path: 'image-cropper',
    name: prefix + '.image-cropper',
    meta: { auth: true, name: 'Image Cropper', isBanner: true },
    component: () => import('@/views/plugins/ImageCropper.vue')
  },
  {
    path: 'loader',
    name: prefix + '.loader',
    meta: { auth: true, name: 'Loader', isBanner: true },
    component: () => import('@/views/plugins/LoaderPage.vue')
  },
  {
    path: 'multi-select',
    name: prefix + '.multi-select',
    meta: { auth: true, name: 'Multi Select', isBanner: true },
    component: () => import('@/views/plugins/MultiSelectPage.vue')
  },
  {
    path: 'quill',
    name: prefix + '.quill',
    meta: { auth: true, name: 'Quill', isBanner: true },
    component: () => import('@/views/plugins/QuillPage.vue')
  },
  {
    path: 'sweetalert',
    name: prefix + '.sweetalert',
    meta: { auth: true, name: 'Sweetalert', isBanner: true },
    component: () => import('@/views/plugins/SweetAlertPage.vue')
  },
  {
    path: 'tour',
    name: prefix + '.tour',
    meta: { auth: true, name: 'Tour', isBanner: true },
    component: () => import('@/views/plugins/TourPage.vue')
  },
  {
    path: 'uppy',
    name: prefix + '.uppy',
    meta: { auth: true, name: 'Uppy', isBanner: true },
    component: () => import('@/views/plugins/UppyPage.vue')
  }
]

const errorRoutes = (prefix) => [
  // Error Pages
  {
    path: '404',
    name: prefix + '.404',
    meta: { auth: true, name: 'Error 404', isBanner: true },
    component: () => import('@/views/errors/Error404Page.vue')
  },
  {
    path: '500',
    name: prefix + '.500',
    meta: { auth: true, name: 'Error 500', isBanner: true },
    component: () => import('@/views/errors/Error500Page.vue')
  },
  {
    path: 'maintenance',
    name: prefix + '.maintenance',
    meta: { auth: true, name: 'Maintenance', isBanner: true },
    component: () => import('@/views/errors/MaintenancePage.vue')
  }
]

const routes = [
  // Default Pages
  {
    path: '/',
    name: 'dashboard',
    component: DefaultLayout,
    children: defaultChildRoutes('default')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../layouts/guest/BlankLayout.vue'),
    children: authChildRoutes('auth')
  },
  // Plugins
  {
    path: '/plugins',
    name: 'plugins',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: pluginsChildRoutes('plugins')
  },
  // Errors Pages
  {
    path: '/errors',
    name: 'errors',
    component: () => import('../layouts/guest/BlankLayout.vue'),
    children: errorRoutes('errors')
  }
]

const Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default Router
