# Content Organization Guide

## 📁 Directory Structure

### Blog Posts
```
content/blog/posts/
├── post-name/           # Use kebab-case
│   ├── index.md         # Main content
│   ├── hero.jpg         # Featured image
│   └── other-images/    # Additional images
```

### Timeline Entries
```
content/Timeline/posts/
├── role-name/           # Use kebab-case
│   ├── index.md         # Main content
│   └── hero.jpg         # Featured image
```

### Library Books
```
content/Library/Books/
├── book-title.md        # Use kebab-case
```

## 🖼️ Image Organization

### Static Images
```
static/images/
├── blog/                # Blog post images
├── timeline/            # Timeline images
├── library/             # Book covers
└── general/             # General site images
```

### Image Naming Convention
- Use kebab-case: `my-awesome-image.jpg`
- Include size in filename: `hero-1200x600.jpg`
- Use descriptive names: `product-screenshot.jpg`

## 📝 Content Guidelines

### Front Matter
```yaml
---
title: "Your Title"
date: 2025-01-01
draft: false
featured_image: "/images/blog/post-name/hero.jpg"
tags: ["tag1", "tag2"]
categories: ["category1"]
summary: "Brief description"
---
```

### File Naming
- **Content files**: `index.md`
- **Images**: `hero.jpg`, `screenshot-1.jpg`
- **Directories**: Use kebab-case

## 🚀 Performance Tips

1. **Optimize images** before adding to static/
2. **Use WebP format** when possible
3. **Compress images** to 85% quality
4. **Use descriptive alt text** for accessibility
5. **Keep file sizes** under 500KB

## 🔧 Content Creation Commands

```bash
# New blog post
hugo new blog/posts/my-new-post/index.md

# New timeline entry
hugo new timeline/posts/my-experience/index.md

# New library entry
hugo new library/books/book-title/index.md
```
