#!/bin/bash

# Script to create book review pages for all books in the library
# Usage: ./scripts/create-book-pages.sh

echo "📚 Creating book review pages..."

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
BOOKS_DIR="$PROJECT_ROOT/content/library/Books"

# Check if books directory exists
if [ ! -d "$BOOKS_DIR" ]; then
    echo "❌ Books directory not found: $BOOKS_DIR"
    exit 1
fi

# Counter for created pages
created=0
skipped=0

# Process each book file
for book_file in "$BOOKS_DIR"/*.md; do
    # Skip if it's not a regular file or if it's already a review
    if [ ! -f "$book_file" ] || [[ "$book_file" == *"-review.md" ]]; then
        continue
    fi
    
    # Extract book name from filename
    book_name=$(basename "$book_file" .md)
    review_file="$BOOKS_DIR/${book_name}-review.md"
    
    # Skip if review already exists
    if [ -f "$review_file" ]; then
        echo "⏭️  Skipping $book_name (review already exists)"
        ((skipped++))
        continue
    fi
    
    # Extract book info from existing file
    title=$(grep "^title:" "$book_file" | sed 's/title: *"\(.*\)"/\1/')
    author=$(grep "^description:" "$book_file" | sed 's/description: *"\(.*\)"/\1/')
    category=$(grep "category:" "$book_file" | sed 's/.*category: *"\(.*\)"/\1/')
    image=$(grep "featured_image:" "$book_file" | sed 's/featured_image: *"\(.*\)"/\1/')
    amazon_link=$(grep "linktitle:" "$book_file" | sed 's/linktitle: *"\(.*\)"/\1/')
    
    # Create review page
    cat > "$review_file" << EOF
---
title: "$title"
date: $(date +%Y-%m-%d)
draft: true
author: "Maxence Mauduit"
description: "How $title influenced my design thinking"
categories: ["Book Review"]
tags: ["design", "learning", "book"]
featured_image: "$image"
book_author: "$author"
book_category: "$category"
book_year: "Year"
amazon_link: "$amazon_link"
---

## About This Book

**Author:** $author  
**Category:** $category  
**Year:** Year  
**Purchase:** [Amazon]($amazon_link)

## Key Insights

### Design Thinking Impact

How this book changed my approach to design and creative work.

### Leadership Lessons

What I learned about leading teams and managing projects.

### Practical Applications

Specific techniques or frameworks I now use in my work.

## Favorite Quotes

> "Quote that resonated with me and why it matters for designers."

## How It Shaped My Work

Describe specific examples of how this book influenced your design decisions, team management, or creative process.

## Recommendation

Who should read this book and why it's valuable for designers and creative professionals.
EOF
    
    echo "✅ Created review page for: $title"
    ((created++))
done

echo ""
echo "📊 Summary:"
echo "   Created: $created new review pages"
echo "   Skipped: $skipped existing reviews"
echo ""
echo "🎯 Next steps:"
echo "   1. Edit the draft review pages to add your insights"
echo "   2. Set draft: false when ready to publish"
echo "   3. Add book cover images to /static/images/books/"
echo "   4. Update book years and other metadata as needed"
