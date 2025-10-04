# 🎵 Muzik Admin Dashboard - Vue 3 Version

<div align="center">

![Vue 3](https://img.shields.io/badge/Vue-3.0+-4FC08D?logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-4.0+-646CFF?logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.2.3-7952B3?logo=bootstrap)
![License](https://img.shields.io/badge/license-MIT-green)

**Modern Vue 3 + Composition API implementation of Muzik Admin Dashboard**

</div>

## ✨ Features

### 🎵 Music Platform Features
- **Music Player Interface** with full playback controls
- **Artist Management** system with comprehensive profiles
- **Album & Song Library** with advanced organization
- **Playlist Management** with drag-and-drop functionality
- **Real-time Analytics** dashboard with interactive charts
- **User Management** with role-based permissions

### 🛠️ Technical Features
- **Vue 3 Composition API** for modern reactive programming
- **Vite** for lightning-fast development and builds
- **TypeScript Support** for type-safe development
- **Vuex 4** for centralized state management
- **Vue Router 4** with navigation guards
- **Bootstrap 5** with custom SCSS theming
- **ESLint + Prettier** for code quality
- **Dark/Light Theme** with system preference detection
- **RTL Support** for international markets
- **Responsive Design** optimized for all devices

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18.0.0 or higher
- **npm** v8.0.0 or higher (or **yarn** v1.22.0+)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Development Commands

```bash
# Development with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 📁 Project Structure

```
src/
├── assets/           # Static assets and styles
│   ├── images/       # Image files
│   ├── scss/         # SCSS stylesheets
│   └── vendor/       # Third-party assets
├── components/       # Vue components
│   ├── auth/         # Authentication components
│   ├── custom/       # Custom UI components
│   ├── partials/     # Layout partials (header, sidebar)
│   └── widgets/      # Dashboard widgets
├── layouts/          # Page layouts
│   ├── DefaultLayout.vue
│   └── guest/        # Guest layouts
├── views/            # Page components
│   ├── main-pages/   # Core pages (dashboard, music player)
│   ├── admin/        # Admin-specific pages
│   ├── auth/         # Authentication pages
│   └── ui-elements/  # UI component examples
├── router/           # Vue Router configuration
├── store/            # Vuex store modules
├── utilities/        # Helper functions
├── plugins/          # Vue plugins
├── locales/          # i18n translations
└── hooks/            # Composition API hooks
```

## 🎨 Key Components

### Music Components
- **`MusicPlayer.vue`** - Full-featured audio player
- **`SongPlayList.vue`** - Playlist display component
- **`SongList.vue`** - Song list with controls
- **`TopSongList.vue`** - Top songs with statistics

### Layout Components
- **`HeaderComponent.vue`** - Main navigation header
- **`SidebarComponent.vue`** - Collapsible sidebar navigation
- **`FooterComponent.vue`** - Site footer

### Admin Components
- **`DashboardPage.vue`** - Admin analytics dashboard
- **`UserList.vue`** - User management interface
- **`ReviewList.vue`** - Review management system

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
# Application
VITE_APP_NAME="Muzik Admin"
VITE_APP_VERSION="1.1.0"

# API Configuration
VITE_API_BASE_URL="https://api.your-music-platform.com"
VITE_API_TIMEOUT=10000

# Features
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DARK_MODE=true
VITE_ENABLE_RTL=true
```

### Theme Customization

Edit `src/utilities/setting.js`:

```javascript
export const themeConfig = {
  theme_scheme: 'light',              // 'light' | 'dark' | 'auto'
  theme_scheme_direction: 'ltr',      // 'ltr' | 'rtl'
  theme_color: 'theme-color-default', // Primary color theme
  sidebar_color: 'sidebar-white',     // Sidebar theme
  sidebar_type: ['sidebar-mini'],     // Sidebar options
  sidebar_menu_style: 'sidebar-default'
}
```

### Custom SCSS Variables

Edit `src/assets/scss/custom.scss`:

```scss
// Brand Colors
:root {
  --bs-primary: #8B5CF6;      // Purple
  --bs-secondary: #64748B;    // Gray
  --bs-success: #10B981;      // Green
  --bs-danger: #EF4444;       // Red
  --bs-warning: #F59E0B;      // Yellow
  --bs-info: #3B82F6;         // Blue
}
```

## 🎵 Music API Integration

### API Service Setup

```javascript
// src/services/musicAPI.js
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
})

export const musicAPI = {
  // Artists
  getArtists: () => api.get('/artists'),
  createArtist: (data) => api.post('/artists', data),
  updateArtist: (id, data) => api.put(`/artists/${id}`, data),
  
  // Albums
  getAlbums: () => api.get('/albums'),
  getAlbumsByArtist: (artistId) => api.get(`/albums?artist=${artistId}`),
  
  // Songs
  getSongs: () => api.get('/songs'),
  uploadSong: (formData) => api.post('/songs', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  
  // Playlists
  getPlaylists: () => api.get('/playlists'),
  createPlaylist: (data) => api.post('/playlists', data)
}
```

### State Management

```javascript
// src/store/modules/music.js
export default {
  namespaced: true,
  state: {
    currentSong: null,
    playlist: [],
    isPlaying: false,
    volume: 80,
    currentTime: 0,
    duration: 0
  },
  mutations: {
    SET_CURRENT_SONG(state, song) {
      state.currentSong = song
    },
    TOGGLE_PLAY(state) {
      state.isPlaying = !state.isPlaying
    },
    SET_VOLUME(state, volume) {
      state.volume = volume
    }
  },
  actions: {
    async playSong({ commit }, song) {
      commit('SET_CURRENT_SONG', song)
      commit('TOGGLE_PLAY')
    },
    async loadPlaylist({ commit }, playlistId) {
      const playlist = await musicAPI.getPlaylist(playlistId)
      commit('SET_PLAYLIST', playlist)
    }
  }
}
```

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:

- **Mobile**: 0px - 575px
- **Tablet**: 576px - 991px
- **Desktop**: 992px - 1199px
- **Large Desktop**: 1200px+

### Mobile-First Components

```vue
<template>
  <div class="music-player">
    <!-- Mobile layout -->
    <div class="d-block d-md-none">
      <MobilePlayerControls />
    </div>
    
    <!-- Desktop layout -->
    <div class="d-none d-md-block">
      <DesktopPlayerControls />
    </div>
  </div>
</template>
```

## 🧪 Testing

### Component Testing

```javascript
// tests/components/MusicPlayer.test.js
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import MusicPlayer from '@/views/main-pages/MusicPlayer.vue'

describe('MusicPlayer', () => {
  let store
  
  beforeEach(() => {
    store = createStore({
      modules: {
        music: {
          namespaced: true,
          state: {
            currentSong: null,
            isPlaying: false
          }
        }
      }
    })
  })
  
  it('should render music player interface', () => {
    const wrapper = mount(MusicPlayer, {
      global: {
        plugins: [store]
      }
    })
    
    expect(wrapper.find('.music-player').exists()).toBe(true)
  })
})
```

## 🚀 Deployment

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Static Hosting (Netlify, Vercel)

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🎯 Performance Optimization

### Code Splitting

```javascript
// Lazy load routes
const routes = [
  {
    path: '/music-player',
    component: () => import('@/views/main-pages/MusicPlayer.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/admin/DashboardPage.vue')
  }
]
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run build -- --analyze

# Generate bundle report
npx vite-bundle-analyzer dist
```

## 🌐 Browser Support

| Browser | Version |
|---------|--------|
| Chrome  | ≥ 88   |
| Firefox | ≥ 85   |
| Safari  | ≥ 14   |
| Edge    | ≥ 88   |

## 📚 Learning Resources

### Vue 3 Resources
- [Vue 3 Documentation](https://vuejs.org/)
- [Composition API Guide](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)

### Music Industry Integration
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Media Session API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API)
- [Music Metadata Standards](https://musicbrainz.org/doc/MusicBrainz_Database)

## 🤝 Contributing

See the main [Contributing Guide](../../CONTRIBUTING.md) for detailed information.

### Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/your-username/muzik-admin-dashboard.git
cd muzik-admin-dashboard/muzik-main/vue

# Install dependencies
npm install

# Create feature branch
git checkout -b feature/amazing-feature

# Start development
npm run dev
```

## 📞 Support

- **Documentation**: [Main Docs](../../docs/)
- **Issues**: [GitHub Issues](https://github.com/sobhanaz/muzik-admin-dashboard/issues)
- **Email**: contact@tecso.team
- **Telegram**: @sobhanazimzadeh

---

**Built with ❤️ using Vue 3 + Composition API**

*Part of the Muzik Admin Dashboard project by [Sobhan Azimzadeh](https://github.com/sobhanaz)*
