# Blog Post Creation

## New Post Location
All posts go under `content/posts/` (not `_articles/`).

## Naming Convention
Directory: `YYYY-MM-DD-slug/index.md`
Example: `content/posts/2026-04-12-my-new-post/index.md`

## Front Matter
```yaml
---
title: "Post Title"
date: YYYY-MM-DDTHH:MM:SS-05:00
categories: ["category1", "category2"]
draft: false
---
```

## Front Matter Fields
- `title`: Post title (use quotes if contains special chars)
- `date`: ISO 8601 format with timezone (e.g., `2026-04-12T10:00:00-05:00`)
- `categories`: Array of categories (use plural, not singular)
- `draft`: `false` to publish, `true` to keep hidden
- `author`: Optional, omit if using site config default

## Reference
See `content/posts/2020-01-20-a-year-of-books/index.md` for full example.
