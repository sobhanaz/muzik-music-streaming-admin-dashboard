# 🎵 Muzik - Advanced Music Streaming Admin Dashboard

<div align="center">

![Muzik Banner](https://via.placeholder.com/1200x400/8B5CF6/FFFFFF?text=MUZIK+MUSIC+STREAMING+ADMIN)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/sobhanaz/muzik-admin-dashboard)
[![Version](https://img.shields.io/badge/version-1.1.0-blue)](https://github.com/sobhanaz/muzik-admin-dashboard)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Vue 3](https://img.shields.io/badge/Vue-3.0+-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.2.3-7952B3?logo=bootstrap)](https://getbootstrap.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)](https://nodejs.org/)

**🚀 A modern, responsive admin dashboard template for music streaming platforms**

[✨ Live Demo](https://demo.muzik-admin.com) • [📖 Documentation](https://docs.muzik-admin.com) • [🐛 Report Bug](https://github.com/sobhanaz/muzik-admin-dashboard/issues) • [💡 Request Feature](https://github.com/sobhanaz/muzik-admin-dashboard/issues)

</div>

---

## 🌟 Overview

**Muzik** is a comprehensive, feature-rich admin dashboard template specifically designed for music streaming platforms, radio stations, and audio content management systems. Built with modern web technologies including **Vue 3**, **Bootstrap 5**, and **Vite**, it provides everything you need to manage artists, albums, playlists, users, and analytics in a beautiful, responsive interface.

### 🎯 Perfect For
- **Music Streaming Platforms** (Spotify-like services)
- **Radio Station Management** 
- **Podcast Platforms**
- **Audio Content Management Systems**
- **Music Label Administration**
- **Artist Portfolio Management**

---

## ✨ Key Features

### 🎵 Music Management
- **Artist Management** - Complete artist profiles with statistics
- **Album Organization** - Track albums, releases, and metadata
- **Song Database** - Comprehensive music library management
- **Playlist Management** - Create, edit, and organize playlists
- **Genre Classification** - Organize content by musical genres

### 📊 Analytics & Insights
- **Real-time Statistics** - Live user engagement metrics
- **Revenue Tracking** - Monitor earnings and subscription data
- **Listening Analytics** - Track plays, skips, and user behavior
- **Performance Reports** - Detailed artist and song performance
- **User Demographics** - Audience analysis and insights

### 👥 User Management
- **User Profiles** - Comprehensive user account management
- **Subscription Management** - Handle premium/free tier users
- **Admin Roles** - Multi-level administrative access
- **Activity Monitoring** - Track user engagement and actions

### 🎨 Modern Interface
- **Responsive Design** - Mobile-first approach with perfect mobile UX
- **Dark/Light Themes** - Multiple theme options with system preference detection
- **RTL Support** - Complete right-to-left language support
- **Customizable UI** - Extensive theming and branding options
- **Interactive Components** - Rich data visualizations and charts

### 🛠️ Developer Features
- **Vue 3 Composition API** - Modern reactive framework
- **TypeScript Support** - Type-safe development experience
- **Component Library** - Reusable, well-documented components
- **State Management** - Vuex for centralized state handling
- **Routing System** - Vue Router with navigation guards
- **Build Optimization** - Vite for lightning-fast development

---

## 🖥️ Demo & Screenshots

### Dashboard Overview
![Dashboard](https://via.placeholder.com/800x500/6366F1/FFFFFF?text=Dashboard+Overview)

### Music Player Interface
![Music Player](https://via.placeholder.com/800x500/8B5CF6/FFFFFF?text=Music+Player)

### Analytics Dashboard
![Analytics](https://via.placeholder.com/800x500/F59E0B/FFFFFF?text=Analytics+Dashboard)

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/sobhanaz/muzik-admin-dashboard.git
cd muzik-admin-dashboard

# Install dependencies for Vue version
cd muzik-main/vue
npm install

# Start development server
npm run dev

# Or for HTML version
cd ../html
# Open index.html in your browser or use a local server
```

### Development Commands

```bash
# Development server (with hot reload)
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

---

## 📁 Project Structure

```
muzik-admin-dashboard/
├── 📁 muzik-main/
│   ├── 📁 vue/                    # Vue 3 + Vite version
│   │   ├── 📁 src/
│   │   │   ├── 📁 assets/         # Static assets (images, styles)
│   │   │   ├── 📁 components/     # Reusable Vue components
│   │   │   │   ├── 📁 auth/       # Authentication components
│   │   │   │   ├── 📁 custom/     # Custom UI components
│   │   │   │   ├── 📁 partials/   # Layout partials (header, sidebar)
│   │   │   │   └── 📁 widgets/    # Dashboard widgets
│   │   │   ├── 📁 layouts/        # Page layouts
│   │   │   ├── 📁 views/          # Page components
│   │   │   │   ├── 📁 main-pages/ # Core dashboard pages
│   │   │   │   ├── 📁 admin/      # Admin-specific pages
│   │   │   │   ├── 📁 auth/       # Authentication pages
│   │   │   │   └── 📁 ui-elements/# UI component examples
│   │   │   ├── 📁 router/         # Vue Router configuration
│   │   │   ├── 📁 store/          # Vuex state management
│   │   │   ├── 📁 utilities/      # Helper functions
│   │   │   ├── 📁 plugins/        # Vue plugins
│   │   │   └── 📁 locales/        # Internationalization
│   │   ├── 📄 package.json
│   │   ├── 📄 vite.config.js
│   │   └── 📄 index.html
│   ├── 📁 html/                   # Static HTML version
│   │   ├── 📁 assets/             # CSS, JS, images
│   │   ├── 📁 dashboard/          # HTML pages
│   │   └── 📄 index.html
│   └── 📁 gulp+hbs/              # Gulp + Handlebars version
├── 📄 README.md
├── 📄 LICENSE
├── 📄 CHANGELOG.md
└── 📁 docs/                      # Documentation
```

---

## 🎨 Customization

### Theme Configuration

```javascript
// src/utilities/setting.js
export const themeConfig = {
  theme_scheme: 'light', // 'light' | 'dark' | 'auto'
  theme_scheme_direction: 'ltr', // 'ltr' | 'rtl'
  theme_color: 'theme-color-default',
  sidebar_color: 'sidebar-white',
  sidebar_type: ['sidebar-mini'],
  sidebar_menu_style: 'sidebar-default'
}
```

### Adding Custom Components

```vue
<!-- src/components/custom/MyMusicComponent.vue -->
<template>
  <div class="music-component">
    <h3>{{ title }}</h3>
    <audio-player :src="audioSrc" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import AudioPlayer from './AudioPlayer.vue'

const props = defineProps({
  title: String,
  audioSrc: String
})
</script>
```

### Custom Styling

```scss
// src/assets/scss/custom.scss
.music-component {
  background: var(--bs-primary-bg-subtle);
  border-radius: 12px;
  padding: 1.5rem;
  
  .audio-player {
    margin-top: 1rem;
  }
}
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Development
VITE_APP_NAME="Muzik Admin"
VITE_API_BASE_URL="https://api.muzik.com"
VITE_ENABLE_ANALYTICS=true

# Production
VITE_PRODUCTION_URL="https://admin.muzik.com"
```

### API Integration

```javascript
// src/services/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Music API endpoints
export const musicAPI = {
  getArtists: () => api.get('/artists'),
  getAlbums: () => api.get('/albums'),
  getSongs: () => api.get('/songs'),
  getPlaylists: () => api.get('/playlists')
}
```

---

## 📚 Documentation

### Core Components

| Component | Description | Location |
|-----------|-------------|----------|
| `SongPlayList` | Playlist display component | `src/components/custom/cards/` |
| `MusicPlayer` | Audio player interface | `src/views/main-pages/` |
| `HeaderComponent` | Main navigation header | `src/components/partials/` |
| `SidebarComponent` | Navigation sidebar | `src/components/partials/` |
| `DashboardPage` | Admin dashboard overview | `src/views/main-pages/admin/` |

### Routing System

```javascript
// src/router/index.js
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DefaultLayout,
    children: [
      {
        path: 'music-player',
        name: 'home.music-player',
        component: () => import('@/views/main-pages/MusicPlayer.vue')
      },
      {
        path: 'admin-dashboard',
        name: 'admin.dashboard',
        component: () => import('@/views/main-pages/admin/DashboardPage.vue')
      }
    ]
  }
]
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
    volume: 80
  },
  mutations: {
    SET_CURRENT_SONG(state, song) {
      state.currentSong = song
    },
    TOGGLE_PLAY(state) {
      state.isPlaying = !state.isPlaying
    }
  },
  actions: {
    playSong({ commit }, song) {
      commit('SET_CURRENT_SONG', song)
      commit('TOGGLE_PLAY')
    }
  }
}
```

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ≥ 88 |
| Firefox | ≥ 85 |
| Safari | ≥ 14 |
| Edge | ≥ 88 |

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style

- Use **ESLint** and **Prettier** for consistent code formatting
- Follow **Vue 3 Composition API** best practices
- Write meaningful commit messages
- Add tests for new features

---

## 🐛 Bug Reports & Feature Requests

Found a bug? Have an idea? We'd love to hear from you!

- **Bug Reports**: [Create an Issue](https://github.com/sobhanaz/muzik-admin-dashboard/issues/new?template=bug_report.md)
- **Feature Requests**: [Request a Feature](https://github.com/sobhanaz/muzik-admin-dashboard/issues/new?template=feature_request.md)
- **Security Issues**: Please email security@tecso.team

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Sobhan Azimzadeh (TECSO Digital Agency)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author & Support

<div align="center">

### 🎯 Built with ❤️ by [Sobhan Azimzadeh](https://github.com/sobhanaz)

**CEO & Technical Leader at [TECSO Digital Agency](https://tecso.team/)**

[![Portfolio](https://img.shields.io/badge/Portfolio-tecso.team-FF6B35?style=for-the-badge&logo=safari&logoColor=white)](https://tecso.team/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sobhan--azimzadeh-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sobhan-azimzadeh-b956aa234)
[![Telegram](https://img.shields.io/badge/Telegram-@sobhanazimzadeh-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/sobhanazimzadeh)
[![Email](https://img.shields.io/badge/Email-contact@tecso.team-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contact@tecso.team)

</div>

### 💼 Professional Services

- **🎯 Custom Development** - Tailored music platform solutions
- **🚀 Technical Consulting** - Architecture and scalability guidance  
- **🛠️ Integration Support** - API and third-party service integration
- **📈 Performance Optimization** - Speed and efficiency improvements
- **🎨 UI/UX Design** - Modern, user-friendly interface design

---

## 🌟 Acknowledgments

- **Vue.js Team** for the amazing framework
- **Bootstrap Team** for the responsive CSS framework
- **Vite Team** for the lightning-fast build tool
- **Open Source Community** for inspiration and contributions
- **Music Industry** for domain expertise and requirements

---

## 📊 Project Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/sobhanaz/muzik-admin-dashboard?style=social)
![GitHub forks](https://img.shields.io/github/forks/sobhanaz/muzik-admin-dashboard?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/sobhanaz/muzik-admin-dashboard?style=social)

![GitHub last commit](https://img.shields.io/github/last-commit/sobhanaz/muzik-admin-dashboard)
![GitHub issues](https://img.shields.io/github/issues/sobhanaz/muzik-admin-dashboard)
![GitHub pull requests](https://img.shields.io/github/issues-pr/sobhanaz/muzik-admin-dashboard)

</div>

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

**Made with 🎵 for the music community**

</div>