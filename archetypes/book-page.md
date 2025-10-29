---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
author: "Maxence Mauduit"
description: "How {{ .Name | replace "-" " " | title }} influenced my design thinking"
categories: ["Book Review"]
tags: ["design", "learning", "book"]
featured_image: "/images/books/{{ .Name }}.jpg"
book_author: "Author Name"
book_category: "Category"
book_year: "Year"
amazon_link: "https://www.amazon.com/s?k={{ .Name | replace "-" "+" }}"
---

## About This Book

**Author:** {{ .Params.book_author }}  
**Category:** {{ .Params.book_category }}  
**Year:** {{ .Params.book_year }}  
**Purchase:** [Amazon]({{ .Params.amazon_link }})

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
