# Contributing to Muzik Admin Dashboard

First off, thank you for considering contributing to Muzik Admin Dashboard! It's people like you that make this project a great tool for the music streaming community.

## 🎯 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [contact@tecso.team](mailto:contact@tecso.team).

## 🚀 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

**Use the bug report template:**
- **Bug Summary**: A clear and concise description
- **Steps to Reproduce**: Detailed steps to reproduce the behavior
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Screenshots**: If applicable, add screenshots
- **Environment**: 
  - OS: [e.g. iOS, Windows, Linux]
  - Browser: [e.g. Chrome, Safari, Firefox]
  - Version: [e.g. 22]
  - Node.js version
  - npm/yarn version

### 💡 Suggesting Enhancements

Enhancement suggestions are welcome! Please provide the following information:

- **Feature Summary**: Clear and concise description of the feature
- **Problem Statement**: What problem does this solve?
- **Proposed Solution**: Detailed description of how it should work
- **Alternatives Considered**: Any alternative solutions you've considered
- **Additional Context**: Screenshots, mockups, or examples

### 🛠️ Pull Requests

1. **Fork the Repository**
   ```bash
   git clone https://github.com/your-username/muzik-admin-dashboard.git
   cd muzik-admin-dashboard
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   # or
   git checkout -b fix/bug-fix
   # or
   git checkout -b docs/update-readme
   ```

3. **Set Up Development Environment**
   ```bash
   cd muzik-main/vue
   npm install
   npm run dev
   ```

4. **Make Your Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

5. **Test Your Changes**
   ```bash
   npm run lint
   npm run test
   npm run build
   ```

6. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add amazing new feature"
   ```

7. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

8. **Create a Pull Request**

## 📋 Development Guidelines

### 🎨 Code Style

We use **ESLint** and **Prettier** for consistent code formatting:

```bash
# Check code style
npm run lint

# Auto-fix style issues
npm run lint:fix

# Format code
npm run format
```

### 🏗️ Project Structure

```
src/
├── assets/          # Static assets (images, styles)
├── components/      # Reusable Vue components
│   ├── auth/        # Authentication components
│   ├── custom/      # Custom UI components
│   ├── partials/    # Layout partials
│   └── widgets/     # Dashboard widgets
├── layouts/         # Page layouts
├── views/           # Page components
├── router/          # Vue Router configuration
├── store/           # Vuex state management
├── utilities/       # Helper functions
├── plugins/         # Vue plugins
└── locales/         # Internationalization
```

### 🧩 Component Guidelines

1. **Use Composition API**:
   ```vue
   <script setup>
   import { ref, computed } from 'vue'
   
   const props = defineProps({
     title: String,
     isActive: Boolean
   })
   
   const emit = defineEmits(['update'])
   </script>
   ```

2. **Props Validation**:
   ```javascript
   const props = defineProps({
     title: {
       type: String,
       required: true
     },
     items: {
       type: Array,
       default: () => []
     }
   })
   ```

3. **Component Naming**:
   - Use PascalCase for component names
   - Be descriptive: `MusicPlayerControls` not `Controls`
   - Include the domain: `SongPlayList`, `ArtistCard`

### 🎵 Music-Specific Guidelines

1. **Audio Handling**:
   ```javascript
   // Good: Handle audio errors gracefully
   const playAudio = async (src) => {
     try {
       await audioElement.play()
     } catch (error) {
       console.error('Audio playback failed:', error)
       // Handle error state
     }
   }
   ```

2. **Playlist Management**:
   ```javascript
   // Good: Immutable playlist updates
   const addToPlaylist = (song) => {
     playlist.value = [...playlist.value, song]
   }
   ```

3. **Performance**:
   - Lazy load audio files
   - Use virtual scrolling for large lists
   - Optimize image loading for album artwork

### 🧪 Testing

We encourage writing tests for new features:

```javascript
// tests/components/MusicPlayer.test.js
import { mount } from '@vue/test-utils'
import MusicPlayer from '@/components/MusicPlayer.vue'

describe('MusicPlayer', () => {
  it('should play audio when play button is clicked', async () => {
    const wrapper = mount(MusicPlayer, {
      props: { src: 'test-audio.mp3' }
    })
    
    await wrapper.find('.play-button').trigger('click')
    expect(wrapper.vm.isPlaying).toBe(true)
  })
})
```

### 📝 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

**Examples:**
```
feat(music-player): add shuffle functionality
fix(playlist): resolve song duplication issue
docs(readme): update installation instructions
style(sidebar): improve responsive design
```

## 🔍 Review Process

All submissions go through a review process:

1. **Automated Checks**: CI/CD pipeline runs tests and linting
2. **Code Review**: Maintainers review code quality and design
3. **Testing**: Manual testing of new features
4. **Documentation**: Ensure proper documentation is included

### Review Criteria

- **Functionality**: Does it work as intended?
- **Code Quality**: Is the code clean and maintainable?
- **Performance**: Are there any performance implications?
- **Security**: Are there any security concerns?
- **Documentation**: Is it properly documented?
- **Testing**: Are there adequate tests?

## 🏷️ Release Process

1. **Version Bump**: Update version in `package.json`
2. **Changelog**: Update `CHANGELOG.md` with new changes
3. **Testing**: Comprehensive testing of all features
4. **Documentation**: Update documentation as needed
5. **Release**: Create GitHub release with release notes

## 🤝 Community

### 💬 Getting Help

- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For questions and community support
- **Email**: [contact@tecso.team](mailto:contact@tecso.team) for private matters

### 🎵 Music Community Focus

This project is specifically designed for the music streaming community. When contributing, consider:

- **User Experience**: How will this affect music lovers?
- **Artist Needs**: What do artists and labels need?
- **Performance**: Music streaming requires high performance
- **Accessibility**: Make music accessible to everyone

## 🎉 Recognition

Contributors will be recognized in:

- **Contributors section** in README
- **Release notes** for significant contributions
- **Special thanks** in project documentation

## 📞 Contact

**Project Maintainer**: Sobhan Azimzadeh
- **Email**: contact@tecso.team
- **GitHub**: [@sobhanaz](https://github.com/sobhanaz)
- **LinkedIn**: [sobhan-azimzadeh](https://linkedin.com/in/sobhan-azimzadeh-b956aa234)
- **Telegram**: [@sobhanazimzadeh](https://t.me/sobhanazimzadeh)

---

Thank you for contributing to Muzik Admin Dashboard! 🎵✨