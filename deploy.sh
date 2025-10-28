#!/bin/bash

# Simple deploy script for mmaxence.github.io
# Usage: ./deploy.sh "Your commit message"

if [ -z "$1" ]; then
    echo "Usage: ./deploy.sh 'Your commit message'"
    exit 1
fi

echo "🚀 Deploying to GitHub Pages..."

# Build Hugo site
echo "📦 Building Hugo site..."
hugo --minify

# Copy to root directory
echo "📁 Copying files to root..."
cp -r public/* .

# Commit and push
echo "💾 Committing and pushing..."
git add .
git commit -m "$1"
git push origin master

echo "✅ Deployed! Check https://mmaxence.me in a few minutes."
