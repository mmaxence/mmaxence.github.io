#!/bin/bash

# Hugo Build Optimization Script
# This script optimizes the Hugo build process

echo "🚀 Optimizing Hugo build..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf public/ resources/

# Build with optimizations
echo "📦 Building with optimizations..."
hugo --minify \
  --templateMetrics \
  --templateMetricsHints \
  --gc \
  --cleanDestinationDir

# Optimize images (if ImageMagick is available)
if command -v magick &> /dev/null; then
    echo "🖼️ Optimizing images..."
    find public/images -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | while read file; do
        # Convert to WebP
        magick "$file" "${file%.*}.webp"
        # Optimize original
        magick "$file" -quality 85 -strip "$file"
    done
fi

# Generate sitemap
echo "🗺️ Generating sitemap..."
hugo --templateMetrics --templateMetricsHints

echo "✅ Build optimization complete!"
echo "📊 Build stats:"
echo "   - Pages: $(find public -name "*.html" | wc -l)"
echo "   - Images: $(find public/images -type f | wc -l)"
echo "   - Size: $(du -sh public | cut -f1)"
