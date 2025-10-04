# 🎵 Muzik Admin Dashboard - Gulp + Handlebars Version

<div align="center">

![Gulp](https://img.shields.io/badge/Gulp-CF4647?logo=gulp)
![Handlebars](https://img.shields.io/badge/Handlebars-f0772b?logo=handlebarsdotjs)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.2.3-7952B3?logo=bootstrap)
![License](https://img.shields.io/badge/license-MIT-green)

**Static site generator version of Muzik Admin Dashboard using Gulp and Handlebars**

</div>

## ✨ Features

### 🎵 Music Platform UI
- **Complete Admin Interface** for music streaming platforms
- **Static HTML Generation** with Handlebars templating
- **Responsive Design** optimized for all devices
- **Bootstrap 5** with custom SCSS styling
- **Dark/Light Theme** support
- **RTL Language** support
- **Music Player Interface** with static controls
- **Dashboard Analytics** with chart placeholders

### 🛠️ Build System
- **Gulp 4** for modern build automation
- **Handlebars** for template compilation
- **SCSS Compilation** with autoprefixer
- **JavaScript Bundling** and minification
- **Image Optimization** and sprite generation
- **Live Reload** for development
- **Production Optimization** with compression

## 🚀 Quick Start

### Prerequisites
- **Node.js** v16.0.0 or higher
- **npm** v8.0.0 or higher

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
# Development with live reload
npm run dev

# Build for production
npm run build

# Clean build directory
npm run clean

# Watch files for changes
npm run watch
```

## 📁 Project Structure

```
src/
├── templates/         # Handlebars templates
│   ├── layouts/      # Page layouts
│   ├── partials/     # Reusable components
│   └── pages/        # Individual pages
├── scss/             # SCSS stylesheets
│   ├── components/   # Component styles
│   ├── layouts/      # Layout styles
│   └── utilities/    # Utility classes
├── js/               # JavaScript files
│   ├── components/   # UI components
│   └── modules/      # Feature modules
├── images/           # Image assets
└── data/             # JSON data for templates

dist/                 # Generated output
├── css/             # Compiled CSS
├── js/              # Bundled JavaScript
├── images/          # Optimized images
└── *.html           # Generated HTML pages
```

## 🎨 Template System

### Handlebars Layouts

```handlebars
{{!-- src/templates/layouts/default.hbs --}}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{title}} - Muzik Admin</title>
    <link rel="stylesheet" href="css/muzik.min.css">
</head>
<body>
    {{> header}}
    
    <main class="main-content">
        {{> sidebar}}
        <div class="content-wrapper">
            {{{body}}}
        </div>
    </main>
    
    {{> footer}}
    <script src="js/muzik.min.js"></script>
</body>
</html>
```

### Page Templates

```handlebars
{{!-- src/templates/pages/dashboard.hbs --}}
---
layout: default
title: Dashboard
---

<div class="dashboard">
    <div class="row">
        {{#each stats}}
        <div class="col-lg-3 col-md-6">
            {{> stat-card this}}
        </div>
        {{/each}}
    </div>
    
    <div class="row">
        <div class="col-lg-8">
            {{> chart-widget}}
        </div>
        <div class="col-lg-4">
            {{> recent-activity}}
        </div>
    </div>
</div>
```

## 🎵 Data Structure

### Music Data

```json
// src/data/music.json
{
  "artists": [
    {
      "id": 1,
      "name": "Taylor Swift",
      "image": "images/artists/taylor-swift.jpg",
      "totalSongs": 234,
      "totalAlbums": 12,
      "followers": "89.2M"
    }
  ],
  "albums": [
    {
      "id": 1,
      "title": "Midnights",
      "artist": "Taylor Swift",
      "artwork": "images/albums/midnights.jpg",
      "releaseDate": "2022-10-21",
      "tracks": 13
    }
  ]
}
```

## 🚀 Deployment

### Build for Production

```bash
# Create optimized build
npm run build

# Files will be generated in dist/ directory
```

### Static Hosting

The `dist/` folder contains all static files ready for deployment to:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect GitHub and set build command to `npm run build`
- **GitHub Pages**: Upload `dist` contents to `gh-pages` branch
- **AWS S3**: Sync `dist` folder to S3 bucket

## 🎯 Use Cases

This static version is perfect for:

- **Design Presentations** - Show clients the interface
- **Frontend Development** - Develop without backend
- **Prototyping** - Rapid UI/UX testing
- **Documentation** - Style guide and component library
- **Landing Pages** - Marketing and demo sites

## 🤝 Contributing

See the main [Contributing Guide](../../CONTRIBUTING.md) for details.

## 📞 Support

- **Documentation**: [Main Docs](../../docs/)
- **Issues**: [GitHub Issues](https://github.com/sobhanaz/muzik-admin-dashboard/issues)
- **Email**: contact@tecso.team

---

**Built with Gulp + Handlebars for static site generation**

*Part of the Muzik Admin Dashboard project by [Sobhan Azimzadeh](https://github.com/sobhanaz)*