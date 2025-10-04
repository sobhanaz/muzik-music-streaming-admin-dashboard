# 🚀 Quick Start Guide - Muzik Admin Dashboard

This guide will get you up and running with Muzik Admin Dashboard in under 10 minutes.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v8.0.0 or higher) or **yarn** (v1.22.0+)
- **Git** for version control - [Download here](https://git-scm.com/)

### System Requirements
- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: 2GB free space
- **Browser**: Chrome 88+, Firefox 85+, Safari 14+, or Edge 88+

### Verify Installation
```bash
# Check Node.js version
node --version  # Should show v18.0.0 or higher

# Check npm version
npm --version   # Should show v8.0.0 or higher

# Check Git
git --version   # Should show Git version
```

## 📥 Installation

### Method 1: Clone from GitHub (Recommended)

```bash
# 1. Clone the repository
git clone https://github.com/sobhanaz/muzik-admin-dashboard.git

# 2. Navigate to project directory
cd muzik-admin-dashboard

# 3. Choose your preferred version
cd muzik-main/vue  # For Vue 3 + Vite (recommended)
# OR
cd muzik-main/html # For static HTML version
```

### Method 2: Download ZIP

1. Go to [GitHub Repository](https://github.com/sobhanaz/muzik-admin-dashboard)
2. Click "Code" → "Download ZIP"
3. Extract the ZIP file
4. Navigate to `muzik-main/vue` folder

## 🛠️ Setup Development Environment

### Vue 3 + Vite Setup (Recommended)

```bash
# 1. Navigate to Vue directory
cd muzik-main/vue

# 2. Install dependencies
npm install
# OR with yarn
yarn install

# 3. Start development server
npm run dev
# OR with yarn
yarn dev

# 4. Open browser and navigate to:
# http://localhost:3000
```

### HTML Version Setup (Simple)

```bash
# 1. Navigate to HTML directory
cd muzik-main/html

# 2. Open with a local server (choose one):

# Option A: Using Python
python -m http.server 8000

# Option B: Using Node.js (if you have http-server installed)
npx http-server -p 8000

# Option C: Using VS Code Live Server extension
# Right-click on index.html → "Open with Live Server"

# 3. Open browser and navigate to:
# http://localhost:8000
```

## 🎵 First Look

After starting the development server, you should see:

### Dashboard Homepage
- **Header Navigation** with user profile and notifications
- **Sidebar Menu** with all available sections
- **Main Dashboard** with analytics cards and charts
- **Music Player** at the bottom (if applicable)

### Key Sections
1. **Dashboard** - Overview with statistics and charts
2. **Music Player** - Audio playback interface
3. **Albums** - Music collection management
4. **Artists** - Artist profile management
5. **Admin Panel** - Administrative controls

## ⚡ Quick Configuration

### 1. Environment Configuration

Create a `.env` file in the root directory:

```env
# Application Configuration
VITE_APP_NAME="Muzik Admin"
VITE_APP_VERSION="1.1.0"

# API Configuration
VITE_API_BASE_URL="https://api.muzik.com"
VITE_API_TIMEOUT=10000

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DARK_MODE=true
VITE_ENABLE_RTL=true

# Development
VITE_DEBUG_MODE=true
```

### 2. Theme Configuration

Edit `src/utilities/setting.js`:

```javascript
export const themeConfig = {
  theme_scheme: 'light',              // 'light' | 'dark' | 'auto'
  theme_scheme_direction: 'ltr',      // 'ltr' | 'rtl'
  theme_color: 'theme-color-default', // Primary color theme
  sidebar_color: 'sidebar-white',     // Sidebar color scheme
  sidebar_type: ['sidebar-mini'],     // Sidebar type options
  sidebar_menu_style: 'sidebar-default' // Menu style
}
```

### 3. Basic Customization

Update the app title in `index.html`:

```html
<title>Your Music Platform - Admin Dashboard</title>
```

Update the logo in `src/assets/images/` by replacing:
- `logo.svg` - Main logo
- `logo-mini.svg` - Compact logo
- `favicon.ico` - Browser favicon

## 🎨 Customizing Your Dashboard

### 1. Change Primary Colors

Edit `src/assets/scss/custom.scss`:

```scss
// Custom color variables
:root {
  --bs-primary: #8B5CF6;      // Purple theme
  --bs-secondary: #64748B;    // Gray
  --bs-success: #10B981;      // Green
  --bs-danger: #EF4444;       // Red
  --bs-warning: #F59E0B;      // Yellow
  --bs-info: #3B82F6;         // Blue
}
```

### 2. Add Your Branding

Replace the default branding in `src/components/partials/HeaderComponent.vue`:

```vue
<template>
  <div class="navbar-brand">
    <img src="/assets/images/your-logo.svg" alt="Your Brand" />
    <span class="brand-text">Your Platform</span>
  </div>
</template>
```

### 3. Customize Dashboard Widgets

Edit `src/views/main-pages/IndexPage.vue` to modify dashboard content:

```vue
<script setup>
// Update dashboard statistics
const stats = ref([
  { title: 'Total Artists', value: '1,234', icon: 'music-note' },
  { title: 'Total Albums', value: '5,678', icon: 'album' },
  { title: 'Active Users', value: '98.5K', icon: 'users' },
  { title: 'Revenue', value: '$45.2K', icon: 'dollar' }
])
</script>
```

## 🎵 Adding Your First Music Content

### 1. Add Sample Artists

Edit the artist data in `src/views/main-pages/admin/DashboardPage.vue`:

```javascript
const artistData = [
  {
    id: 1,
    name: 'Taylor Swift',
    email: 'taylor@example.com',
    joining_date: 'Jan 15, 2024',
    total_songs: '234'
  },
  {
    id: 2,
    name: 'Ed Sheeran',
    email: 'ed@example.com',
    joining_date: 'Feb 20, 2024',
    total_songs: '187'
  }
]
```

### 2. Configure Music Player

Update the music player component in `src/views/main-pages/MusicPlayer.vue`:

```vue
<script setup>
const currentSong = ref({
  title: 'Sample Song',
  artist: 'Sample Artist',
  album: 'Sample Album',
  duration: '3:45',
  artwork: '/assets/images/sample-artwork.jpg'
})
</script>
```

## 🔧 Development Commands

Here are the essential commands for development:

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Run tests (if configured)
npm run test
```

## 📱 Mobile Testing

Test your dashboard on mobile devices:

### Browser DevTools
1. Open Chrome DevTools (F12)
2. Click device icon (📱) or press Ctrl+Shift+M
3. Select different device sizes
4. Test touch interactions

### Real Device Testing
1. Get your local IP address:
   ```bash
   # Windows
   ipconfig
   
   # macOS/Linux
   ifconfig
   ```

2. Access from mobile browser:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```

3. Test on different devices and orientations

## 🐛 Common Issues & Solutions

### Issue: Port Already in Use
```bash
# Error: Port 3000 is already in use
# Solution: Use a different port
npm run dev -- --port 3001
```

### Issue: Node.js Version Mismatch
```bash
# Check your Node.js version
node --version

# If below v18, update Node.js or use nvm:
nvm install 18
nvm use 18
```

### Issue: Permission Errors (macOS/Linux)
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
```

### Issue: Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 🎯 Next Steps

Now that you have Muzik Admin Dashboard running:

1. **📖 Read the Documentation**
   - [Architecture Overview](architecture.md)
   - [Music Management Guide](music-management.md)
   - [User Management](user-management.md)

2. **🎨 Customize Your Dashboard**
   - [Theming Guide](theming.md)
   - [Component Library](development.md#components)

3. **🔌 Connect Your Backend**
   - [API Integration Guide](api-integration.md)
   - [Authentication Setup](api-integration.md#authentication)

4. **🚀 Deploy to Production**
   - [Deployment Guide](deployment.md)
   - [Performance Optimization](deployment.md#optimization)

## 💡 Pro Tips

### Development Efficiency
- Use **Vue DevTools** browser extension for debugging
- Install **Volar** VS Code extension for Vue 3 support
- Use **ESLint** and **Prettier** VS Code extensions
- Enable **Auto Save** in your editor

### Keyboard Shortcuts
- `Ctrl+Shift+I` - Open DevTools
- `Ctrl+Shift+R` - Hard refresh
- `Ctrl+Shift+C` - Inspect element
- `F12` - Toggle DevTools

### Code Organization
- Keep components small and focused
- Use composition API for better reusability
- Follow the existing folder structure
- Write descriptive commit messages

## 📞 Getting Help

If you encounter any issues:

1. **Check the FAQ** - [FAQ.md](faq.md)
2. **Search GitHub Issues** - [GitHub Issues](https://github.com/sobhanaz/muzik-admin-dashboard/issues)
3. **Create a New Issue** with detailed information
4. **Contact Support** - contact@tecso.team

## 🎉 You're Ready!

Congratulations! You now have Muzik Admin Dashboard running locally. You can start customizing it for your music platform needs.

**Next recommended steps:**
- Explore the demo content
- Read the [Music Management Guide](music-management.md)
- Set up your [API integration](api-integration.md)
- Customize the [theme and branding](theming.md)

---

*Happy coding! 🎵* 

Built with ❤️ by [Sobhan Azimzadeh](https://github.com/sobhanaz) - TECSO Digital Agency