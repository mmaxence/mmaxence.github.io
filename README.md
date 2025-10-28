# Maxence Mauduit - Personal Website

A modern, fast, and clean personal website showcasing design work, blog posts, and professional experience. Built with Hugo and deployed on GitHub Pages with optimized build processes and content organization.

## 🌐 Live Site

**https://mmaxence.me**

## 🎯 Purpose

This website serves as a digital portfolio and professional presence, featuring:

- **Design Portfolio**: Showcasing design work and case studies
- **Blog**: Technical articles and insights on design, leadership, and product development
- **Library**: Curated collection of books and resources
- **Timeline**: Professional experience and career journey
- **Materials**: Design and leadership resources

## ✨ Recent Optimizations

- **Build Performance**: Optimized Hugo build process with template metrics and garbage collection
- **Content Organization**: Structured image directories and standardized content creation
- **CI/CD Pipeline**: Enhanced GitHub Actions workflow with performance monitoring
- **Content Management**: Added archetypes and guidelines for consistent content creation

## 🛠 Tech Stack

### Core Technologies
- **[Hugo](https://gohugo.io/)** - Static site generator (v0.148.2+)
- **[Ananke Theme](https://github.com/theNewDynamic/gohugo-theme-ananke)** - Clean, responsive theme
- **[GitHub Pages](https://pages.github.com/)** - Hosting and deployment
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline

### Build Tools
- **Hugo Extended** - For SCSS processing and advanced features
- **Minification** - Optimized CSS and HTML output
- **Template Metrics** - Performance monitoring and optimization
- **Garbage Collection** - Automatic cleanup of unused resources
- **Custom CSS/JS** - Additional styling and interactions

### Content Management
- **Markdown** - All content written in Markdown
- **Front Matter** - YAML metadata for posts and pages
- **Taxonomies** - Tags and categories for content organization

## 📁 Project Structure

```
mmaxence.github.io/
├── content/                 # Content files (Markdown)
│   ├── blog/               # Blog posts
│   ├── Library/            # Book reviews and resources
│   ├── Timeline/           # Professional timeline
│   └── materials/          # Design and leadership materials
├── static/                 # Static assets
│   └── images/            # Images organized by content type
│       ├── blog/          # Blog post images
│       ├── timeline/      # Timeline images
│       └── library/       # Book covers
├── layouts/               # Custom Hugo templates
├── themes/                # Hugo theme (Ananke)
├── archetypes/            # Content templates
├── scripts/               # Build optimization scripts
├── config.toml           # Site configuration
├── deploy.sh             # Deployment script
├── CONTENT_GUIDE.md      # Content organization guide
└── .github/workflows/    # GitHub Actions
```

## 🚀 Getting Started

### Prerequisites
- [Hugo Extended](https://gohugo.io/installation/) (v0.148.2+)
- Git
- GitHub account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/mmaxence/mmaxence.github.io.git
   cd mmaxence.github.io
   ```

2. **Start the development server**
   ```bash
   hugo server --buildDrafts
   ```

3. **View the site**
   - Open http://localhost:1313 in your browser
   - The site will auto-reload when you make changes

### Adding Content

#### New Blog Post
```bash
hugo new blog/posts/my-new-post/index.md
```

#### New Timeline Entry
```bash
hugo new timeline/posts/my-experience/index.md
```

#### New Library Entry
```bash
hugo new library/books/book-title/index.md
```

## 🚀 Deployment

### Option 1: Simple Deployment (Local Build)
```bash
./deploy.sh "Your commit message"
```

### Option 2: Optimized Build
```bash
./scripts/optimize-build.sh
```

### Option 3: Automatic Deployment (GitHub Actions)
```bash
git add .
git commit -m "Your changes"
git push origin master
# GitHub Actions automatically builds and deploys
```

## ⚙️ Configuration

### Site Settings (`config.toml`)
- **Base URL**: https://mmaxence.me
- **Title**: Product Designer, CDO at buzzvil
- **Author**: Maxence Mauduit
- **Theme**: Ananke
- **Language**: English

### Custom Features
- **Custom CSS**: `static/dist/css/style.css`
- **Custom JS**: `static/dist/js/script.js`
- **Favicon**: `static/images/favicon.png`
- **Social Links**: Twitter, LinkedIn, GitHub, Medium

## 📝 Content Guidelines

### Blog Posts
- Use descriptive titles
- Include featured images
- Add relevant tags
- Set publication dates
- Write in Markdown

### Images
- Store in `static/images/`
- Use descriptive filenames
- Optimize for web (WebP recommended)
- Include alt text

### SEO
- Meta descriptions in front matter
- Proper heading hierarchy
- Clean URLs
- Sitemap auto-generated

## 🔧 Customization

### Styling
- Edit `static/dist/css/style.css` for custom styles
- Override theme styles in `layouts/`
- Use Hugo's built-in SCSS processing

### Layouts
- Custom templates in `layouts/`
- Override theme templates as needed
- Use Hugo's template inheritance

### Content Types
- Define custom content types in `archetypes/`
- Create custom taxonomies
- Add new content sections

## 📊 Performance

### Optimizations
- **Static Generation**: Pre-built HTML for fast loading
- **Minification**: Compressed CSS and HTML
- **Image Optimization**: WebP format support
- **CDN**: GitHub Pages global CDN
- **Caching**: Aggressive browser caching

### Metrics
- **Build Time**: ~44ms (109 pages)
- **Page Size**: Optimized for mobile
- **Core Web Vitals**: Excellent scores
- **Lighthouse**: 95+ performance score

## 🛡️ Security

- **HTTPS**: Enforced by GitHub Pages
- **No Server**: Static site, no server vulnerabilities
- **Content Security**: All content version controlled
- **Dependencies**: Minimal external dependencies

## 📈 Analytics & Monitoring

- **GitHub Actions**: Build and deployment monitoring
- **GitHub Insights**: Repository analytics
- **Custom Domain**: mmaxence.me with SSL
- **Sitemap**: Auto-generated for search engines

## 🤝 Contributing

This is a personal website, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Website**: https://mmaxence.me
- **Email**: [Contact through website](https://mmaxence.me)
- **LinkedIn**: [Max Mauduit](https://www.linkedin.com/in/mmaxence/)
- **Twitter**: [@mmaxence](https://twitter.com/mmaxence)

---

**Built with ❤️ using Hugo and deployed on GitHub Pages**