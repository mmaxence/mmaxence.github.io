# Book Review System

This document explains how the book review system works on the website.

## Structure

### Book Pages
- **Location**: `content/library/Books/`
- **Format**: `{book-name}-review.md`
- **Template**: Uses `layouts/_default/single-book.html`

### Book Data
- **Original books**: `{book-name}.md` (metadata only)
- **Review pages**: `{book-name}-review.md` (full content)

## Creating New Book Reviews

### Method 1: Using the Script
```bash
./scripts/create-book-pages.sh
```

### Method 2: Manual Creation
```bash
hugo new --kind book-page content/library/Books/my-book-review.md
```

## Book Review Template

Each review should include:

1. **About This Book** - Basic metadata
2. **Key Insights** - Three sections:
   - Design Thinking Impact
   - Leadership Lessons  
   - Practical Applications
3. **Favorite Quotes** - Memorable passages
4. **How It Shaped My Work** - Specific examples
5. **Recommendation** - Who should read it

## Front Matter Fields

```yaml
---
title: "Book Title"
date: 2025-10-29
draft: true
author: "Maxence Mauduit"
description: "How [Book Title] influenced my design thinking"
categories: ["Book Review"]
tags: ["design", "learning", "book"]
featured_image: "/images/books/book-cover.jpg"
book_author: "Author Name"
book_category: "Category"
book_year: "Year"
amazon_link: "https://www.amazon.com/s?k=book+title"
---
```

## Styling

Book pages use custom CSS classes:
- `.book-header` - Book metadata section
- `.book-cover` - Book cover image with hover effect
- `.book-content` - Main content area
- `.book-navigation` - Back to shelf and sharing
- `.btn` - Call-to-action buttons

## Navigation

- Books link from the Shelf page to individual review pages
- Each review page has a "Back to Shelf" link
- Social sharing links for Twitter

## Images

- **Book covers**: Store in `static/images/books/`
- **Naming**: Use kebab-case matching the book name
- **Format**: JPG or PNG, optimized for web
- **Size**: Recommended 300x400px for consistency

## Publishing Workflow

1. Create review page (draft: true)
2. Add book cover image
3. Write your insights and examples
4. Update metadata (year, category, etc.)
5. Set draft: false to publish
6. Test the page locally
7. Commit and push to deploy

## Example Book Review

See `content/library/Books/thinking-fast-and-slow-review.md` for a complete example of how to structure a book review with personal insights and practical applications.
